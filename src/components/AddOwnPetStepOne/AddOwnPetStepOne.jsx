import { Field, Form, Formik } from 'formik';

import { useState } from 'react';
export const AddOwnPetStepOne = ({ next, data, cancel }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [dateToSubmit, setDateToSubmit] = useState();
  const breeds = [
    'I don`t know',
    'Persian',
    'American Shorthair',
    'Chartreux',
    'Bombay',
    'Burmese',
    'Maine Coon',
    'Birman',
    'Himalayan',
    'Nebelung',
    'Norwegian Forest',
    'Siberian',
    'Scottish Fold',
    'Bengal',
    'Ragdoll',
    'Siamese',
    'British Shorthair',
    'Exotic Shorthair',
    'Abyssinian',
    'Tonkinese',
    'Other',
  ];
  const handleSubmit = (values, actions) => {
    next({ ...values, dateOfBirth: dateToSubmit });
  };

  const handleDate = e => {
    console.log(e.target.value);
    console.log('e.target.valueAsNumber', e.target.valueAsNumber);
    setSelectedDate(e.target.value);
    setDateToSubmit(e.target.valueAsNumber);
  };

  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      <Form>
        <label>
          Name pet
          <Field type="text" name="name" required />
        </label>
        <label>
          Date of birth
          <Field
            type="date"
            name="dateOfBirth"
            required
            onChange={handleDate}
            value={selectedDate}
          />
        </label>
        <label>
          Breed
          <Field as="select" name="breed" required>
            {breeds.map(breed => (
              <option value={breed.toLocaleLowerCase()} key={breed}>
                {breed}
              </option>
            ))}
          </Field>
        </label>
        <button type="button" onClick={() => cancel()}>
          Cancel
        </button>
        <button type="submit">Next</button>
      </Form>
    </Formik>
  );
};
