import { Field, Form, Formik, useFormik } from 'formik';
import { object, string, mixed } from 'yup';
import { useState } from 'react';
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
} from './AddOwnPetStepTwo.styled';
import css from './ModalAddsPet.module.css';

const addOwnPetSchema = object().shape({
  pictureURL: mixed().required('Required'),
  comments: string()
    .min(8, 'Must be 8 or more letter')
    .max(120, 'Must be 120 or less letter')
    .trim()
    .required('Required'),
});

export const AddOwnPetStepTwo = ({ data, next, prev, onClose }) => {
  const [isFileUpload, setIsFileUpload] = useState(data.pictureURL? true : false);
  const handleBack = () => {
    const newValue = {
      ...data,
      ...formik.values,
    };
    prev(newValue);
  };

  const formik = useFormik({
    initialValues: {
      pictureURL: data.pictureURL,
      comments: data.comments,
    },
    validationSchema: addOwnPetSchema,
    onSubmit: (values, actions) => {
      actions.setFieldValue(
        'pictureURL',
        values.pictureURL,
        values.pictureURL.name
      );
      actions.validateForm();
      const newValue = {
        ...data,
        ...values,
      };

      next(newValue, true);
      actions.resetForm();
      onClose();
    },
  });
  return (
    <Formik>
    <Container>
      <Title>Add photo and some comments</Title>
      <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <Box>
          <label>
            <BoxImg>
              { isFileUpload && <FiCheck color="#F59256" width="150" heigh="150"/>}
              { !isFileUpload && <GrAdd className={css.iconForm} />}
            </BoxImg>
            <Field
              className={css.inputFormImg}
              type="file"
              name="pictureURL"
              accept="image/*"
              onChange={e =>{
                formik.setFieldValue(
                  'pictureURL',
                  e.currentTarget.files[0],
                  e.currentTarget.files[0].name
                );
                setIsFileUpload(true);
              }
            }
            />
            { formik.touched.pictureURL && <BoxWarning>{formik.errors.pictureURL}</BoxWarning>}
          </label>
        </Box>
        <BoxComent>
          <TitleComent>
            <label>Comments</label>
          </TitleComent>

          <Field as="textarea"
            name="comments"
            type="text"
            placeholder="Type comments"
            className={css.textForm}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.comments}
          />
          { formik.touched.comments && formik.errors.comments ? <BoxWarning>{formik.errors.comments}</BoxWarning> : null} 
          
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
