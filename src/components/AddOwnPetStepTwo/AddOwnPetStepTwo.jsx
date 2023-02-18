import { useFormik } from 'formik';
import { object, string, mixed } from 'yup';
import { GrAdd } from 'react-icons/gr';

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
    <Container>
      <Title>Add photo and some comments</Title>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <Box>
          <label>
            <BoxImg>
              <GrAdd className={css.iconForm} />
            </BoxImg>
            <input
              className={css.inputFormImg}
              type="file"
              name="pictureURL"
              accept="image/*"
              onChange={e =>
                formik.setFieldValue(
                  'pictureURL',
                  e.currentTarget.files[0],
                  e.currentTarget.files[0].name
                )
              }
            />
            <BoxWarning>{formik.errors.pictureURL}</BoxWarning>
          </label>
        </Box>
        <BoxComent>
          <TitleComent>
            <label>Comments</label>
          </TitleComent>

          <textarea
            name="comments"
            type="text"
            placeholder="Type comments"
            className={css.textForm}
            onChange={formik.handleChange}
            value={formik.values.comments}
          ></textarea>
          <BoxWarning>{formik.errors.pictureURL}</BoxWarning>
        </BoxComent>
        <BoxButton>
          <ButtonBack type="button" onClick={handleBack}>
            Back
          </ButtonBack>
          <ButtonDone type="submit">Done</ButtonDone>
        </BoxButton>
      </form>
    </Container>
  );
};
