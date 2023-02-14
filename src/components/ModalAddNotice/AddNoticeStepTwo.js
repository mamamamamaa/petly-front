import { useFormik } from 'formik';
import { object, string, mixed } from 'yup';

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
          {' '}
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
          {' '}
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
