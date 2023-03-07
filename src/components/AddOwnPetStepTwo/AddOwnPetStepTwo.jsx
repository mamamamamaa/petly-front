import { Field, Form, Formik, useFormik } from 'formik';
import { object, string, mixed } from 'yup';
import { useState, useEffect } from 'react';
import { GrAdd } from 'react-icons/gr';
import { FiCheck } from 'react-icons/fi';

import {
  Container,
  Title,
  Box,
  BoxImg,
  BoxComent,
  TitleComent,
  BoxWarning,
  BoxButton,
  ButtonDone,
  ButtonBack,
  BoxLabel,
} from './AddOwnPetStepTwo.styled';
import css from './ModalAddsPet.module.css';
import { AddNoticeStepTwoDragDropContext } from 'components/ModalAddNoticeV2/AddNoticeStepTwoDragDropContext';
import {
  handleImageLoad,
  restorePreview,
} from 'components/ModalAddNoticeV2/handleImageLoadRestorePreview';
const addOwnPetSchema = object().shape({
  photoUrl: mixed().required('Required'),
  comments: string()
    .min(8, 'Must be 8 or more letter')
    .max(120, 'Must be 120 or less letter')
    .trim()
    .required('Required'),
});

export const AddOwnPetStepTwo = ({ data, next, prev, onClose }) => {
  const [isFileUpload, setIsFileUpload] = useState(
    data.photoUrl ? true : false
  );
  const handleBack = () => {
    const newValue = {
      ...data,
      ...formik.values,
    };
    prev(newValue);
  };

  const formik = useFormik({
    initialValues: {
      photoUrl: data.photoUrl,
      comments: data.comments,
    },
    validationSchema: addOwnPetSchema,
    onSubmit: (values, actions) => {
      actions.setFieldValue('photoUrl', values.photoUrl, values.photoUrl.name);
      actions.validateForm();
      const newValue = {
        ...data,
        ...values,
      };

      next(newValue, true);
      localStorage.setItem('preview', '');
      actions.resetForm();
      onClose();
    },
  });
  const [preview, setPreview] = useState([]); // LOAD PREVIEW IMAGE
  useEffect(() => {
    // restore the preview images when the component mounts
    restorePreview(setPreview);
  }, []);
  return (
    <Formik>
      <Container>
        <Title>Add photo and some comments</Title>
        <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <Box>
            <BoxLabel>
              <BoxImg>
                {isFileUpload && (
                  <FiCheck color="#F59256" width="150" heigh="150" />
                )}
                {!isFileUpload && <GrAdd className={css.iconForm} />}
              </BoxImg>
              <Field
                className={css.inputFormImg}
                type="file"
                id="photoUrl"
                name="photoUrl"
                accept="image/*"
                onChange={event => {
                  handleImageLoad(setPreview, formik, event);
                  setIsFileUpload(true);
                }}
                value=""
                multiple
              />
              {formik.touched.photoUrl && (
                <BoxWarning>{formik.errors.photoUrl}</BoxWarning>
              )}
            </BoxLabel>
          </Box>
          <AddNoticeStepTwoDragDropContext
            {...{ formik, preview, setPreview }}
          />
          <BoxComent>
            <TitleComent>
              <label>Comments</label>
            </TitleComent>

            <Field
              as="textarea"
              name="comments"
              type="text"
              placeholder="Type comments"
              className={css.textForm}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.comments}
            />
            {formik.touched.comments && formik.errors.comments ? (
              <BoxWarning>{formik.errors.comments}</BoxWarning>
            ) : null}
          </BoxComent>
          <BoxButton>
            <ButtonBack type="button" onClick={handleBack}>
              Back
            </ButtonBack>
            <ButtonDone type="submit">Done</ButtonDone>
          </BoxButton>
        </Form>
      </Container>
    </Formik>
  );
};
