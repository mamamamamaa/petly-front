import { ErrorMessage, Field, Formik, Form, useFormik } from 'formik';
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
  place: yup
    .string()
    .min(4, 'Too Short!')
    .max(60, 'Too Long!')
    .required('The place is required'),
  price: yup.number().required('The price is required'),
  comments: yup
    .string()
    .min(8, 'Too Short!')
    .max(120, 'Too Long!')
    .required('The comments are required'),
  photoUrl: yup.string().required('Image is required (jpg, jpeg, png)'),
});

export const AddNoticeStepOne = ({
  next,
  data,
  cancel,
  selectedOption,
  handleOptionChange,
}) => {
  // const [selectedDate, setSelectedDate] = useState('');
  // const [dateToSubmit, setDateToSubmit] = useState();
  // const [name, setName] = useState('');
  // const [title, setTitle] = useState('');

  const handleSubmit = values => {
    alert(JSON.stringify(values, null, 2));
    console.log(values);
    console.log(formik);

      // next({ ...values, dateOfBirth: dateToSubmit });
      next({ ...values, dateOfBirth: '2015-01-01' });
  };

  // const handleDate = event => {
  //   setSelectedDate(event.target.value);
  //   setDateToSubmit(event.target.valueAsNumber);
  //   console.log(selectedDate);
  //   // console.log(e.target.form);
  //   // console.log(e.target.valueAsNumber);
  // };
  // const handleName = event => {
  //   setName(event.target.value);
  //   console.log(name);
  // };
  // const handleTitle = event => {
  //   setName(event.target.value);
  //   console.log(title);
  // };
const formik = useFormik({
  // initialValues: {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  // },
   
  initialValues: data,
  onSubmit: values => {
    // alert(JSON.stringify(values, null, 2));
    handleSubmit(values);
    // setSubmitting(false);
  },
});
return (
  // <Formik
  //   initialValues={data}
  //   // validationSchema={schema}
  //   onSubmit={handleSubmit}
  //   validate={values => {
  //     // const errors = {};
  //     // if (!values.name) {
  //     //   errors.name = 'Required';
  //     // }
  //     // if (!values.email) {
  //     //   errors.email = 'Required';
  //     // }
  //     // return errors;
  //     console.log(values);
  //   }}
  // >
  //   {({
  //     values,
  //     errors,
  //     touched,
  //     handleChange,
  //     handleBlur,
  //     handleSubmit,
  //     isSubmitting,
  //     /* and other goodies */
  //   }) => (
  <form onSubmit={formik.handleSubmit}>
    <AddNoticeStepOneTitle>Add pet</AddNoticeStepOneTitle>
    <AddNoticeStepOneText>
      Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
      consectetur
    </AddNoticeStepOneText>
    <AddNoticeStepOneTopBtnsWrapper>
      <AddNoticeLostFound
        type="radio"
        id="lostFound"
        value="lostFound"
        name="lostFound"
        checked={selectedOption === 'lostFound'}
        onChange={handleOptionChange}
      ></AddNoticeLostFound>
      <label htmlFor="lostFound">lostFound</label>
      <AddNoticeInGoodHands
        name="inGoodHands"
        type="radio"
        id="inGoodHands"
        value="inGoodHands"
        checked={selectedOption === 'inGoodHands'}
        onChange={handleOptionChange}
      ></AddNoticeInGoodHands>
      <label htmlFor="inGoodHands">inGoodHands</label>
      <AddNoticeSell
        name="sell"
        type="radio"
        id="sell"
        value="sell"
        checked={selectedOption === 'sell'}
        onChange={handleOptionChange}
      ></AddNoticeSell>
      <label htmlFor="sell">sell</label>
    </AddNoticeStepOneTopBtnsWrapper>

    <AddNoticeStepOneLabel htmlFor="title">Tittle of ad</AddNoticeStepOneLabel>
    <AddNoticeStepOneInput
      name="title"
      id="title"
      onChange={formik.handleChange}
      value={formik.values.title}
      // component={AddNoticeStepOneInput}
      placeholder="Type name pet"
    />

    <AddNoticeStepOneLabel htmlFor="name">Name pet</AddNoticeStepOneLabel>
    <AddNoticeStepOneInput
      name="name"
      id="name"
      onChange={formik.handleChange}
      value={formik.values.name}
      // component={AddNoticeStepOneInput}
      placeholder="Type name pet"
    />

    <AddNoticeStepOneLabel htmlFor="dateOfBirth">
      Date of birth
    </AddNoticeStepOneLabel>
    <AddNoticeStepOneInput
      type="date"
      name="dateOfBirth"
      id="dateOfBirth"
      onChange={formik.handleChange}
      value={formik.values.dateOfBirth}
      // required
      // onChange={handleDate}
      // max={moment(moment.now()).format('YYYY-MM-DD')}
      // value={selectedDate}
      // component={AddNoticeStepOneInput}
    />
    <AddNoticeStepOneLabel htmlFor="breed">Breed</AddNoticeStepOneLabel>
    <AddNoticeStepOneSelect
      // component={AddNoticeStepOneSelect}
      name="breed"
      id="breed"
      onChange={formik.handleChange}
      value={formik.values.breed}
    >
      {filterByLengthBreeds.map(breed => (
        <option value={breed} key={breed}>
          {breed}
        </option>
      ))}
    </AddNoticeStepOneSelect>
    <AddNoticeStepOneButtonNextCancelWrapper>
      <AddNoticeStepOneButtonNext type="submit" >
        Next
      </AddNoticeStepOneButtonNext>
      <AddNoticeStepOneButtonCancel type="button" onClick={() => cancel()}>
        Cancel
      </AddNoticeStepOneButtonCancel>
    </AddNoticeStepOneButtonNextCancelWrapper>
  </form>
);}
  //   </Formik>
  // );
// };
