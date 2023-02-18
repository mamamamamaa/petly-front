import { ErrorMessage, Field, Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { breeds } from '../../utils/getBreed';
import {
  AddNoticeStepOneLabel,
  AddNoticeStepOneInput,
  AddNoticeStepOneButtonNext,
  AddNoticeStepOneButtonCancel,
  AddNoticeStepOneSelect,
  AddNoticeStepOneButtonNextCancelWrapper,
  AddNoticeStepOneForm,
  AddNoticeStepOneTopBtnsWrapper,
  AddNoticeStepOneButtonSpan,
  AddNoticeLostFound,
  AddNoticeInGoodHands,
  AddNoticeSell,
  AddNoticeStepOneText,
  AddNoticeStepOneTitle,
} from './AddNoticeStepOne.styled';
import moment from 'moment';

const filterByLengthBreeds = breeds.filter(
  breed => breed.split('').length < 16
);

const schema = yup.object().shape({
  type: yup.string().required(),
  // type: yup.string(),
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
  dateOfBirth: yup.date().required('The date is required'),
  breed: yup.string().required('The breed is required'),
  // breed: yup.string(),
  sex: yup.string().required('The sex is required'),
  // sex: yup.string(),
  place: yup.string().min(4, 'Too Short!').max(60, 'Too Long!').required(),
  // place: yup.string(),
  price: yup.number().required('The price is required'),
  // price: yup.number(),
  comments: yup.string().min(8, 'Too Short!').max(120, 'Too Long!'),
  // comments: yup.string(),
  // .required('The comments are required'),
  photoUrl: yup.mixed().required('Image is required (jpg, jpeg, png)'),
  // photoUrl: yup.string(),
});

export const AddNoticeStepOne = ({ next, data, cancel }) => {
  //   const [selectedType, setSelectedType] = useState('');

  const [selectedDate, setSelectedDate] = useState(data.dateOfBirth);
  const [selectedDateInNumber, setSelectedDateINNumber] = useState(
    data.dateOfBirth
  );

  //   const typeChange = event => {
  //     const { value } = event.target;
  //     setSelectedType(value);
  //   };

  const handleSubmit = (values, actions) => {
    actions.setFieldValue('dateOfBirth', selectedDate);

    next({
      ...values,
      dateOfBirth: selectedDate,
      selectedDateInNumber,
    });
  };

  const handleDate = e => {
    setSelectedDate(e.target.value);
    setSelectedDateINNumber(e.target.valueAsNumber);
  };
  const [checked, setChecked] = useState(true);
  return (
    <Formik
      initialValues={data}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <AddNoticeStepOneForm>
        <AddNoticeStepOneTitle>Add pet</AddNoticeStepOneTitle>
        <AddNoticeStepOneText>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
          consectetur
        </AddNoticeStepOneText>
        <AddNoticeStepOneTopBtnsWrapper>
          <Field name="lostFound" component={AddNoticeLostFound}>
            <AddNoticeStepOneButtonSpan>lost/found</AddNoticeStepOneButtonSpan>
          </Field>
          <Field name="inGoodHands" component={AddNoticeInGoodHands}>
            <AddNoticeStepOneButtonSpan>
              in good hands
            </AddNoticeStepOneButtonSpan>
          </Field>
          <Field name="sell" component={AddNoticeSell} defaultChecked={checked}>
            <AddNoticeStepOneButtonSpan>sell</AddNoticeStepOneButtonSpan>
          </Field>
        </AddNoticeStepOneTopBtnsWrapper>

        <AddNoticeStepOneLabel htmlFor="title">
          Tittle of ad
        </AddNoticeStepOneLabel>
        <Field
          name="title"
          id="title"
          component={AddNoticeStepOneInput}
          placeholder="Type name pet"
          required
        />

        <AddNoticeStepOneLabel htmlFor="name">Name pet</AddNoticeStepOneLabel>
        <Field
          name="name"
          id="name"
          component={AddNoticeStepOneInput}
          placeholder="Type name pet"
          required
        />

        <AddNoticeStepOneLabel htmlFor="dateOfBirth">
          Date of birth
        </AddNoticeStepOneLabel>
        <Field
          type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          required
          onChange={handleDate}
          max={moment(moment.now()).format('YYYY-MM-DD')}
          value={selectedDate}
          component={AddNoticeStepOneInput}
        />
        <AddNoticeStepOneLabel htmlFor="breed">Breed</AddNoticeStepOneLabel>
        <Field
          as="select"
          component={AddNoticeStepOneSelect}
          name="breed"
          id="breed"
          required
        >
          {filterByLengthBreeds.map(breed => (
            <option value={breed} key={breed}>
              {breed}
            </option>
          ))}
        </Field>
        <AddNoticeStepOneButtonNextCancelWrapper>
          <AddNoticeStepOneButtonNext type="submit">
            Next
          </AddNoticeStepOneButtonNext>
          <AddNoticeStepOneButtonCancel type="button" onClick={() => cancel()}>
            Cancel
          </AddNoticeStepOneButtonCancel>
        </AddNoticeStepOneButtonNextCancelWrapper>
      </AddNoticeStepOneForm>
    </Formik>
  );
};
