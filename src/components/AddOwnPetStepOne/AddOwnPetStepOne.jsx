import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { breeds } from '../../utils/getBreed';
import moment from 'moment';

import {
  Container,
  Wraper,
  BoxWarning,
  FormEl,
  Input,
  InputSelect,
  BoxLabel,
  Button,
  ButtonNext,
  BoxButton,
} from './AddOwnPetStepOne.styled';

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
    console.log('values on submit in 1 step', values);
    next({ ...values, dateOfBirth: dateToSubmit });
    console.log('data in 1 step', data);
  }; 

  const handleDate = e => {
    setSelectedDate(e.target.value);
    setDateToSubmit(e.target.valueAsNumber);
  };

  return (
    <Container>
      <Formik
        initialValues={data}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormEl>
          <BoxLabel>
            <Wraper>
              <label>Name pet</label>
            </Wraper>
            <Input type="text" name="name" required />
            <BoxWarning>
              <ErrorMessage name="name" component="div" />
            </BoxWarning>
          </BoxLabel>
          <BoxLabel>
            <Wraper>
              <label>Date of birth</label>
            </Wraper>
            <Input
              type="date"
              name="dateOfBirth"
              required
              onChange={handleDate}
              max={moment(moment.now()).format('YYYY-MM-DD')}
              value={selectedDate}
            />
            <BoxWarning>
              <ErrorMessage name="dateOfBirth" component="div" />
            </BoxWarning>
          </BoxLabel>
          <BoxLabel>
            <Wraper>
              <label>Breed</label>
            </Wraper>
            <InputSelect as="select" name="breed" required>
              {filterByLengthBreeds.map(breed => (
                <option value={breed} key={breed}>
                  {breed}
                </option>
              ))}
            </InputSelect>
            <BoxWarning>
              <ErrorMessage name="breed" component="div" />
            </BoxWarning>
          </BoxLabel>

          <BoxButton>
            <Button type="button" onClick={() => cancel()}>
              Cancel
            </Button>
            <ButtonNext type="submit">Next</ButtonNext>
          </BoxButton>
        </FormEl>
      </Formik>
    </Container>
  );
};
