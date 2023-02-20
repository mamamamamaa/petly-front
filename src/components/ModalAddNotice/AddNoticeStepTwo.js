import { useState } from 'react';
import { Formik } from 'formik';
import { VscClose } from 'react-icons/vsc';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';

import {
  Container,
  ButtonClose,
  Title,
  Label,
  WraperTextarea,
  Input,
  FormWrapper,
  ButtonWrapper,
  InputWrapper,
  ButtonFill,
  ButtonEmpty,
  InputPhoto,
  FormSecond,
  Textarea,
  CrossBig,
  ButtonAddPhoto,
  AvatarImg,
  RadioWrapp,
  LabelRadioSexBtn,
  RadioSexBtn,
  IconMale,
  IconFemale,
  SpanStar,
  AddImg,
} from './ModalAddNotice.styled';
import { useDispatch } from 'react-redux';
import { addNotice } from 'redux/notices/operations';

const formTwoValidationSchema = Yup.object({
  sex: Yup.string().required('Sex is required'),
  comments: Yup.string()
    .min(8, 'Comments Too Short!')
    .max(120, 'Comments Too Long!')
    .label('Comment')
    .required('Comment is required'),
  place: Yup.string().required('Location is required'),
  photoUrl: Yup.mixed().label('Pet image').required('Pet image is required'),
  price: Yup.string().matches(/^\d+$/, 'Price must be in numbers'),
});

export const AddNoticeStepTwo = props => {
  const [img, setImg] = useState(null);
  const dispatch = useDispatch();

  const handleBackClick = values => {
    props.setData(prev => {
      return {
        ...prev,
        sex: values.sex,
        place: values.place,
        photoUrl: values.photoUrl,
        price: values.price,
        comments: values.comments,
      };
    });
    props.setPage(prev => prev - 1);
  };

  const resultOfCategory = props.data.type === 'sell';

  return (
    <Container>
      <ButtonClose type="button" onClick={props.closeModal}>
        <VscClose size={65} />
      </ButtonClose>
      <Title>Add pet</Title>
      <FormWrapper>
        <Formik
          validationSchema={formTwoValidationSchema}
          initialValues={props.data}
          onSubmit={values => {
            const { type, title, name, dateOfBirth, breed } = props.data;
            const { sex, place, price, photoUrl, comments } = values;

            const formData = new FormData();
            formData.append('type', type);
            formData.append('title', title);
            formData.append('name', name);
            formData.append('dateOfBirth', dateOfBirth);
            formData.append('breed', breed);
            formData.append('sex', sex);
            formData.append('place', place);
            formData.append('price', price);
            formData.append('photoUrl', photoUrl);
            formData.append('comments', comments);
            dispatch(addNotice(formData));

            // props.closeModal();
          }}
        >
          {({
            setFieldValue,
            handleChange,
            handleSubmit,
            values,
            ...props
          }) => (
            <FormSecond onSubmit={handleSubmit} encType="multipart/form-data">
              <Label htmlFor="sex">
                The sex<SpanStar>*</SpanStar>:
              </Label>
              <RadioWrapp role="group" aria-labelledby="sex-group">
                <RadioSexBtn id="male" type="radio" name="sex" value="male" />
                <LabelRadioSexBtn htmlFor="male">
                  <IconMale />
                  Male
                </LabelRadioSexBtn>
                <RadioSexBtn
                  id="female"
                  type="radio"
                  name="sex"
                  value="female"
                  required
                />
                <LabelRadioSexBtn htmlFor="female">
                  <IconFemale />
                  Female
                </LabelRadioSexBtn>
              </RadioWrapp>
              {props.isSubmitting && props.errors.sex
                ? toast('Sex is required')
                : null}
              <Label htmlFor="place">
                Location<SpanStar>*</SpanStar>:
              </Label>
              <InputWrapper>
                <Input
                  id="place"
                  name="place"
                  onChange={handleChange}
                  value={values.place}
                  placeholder="Type location"
                />
              </InputWrapper>
              {props.isSubmitting && props.errors.place
                ? toast('Location is required')
                : null}

              {resultOfCategory && (
                <Label htmlFor="price">
                  Price<SpanStar>*</SpanStar>:
                </Label>
              )}
              {resultOfCategory && (
                <InputWrapper>
                  <Input
                    id="price"
                    name="price"
                    onChange={handleChange}
                    value={values.price}
                    placeholder="Type price"
                  />
                </InputWrapper>
              )}

              {props.isSubmitting && props.errors.price
                ? toast('Price must be in numbers')
                : null}
              <Label>Load the pet’s image</Label>
              <ButtonAddPhoto type="button">
                {!img ? (
                  <CrossBig>
                    <AddImg />
                  </CrossBig>
                ) : (
                  <AvatarImg src={img} alt="Pet Image" />
                )}
                <InputPhoto
                  type="file"
                  name="photoUrl"
                  accept="image/png, image/jpeg"
                  onChange={e => {
                    const fileUploaded = e.target.files[0];
                    setFieldValue('photoUrl', e.target.files[0]);
                    setImg(URL.createObjectURL(fileUploaded));
                  }}
                />
                {props.isSubmitting && props.errors.photoUrl
                  ? toast.failure('Pet image is required')
                  : null}
              </ButtonAddPhoto>
              <WraperTextarea>
                <Label>Comments</Label>
                <Textarea
                  onChange={handleChange}
                  value={values.comments}
                  name="comments"
                  as="textarea"
                  placeholder="Type comments"
                />
              </WraperTextarea>
              {props.isSubmitting && props.errors.comments
                ? toast.failure('Comment is required')
                : null}
              <ButtonWrapper>
                <ButtonFill type="submit" onSubmit={handleSubmit}>
                  Done
                </ButtonFill>
                <ButtonEmpty
                  type="button"
                  onClick={() => handleBackClick(values)}
                >
                  Back
                </ButtonEmpty>
              </ButtonWrapper>
            </FormSecond>
          )}
        </Formik>
      </FormWrapper>
      <Toaster />
    </Container>
  );
};
