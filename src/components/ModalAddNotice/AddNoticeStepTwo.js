import { useFormik } from 'formik';
import { useState } from 'react';

import { object, string, mixed, number } from 'yup';
// import { ErrorMessage, Field, Form, Formik } from 'formik';
import {
  AddNoticeStepTwoForm,
  AddNoticeStepOneButtonBack,
  AddNoticeStepOneButtonDone,
  AddNoticeStepTwoButtonBackDoneWrapper,
  AddNoticeStepTwoInput,
  AddNoticeStepTwoLabel,
  AddNoticeStepTwoInputSex,
  AddNoticeStepTwoInputSexCheckboxWrapper,
} from './AddNoticeStepTwo.styled';
const addNoticeSchema = object().shape({
  sex: string().required('Sex is required'),
  place: string()
    .min(4, 'Too Short!')
    .max(60, 'Too Long!')
    .required('Location is required'),
  price: number().required('The price is required'),
  photoUrl: mixed().required('Image is required'),
  comments: string()
    .min(8, 'Must be 8 or more letter')
    .max(120, 'Must be 120 or less letter')
    .trim()
    .required('The comments are required'),
});

export const AddNoticeStepTwo = ({ data, next, prev, onClose }) => {
  // const [selectedSex, setSelectedSex] = useState('');
  // const sexChange = event => {
  //   const { value } = event.target;
  //   setSelectedSex(value);
  // };

  const handleBack = () => {
    const newValue = {
      ...data,
      ...formik.values,
    };
    prev(newValue);
  };

  const formik = useFormik({
    initialValues: {
      sex: data.sex,
      place: data.place,
      price: data.price,
      pictureURL: data.pictureURL,
      comments: data.comments,
    },
    validationSchema: addNoticeSchema,
    onSubmit: (values, actions) => {
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
  const [isChecked, setIsChecked] = useState(false);
  return (
    <AddNoticeStepTwoForm
      onSubmit={formik.handleSubmit}
      encType="multipart/form-data"
    >
      <AddNoticeStepTwoLabel htmlFor="title">The sex:</AddNoticeStepTwoLabel>
      <AddNoticeStepTwoInputSexCheckboxWrapper checked={isChecked}>
        <AddNoticeStepTwoInputSex
          name="title"
          id="title"
          type="checkbox"
          placeholder="Type sex"
          checked={isChecked}
          onChange={() => setIsChecked(prev => !prev)}
        />
      </AddNoticeStepTwoInputSexCheckboxWrapper>
      <p>{isChecked ? 'Male' : 'Female'}</p>
      <AddNoticeStepTwoLabel htmlFor="name">Location:</AddNoticeStepTwoLabel>
      <AddNoticeStepTwoInput
        name="name"
        id="name"
        placeholder="Type location"
      />
      <AddNoticeStepTwoLabel htmlFor="name">Price:</AddNoticeStepTwoLabel>
      <AddNoticeStepTwoInput name="name" id="name" placeholder="Type price" />
      <AddNoticeStepTwoLabel>Upload File</AddNoticeStepTwoLabel>
      <input
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
      <div>{formik.errors.pictureURL}</div>
      <AddNoticeStepTwoLabel>Comments</AddNoticeStepTwoLabel>
      <AddNoticeStepTwoInput
        type="text"
        name="comments"
        placeholder="Type comments"
        onChange={formik.handleChange}
        value={formik.values.comments}
      />
      <AddNoticeStepTwoButtonBackDoneWrapper>
        <AddNoticeStepOneButtonDone type="submit">
          Done
        </AddNoticeStepOneButtonDone>
        <AddNoticeStepOneButtonBack type="button" onClick={handleBack}>
          Back
        </AddNoticeStepOneButtonBack>
      </AddNoticeStepTwoButtonBackDoneWrapper>
    </AddNoticeStepTwoForm>
  );
};
