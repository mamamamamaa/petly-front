// import { ErrorMessage, Field, Formik } from 'formik';
// import * as yup from 'yup';
// import { useState } from 'react';
// import { breeds } from '../../utils/getBreed';
// import {
//   AddNoticeStepOneLabel,
//   AddNoticeStepOneInput,
//   AddNoticeStepOneButtonNext,
//   AddNoticeStepOneButtonCancel,
//   AddNoticeStepOneSelect,
//   AddNoticeStepOneButtonNextCancelWrapper,
//   AddNoticeStepOneForm,
//   AddNoticeStepOneTopBtnsWrapper,
//   AddNoticeStepOneButtonSpan,
//   AddNoticeLostFound,
//   AddNoticeInGoodHands,
//   AddNoticeSell,
// } from './AddNoticeStepOne.styled';
// import moment from 'moment';

// const filterByLengthBreeds = breeds.filter(
//   breed => breed.split('').length < 16
// );

// const schema = yup.object().shape({
//   // type: yup.string().required(),
//   type: yup.string(),
//   title: yup.string(),
//   // .min(2, 'Title should be from 2 to 48 symbols')
//   // .max(48, 'Title should be from 2 to 48 symbols')
//   // .matches(
//   //   /^[a-zA-zа-яіїєА-ЯІЇЄ,.! ]+$/,
//   //   'title should be from 2 to 48 symbols'
//   // )
//   // .required('The title is required'),
//   name: yup.string(),
//   // .min(2, 'Must be 2 or more letter')
//   // .max(16, 'Must be 16 or less letter')
//   // .trim()
//   // .required('The name is required'),
//   dateOfBirth: yup.date(),
//   // breed: yup.string().required('The breed is required'),
//   breed: yup.string(),
//   // sex: yup.string().required('The sex is required'),
//   sex: yup.string(),
//   // place: yup.string().min(4, 'Too Short!').max(60, 'Too Long!').required(),
//   place: yup.string(),
//   // price: yup.number().required('The price is required'),
//   price: yup.number(),
//   // comments: yup.string().min(8, 'Too Short!').max(120, 'Too Long!'),
//   comments: yup.string(),
//   // .required('The comments are required'),
//   // photoUrl: yup.required('Image is required (jpg, jpeg, png)'),
//   photoUrl: yup.string(),
// });

// export const AddNoticeStepOne = ({ next, data, cancel }) => {
//   //   const [selectedType, setSelectedType] = useState('');

//   const [selectedDate, setSelectedDate] = useState('');
//   const [dateToSubmit, setDateToSubmit] = useState();

//   //   const typeChange = event => {
//   //     const { value } = event.target;
//   //     setSelectedType(value);
//   //   };

//   const handleSubmit = values => {
//     next({ ...values, dateOfBirth: dateToSubmit });
//   };

//   const handleDate = e => {
//     setSelectedDate(e.target.value);
//     setDateToSubmit(e.target.valueAsNumber);
//   };
//   const [checked, setChecked] = useState(true);
//   return (
//     <Formik
//       initialValues={data}
//       validationSchema={schema}
//       onSubmit={handleSubmit}
//     >
//       <AddNoticeStepOneForm>
//         <AddNoticeStepOneTopBtnsWrapper>
//           <Field name="lostFound" component={AddNoticeLostFound}>
//             <AddNoticeStepOneButtonSpan>lost/found</AddNoticeStepOneButtonSpan>
//           </Field>
//           <Field name="inGoodHands" component={AddNoticeInGoodHands}>
//             <AddNoticeStepOneButtonSpan>
//               in good hands
//             </AddNoticeStepOneButtonSpan>
//           </Field>
//           <Field
//             name="sell"
//             component={AddNoticeSell}
//             defaultChecked={checked}
//           >
//             <AddNoticeStepOneButtonSpan>sell</AddNoticeStepOneButtonSpan>
//           </Field>
//         </AddNoticeStepOneTopBtnsWrapper>

//         <AddNoticeStepOneLabel htmlFor="title">
//           Tittle of ad
//         </AddNoticeStepOneLabel>
//         <Field
//           name="title"
//           id="title"
//           component={AddNoticeStepOneInput}
//           placeholder="Type name pet"
//         />

//         <AddNoticeStepOneLabel htmlFor="name">Name pet</AddNoticeStepOneLabel>
//         <Field
//           name="name"
//           id="name"
//           component={AddNoticeStepOneInput}
//           placeholder="Type name pet"
//         />

//         <AddNoticeStepOneLabel htmlFor="dateOfBirth">
//           Date of birth
//         </AddNoticeStepOneLabel>
//         <Field
//           type="date"
//           name="dateOfBirth"
//           id="dateOfBirth"
//           // required
//           onChange={handleDate}
//           max={moment(moment.now()).format('YYYY-MM-DD')}
//           value={selectedDate}
//           component={AddNoticeStepOneInput}
//         />
//         <AddNoticeStepOneLabel htmlFor="breed">Breed</AddNoticeStepOneLabel>
//         <Field component={AddNoticeStepOneSelect} name="breed" id="breed">
//           {filterByLengthBreeds.map(breed => (
//             <option value={breed} key={breed}>
//               {breed}
//             </option>
//           ))}
//         </Field>
//         <AddNoticeStepOneButtonNextCancelWrapper>
//           <AddNoticeStepOneButtonNext type="submit">
//             Next
//           </AddNoticeStepOneButtonNext>
//           <AddNoticeStepOneButtonCancel type="button" onClick={() => cancel()}>
//             Cancel
//           </AddNoticeStepOneButtonCancel>
//         </AddNoticeStepOneButtonNextCancelWrapper>
//       </AddNoticeStepOneForm>
//     </Formik>
//   );
// };
// ==================
import { Formik } from 'formik';
import { VscClose } from 'react-icons/vsc';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';

import {
  Container,
  ButtonClose,
  Title,
  SubTitle,
  Label,
  InputWrapper,
  Input,
  FormWrapper,
  InputWrapperLast,
  ButtonWrapper,
  ButtonFill,
  ButtonEmpty,
  InputLast,
  FormFirst,
  RadioWrapp,
  LabelRadioBtn,
  RadioBtn,
  SpanStar,
} from './ModalAddNotice.styled';

const formOneValidationSchema = Yup.object({
  category: Yup.string().required('Category is required'),
  title: Yup.string()
    .min(2, 'Title Too Short!')
    .max(16, 'Title Too Long!')
    .label('Name')
    .required('Name is required')
    .matches(/^[а-яёіїєА-ЯЁІЇЄA-Za-z\s]+?$/iu, 'Only letters in "Title"'),
  name: Yup.string()
    .min(2, 'Name Too Short!')
    .max(16, 'Name Too Long!')
    .label('Name')
    .required('Name is required')
    .matches(/^[а-яёіїєА-ЯЁІЇЄA-Za-z\s]+?$/iu, 'Only letters in "Name"'),
  dateOfBirth: Yup.string()
    .matches(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      'Correct format: dd.mm.yyyy'
    )
    .test(
      'is-date-valid',
      () => `Future date not allowed`,
      value => {
        if (value) {
          let date = value.split('.');
          const corectFormat = new Date(`${date[2]}/${date[1]}/${date[0]}`);
          return corectFormat.getTime() < Date.now();
        }
        return true;
      }
    )
    .label('Date of birth')
    .required('Date of birth is required'),
  breed: Yup.string()
    .min(2, 'Breed Too Short!')
    .max(16, 'Breed Too Long!')
    .label('Date of birth')
    .required('Breed is required'),
});

export const AddNoticeStepOne = props => {
  const handleSubmit = values => {
    props.setData(prev => {
      return {
        ...prev,
        type: values.type,
        title: values.title,
        name: values.name,
        dateOfBirth: values.dateOfBirth,
        breed: values.breed,
      };
    });
    props.setPage(prev => prev + 1);
  };

  const handleOnClick = () => {
    props.closeModal();
  };

  return (
    <Container>
      <ButtonClose type="button" onClick={props.closeModal}>
        <VscClose size={65} />
      </ButtonClose>
      <Title>Add pet</Title>
      <SubTitle>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </SubTitle>
      <FormWrapper>
        <Formik
          validationSchema={formOneValidationSchema}
          initialValues={props.data}
          onSubmit={handleSubmit}
        >
          {props => (
            <FormFirst>
              <RadioWrapp role="group" aria-labelledby="type-group">
                <RadioBtn
                  id="lost/found"
                  type="radio"
                  name="type"
                  value="lost/found"
                />
                <LabelRadioBtn htmlFor="lost/found">lost/found</LabelRadioBtn>
                <RadioBtn
                  id="good-hands"
                  type="radio"
                  name="type"
                  value="good-hands"
                />
                <LabelRadioBtn htmlFor="good-hands">
                  in good hands
                </LabelRadioBtn>
                <RadioBtn id="sell" type="radio" name="type" value="sell" />
                <LabelRadioBtn htmlFor="sell">sell</LabelRadioBtn>
              </RadioWrapp>
              {props.isSubmitting && props.errors.type ? toast('Error') : null}
              <Label htmlFor="titleAd">
                Title of ad<SpanStar>*</SpanStar>
              </Label>
              <InputWrapper>
                <Input id="title" name="title" placeholder="Type title ad" />
              </InputWrapper>
              {props.isSubmitting && props.errors.title ? toast('Error') : null}
              <Label htmlFor="namePet">
                Name pet<SpanStar>*</SpanStar>
              </Label>
              <InputWrapper>
                <Input id="name" name="name" placeholder="Type name pet" />
              </InputWrapper>
              {props.isSubmitting && props.errors.name ? toast('Error') : null}
              <Label htmlFor="dateOfBirth">
                Date of birth<SpanStar>*</SpanStar>
              </Label>
              <InputWrapper>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  placeholder="Type date of birth"
                />
              </InputWrapper>
              {props.isSubmitting && props.errors.dateOfBirth
                ? toast('Error')
                : null}
              <Label htmlFor="breed">
                Breed<SpanStar>*</SpanStar>
              </Label>
              <InputWrapperLast>
                <InputLast id="breed" name="breed" placeholder="Type breed" />
              </InputWrapperLast>
              {props.isSubmitting && props.errors.breed ? toast('Error') : null}
              <ButtonWrapper>
                <ButtonFill type="submit">Next</ButtonFill>
                <ButtonEmpty type="button" onClick={handleOnClick}>
                  Сancel
                </ButtonEmpty>
              </ButtonWrapper>
            </FormFirst>
          )}
        </Formik>
      </FormWrapper>
      <Toaster />
    </Container>
  );
};
