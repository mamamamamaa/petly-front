import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { breeds } from '../../utils/getBreed';
import moment from 'moment';

const filterByLengthBreeds = breeds.filter(
  breed => breed.split('').length < 16
);

const schema = yup.object().shape({
  type: yup.string().required(),
  title: yup
    .string()
    .min(2, 'Title should be from 2 to 48 symbols')
    .max(48, 'Title should be from 2 to 48 symbols')
    .matches(
      /^[a-zA-zа-яіїєА-ЯІЇЄ,.! ]+$/,
      'title should be from 2 to 48 symbols'
    )
    .required('The title is required'),
  name: yup
    .string()
    .min(2, 'Must be 2 or more letter')
    .max(16, 'Must be 16 or less letter')
    .trim()
    .required('The name is required'),
  dateOfBirth: yup.date(),
  breed: yup.string().required('The breed is required'),
  sex: yup.string().required('The sex is required'),
  place: yup.string().min(4, 'Too Short!').max(60, 'Too Long!').required(),
  price: yup.number().required('The price is required'),
  comments: yup
    .string()
    .min(8, 'Too Short!')
    .max(120, 'Too Long!')
    .required('The comments are required'),
  photoUrl: yup.required('Image is required (jpg, jpeg, png)'),
});

export const AddOwnPetStepOne = ({ next, data, cancel }) => {
  //   const [selectedType, setSelectedType] = useState('');

  const [selectedDate, setSelectedDate] = useState('');
  const [dateToSubmit, setDateToSubmit] = useState();

  //   const typeChange = event => {
  //     const { value } = event.target;
  //     setSelectedType(value);
  //   };

  const handleSubmit = (values, actions) => {
    console.log('values', values);
    next({ ...values, dateOfBirth: dateToSubmit });
    console.log('data in 1 step', data);
  };

  const handleDate = e => {
    setSelectedDate(e.target.value);
    setDateToSubmit(e.target.valueAsNumber);
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <div></div>
      <Form>
        <div>
          <Field type="radio" name="type" required />
          <ErrorMessage name="title" component="div" />
        </div>

        <label>
          Tittle of ad
          <Field type="text" name="title" required />
          <ErrorMessage name="title" component="div" />
        </label>
        <label>
          Name pet
          <Field type="text" name="name" required />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Date of birth
          <Field
            type="date"
            name="dateOfBirth"
            required
            onChange={handleDate}
            max={moment(moment.now()).format('YYYY-MM-DD')}
            value={selectedDate}
          />
          <ErrorMessage name="dateOfBirth" component="div" />
        </label>
        <label>
          Breed
          <Field as="select" name="breed" required>
            {filterByLengthBreeds.map(breed => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </Field>
          <ErrorMessage name="breed" component="div" />
        </label>
        <button type="button" onClick={() => cancel()}>
          Cancel
        </button>
        <button type="submit">Next</button>
      </Form>
    </Formik>
  );
};
