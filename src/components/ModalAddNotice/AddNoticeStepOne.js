import { Formik, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { VscClose } from 'react-icons/vsc';
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
  BoxWarning,
} from './ModalAddNotice.styled';

const formOneValidationSchema = Yup.object({
  type: Yup.string().required('Type is required'),
  title: Yup.string()
    .min(2, 'Must be 2 or more letter')
    .max(50, 'Must be 16 or less letter')
    .trim()
    .required('Required'),
  name: Yup.string()
    .min(2, 'Name Too Short!')
    .max(16, 'Name Too Long!')
    .label('Name')
    .trim()
    // .required('Name is required')
    .matches(/^[а-яёіїєА-ЯЁІЇЄA-Za-z\s]+?$/iu, 'Only letters in "Name"'),
  dateOfBirth: Yup.date(),
  breed: Yup.string()
    .min(2, 'Breed Too Short!')
    .max(16, 'Breed Too Long!')

    .required('Breed is required'),
});

const filterByLengthBreeds = breeds.filter(
  breed => breed.split('').length < 16
);

export const AddNoticeStepOne = props => {
  const [type, setType] = useState('sell');

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

  const getTitle = type => {
    let title;

    switch (type) {
      case 'lost/found':
        title = 'Your pet will find his home';
        break;
      case 'good-hands':
        title = 'You give your pet to a good people';
        break;
      case 'sell':
        title = 'Lets find a new home for you pet';
        break;
      default:
        title = 'Your pet will find his home';
    }

    return title;
  };

  const handleOnClick = () => {
    props.closeModal();
  };

  const noticeType = type === 'sell';

  return (
    <Container>
      <ButtonClose type="button" onClick={props.closeModal}>
        <VscClose size={65} />
      </ButtonClose>
      <Title>Add pet</Title>
      <SubTitle>{getTitle(type)}</SubTitle>

      <FormWrapper>
        <Formik
          validationSchema={formOneValidationSchema}
          initialValues={props.data}
          onSubmit={handleSubmit}
        >
          {props => (
            <FormFirst>
              <RadioWrapp
                role="group"
                aria-labelledby="type-group"
                onChange={e => setType(e.target.value)}
              >
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
                <BoxWarning>
                  <ErrorMessage name="type" component="div" />
                </BoxWarning>
              </RadioWrapp>

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
                <BoxWarning>
                  <ErrorMessage name="title" component="div" />
                </BoxWarning>
              </InputWrapper>

              {noticeType && <Label htmlFor="namePet">Name pet:</Label>}

              {!noticeType && (
                <Label htmlFor="namePet">
                  Name pet<SpanStar>*</SpanStar>:
                </Label>
              )}

              {noticeType && (
                <InputWrapper>
                  <Input id="name" name="name" placeholder="Type name pet" />
                </InputWrapper>
              )}
              {!noticeType && (
                <InputWrapper>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Type name pet"
                    required
                  />
                  <BoxWarning>
                    <ErrorMessage name="name" component="div" />
                  </BoxWarning>
                </InputWrapper>
              )}

              <Label htmlFor="dateOfBirth">
                Date of birth<SpanStar>*</SpanStar>
              </Label>
              <InputWrapper>
                <Input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  placeholder="Type date of birth"
                  required
                />
                <BoxWarning>
                  <ErrorMessage name="dateOfBirth" component="div" />
                </BoxWarning>
              </InputWrapper>

              <Label htmlFor="breed">
                Breed<SpanStar>*</SpanStar>
              </Label>
              <InputWrapperLast>
                <InputLast as="select" name="breed" id="breed">
                  {filterByLengthBreeds.map(breed => (
                    <option value={breed} key={breed}>
                      {breed}
                    </option>
                  ))}
                </InputLast>
                <BoxWarning>
                  <ErrorMessage name="breed" component="div" />
                </BoxWarning>
              </InputWrapperLast>

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
    </Container>
  );
};
