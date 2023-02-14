import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { breeds } from '../../utils/getBreed';
import moment from 'moment';

const filterByLengthBreeds = breeds.filter(
  breed => breed.split('').length < 16
);

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Must be 2 or more letter')
    .max(16, 'Must be 16 or less letter')
    .trim()
    .required('Required'),
  dateOfBirth: yup.date(),
  breed: yup.string().required('Required'),
});

export const AddOwnPetStepOne = ({ next, data, cancel }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [dateToSubmit, setDateToSubmit] = useState();

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
      <Form>
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
