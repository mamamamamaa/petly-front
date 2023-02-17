import { useFormik } from 'formik';
// import { useState } from 'react';

import { object, string, mixed, number } from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

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
  return (
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <div>
        <label>
          Upload File
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
        </label>
      </div>
      <div>
        <label>
          Comments
          <input
            type="text"
            name="comments"
            placeholder="Type comments"
            onChange={formik.handleChange}
            value={formik.values.comments}
          />
          <div>{formik.errors.pictureURL}</div>
        </label>
      </div>

      <button type="button" onClick={handleBack}>
        Back
      </button>
      <button type="submit">Done</button>
    </form>
  );
};
