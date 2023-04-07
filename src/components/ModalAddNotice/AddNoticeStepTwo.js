import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { VscClose } from 'react-icons/vsc';
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
  BoxWarning,
} from './ModalAddNotice.styled';
import { useDispatch } from 'react-redux';
import { addNotice } from 'redux/notices/operations';
import moment from 'moment/moment';
import { FormattedMessage } from 'react-intl';
import { useIntl } from 'react-intl';

const formTwoValidationSchema = Yup.object({
  sex: Yup.string().required('Sex is required'),
  comments: Yup.string()
    .min(8, 'Comments Too Short!')
    .max(120, 'Comments Too Long!')
    .label('Comment')
    .required('Comment is required'),
  place: Yup.string()
    .min(4, 'Location should be from 4 to 40 symbols')
    .max(40, 'Location should be from 4 to 40 symbols')
    .matches(
      /^[a-zA-zа-яіїєА-ЯІЇЄ']+(-| )?[a-zA-zа-яіїєА-ЯІЇЄ']+(-| )?[a-zA-zа-яіїєА-ЯІЇЄ']+$/
    )
    .required('Location is required'),
  photoUrl: Yup.mixed().label('Pet image').required('Pet image is required'),
  price: Yup.number(),
});

export const AddNoticeStepTwo = props => {
  const { formatMessage } = useIntl();
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

  const noticeType = props.data.type === 'sell';

  return (
    <Container>
      <ButtonClose type="button" onClick={props.closeModal}>
        <VscClose size={65} />
      </ButtonClose>
      <Title><FormattedMessage id="addPet"/></Title>
      <FormWrapper>
        <Formik
          validationSchema={formTwoValidationSchema}
          initialValues={props.data}
          onSubmit={values => {
            const { type, title, name, dateOfBirth, breed } = props.data;
            const { sex, place, price, photoUrl, comments } = values;

            const date = moment(new Date(dateOfBirth)).format('DD.MM.YYYY');

            const formData = new FormData();
            formData.append('type', type);
            formData.append('title', title);
            formData.append('name', name);
            formData.append('dateOfBirth', date);
            formData.append('breed', breed);
            formData.append('sex', sex);
            formData.append('place', place);
            formData.append('price', price);
            formData.append('photoUrl', photoUrl);
            formData.append('comments', comments);
            const newData = {
              type,
              title,

              dateOfBirth,
              breed,
              sex,
              place,
              photoUrl,
              comments,
            };
            if (type === 'sell') {
              dispatch(addNotice(formData));
            } else {
              dispatch(addNotice(newData));
            }

            props.closeModal();
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
                <FormattedMessage id="sex"/><SpanStar>*</SpanStar>:
              </Label>
              <RadioWrapp role="group" aria-labelledby="sex-group">
                <RadioSexBtn id="male" type="radio" name="sex" value="male" />
                <LabelRadioSexBtn htmlFor="male">
                  <IconMale />
                  <FormattedMessage id="male"/>
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
                  <FormattedMessage id="female"/>
                </LabelRadioSexBtn>
                <BoxWarning>
                  <ErrorMessage name="sex" component="div" />
                </BoxWarning>
              </RadioWrapp>

              <Label htmlFor="place">
                <FormattedMessage id="location"/><SpanStar>*</SpanStar>:
              </Label>
              <InputWrapper>
                <Input
                  id="place"
                  name="place"
                  onChange={handleChange}
                  value={values.place}
                  placeholder={formatMessage({ id: 'typeLocation' })}
                  required
                />
                <BoxWarning>
                  <ErrorMessage name="place" component="div" />
                </BoxWarning>
              </InputWrapper>

              {noticeType && (
                <Label htmlFor="price">
                  <FormattedMessage id="price"/><SpanStar>*</SpanStar>:
                </Label>
              )}
              {noticeType && (
                <InputWrapper>
                  <Input
                    id="price"
                    name="price"
                    onChange={handleChange}
                    value={values.price}
                    placeholder={formatMessage({ id: 'typePrice' })}
                  />
                  <BoxWarning>
                    <ErrorMessage name="price" component="div" />
                  </BoxWarning>
                </InputWrapper>
              )}

              <Label><FormattedMessage id="loadPetImage"/></Label>
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
                  required
                />
                <BoxWarning>
                  <ErrorMessage name="photoUrl" component="div" />
                </BoxWarning>
              </ButtonAddPhoto>
              <WraperTextarea>
                <Label><FormattedMessage id="сomment"/></Label>
                <Textarea
                  onChange={handleChange}
                  value={values.comments}
                  name="comments"
                  as="textarea"
                  placeholder={formatMessage({ id: 'typeComments' })}
                  required
                />
                <BoxWarning>
                  <ErrorMessage name="comments" component="div" />
                </BoxWarning>
              </WraperTextarea>

              <ButtonWrapper>
                <ButtonFill type="submit" onSubmit={handleSubmit}>
                  <FormattedMessage id="done"/>
                </ButtonFill>
                <ButtonEmpty
                  type="button"
                  onClick={() => handleBackClick(values)}
                >
                  <FormattedMessage id="back"/>
                </ButtonEmpty>
              </ButtonWrapper>
            </FormSecond>
          )}
        </Formik>
      </FormWrapper>
    </Container>
  );
};
