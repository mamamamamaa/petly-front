import { Formik, Field } from 'formik';
import React from 'react';
import { VscClose } from 'react-icons/vsc';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
import { breeds } from '../../utils/getBreed';

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
  AddNoticeStepOneSelect,
} from './ModalAddNotice.styled';

const formOneValidationSchema = Yup.object({
  type: Yup.string().required('Type is required'),
  title: Yup.string()
    .min(2, 'Must be 2 or more letter')
    .max(16, 'Must be 16 or less letter')
    .trim()
    .required('Required'),
  name: Yup.string()
    .min(2, 'Name Too Short!')
    .max(16, 'Name Too Long!')
    .label('Name')
    .required('Name is required')
    .matches(/^[а-яёіїєА-ЯЁІЇЄA-Za-z\s]+?$/iu, 'Only letters in "Name"'),
  dateOfBirth: Yup.date().nullable().min(new Date(1900, 0, 1)),
  breed: Yup.string()
    .min(2, 'Breed Too Short!')
    .max(16, 'Breed Too Long!')
    .label('breed')
    .required('Breed is required'),
});

const filterByLengthBreeds = breeds.filter(
  breed => breed.split('').length < 16
);

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

      {/* {props.setData.type === 'sell' && (
        <SubTitle>Lets find a new home for you pet</SubTitle>
      )}
      {props.setData.type === 'good-hands' && (
        <SubTitle>You give your pet to a good people</SubTitle>
      )}
      {props.setData.type === 'lost/found' && (
        <SubTitle>Your pet will find his home</SubTitle>
      )} */}

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
              {props.isSubmitting && props.errors.type
                ? toast('Type is required')
                : null}
              <Label htmlFor="titleAd">
                Title of ad<SpanStar>*</SpanStar>
              </Label>
              <InputWrapper>
                <Input
                  id="title"
                  name="title"
                  placeholder="Type title ad"
                  required
                />
              </InputWrapper>
              {props.isSubmitting && props.errors.title
                ? toast('Title is required')
                : null}
              <Label htmlFor="namePet">
                Name pet<SpanStar>*</SpanStar>
              </Label>
              <InputWrapper>
                <Input
                  id="name"
                  name="name"
                  placeholder="Type name pet"
                  required
                />
              </InputWrapper>
              {props.isSubmitting && props.errors.name
                ? toast('Name is required')
                : null}
              <Label htmlFor="dateOfBirth">
                Date of birth<SpanStar>*</SpanStar>
              </Label>
              <InputWrapper>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  placeholder="Type date of birth"
                  required
                />
              </InputWrapper>
              {props.isSubmitting && props.errors.dateOfBirth
                ? toast('Date of birth is required. Correct format: dd.mm.yyyy')
                : null}
              <Label htmlFor="breed">
                Breed<SpanStar>*</SpanStar>
              </Label>
              {/* <Field component={AddNoticeStepOneSelect} name="breed" id="breed">
                {filterByLengthBreeds.map(breed => (
                  <option value={breed} key={breed}>
                    {breed}
                  </option>
                ))}
              </Field> */}

              <InputWrapperLast>
                <InputLast
                  id="breed"
                  name="breed"
                  placeholder="Type breed"
                  required
                />
              </InputWrapperLast>
              {props.isSubmitting && props.errors.breed
                ? toast('Breed is required')
                : null}
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
