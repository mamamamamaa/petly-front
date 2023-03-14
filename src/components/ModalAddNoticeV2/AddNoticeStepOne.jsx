import { useFormik } from 'formik';
import { breeds } from 'utils/getBreed';
import {
  AddNoticeStepOneLabel,
  AddNoticeStepOneInput,
  AddNoticeStepOneButtonNext,
  AddNoticeStepOneButtonCancel,
  AddNoticeStepOneSelect,
  AddNoticeStepOneButtonNextCancelWrapper,
  AddNoticeStepOneTopBtnsWrapper,
  AddNoticeLostFound,
  AddNoticeInGoodHands,
  AddNoticeSell,
  AddNoticeStepOneText,
  AddNoticeStepOneTitle,
  AddNoticeStepOneInputWrapper,
  AddNoticeStepOneSelectWrapper,
} from './AddNoticeStepOne.styled';
import { BoxWarning } from './ModalAddNotice.styled';
import { AddNoticeStepOneSchema } from './AddNoticeSchema';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { useIntl } from 'react-intl';

const filterByLengthBreeds = breeds.filter(
  breed => breed.split('').length < 16
);

export const AddNoticeStepOne = ({
  next,
  data,
  cancel,
  selectedOption,
  handleOptionChange,
}) => {
  const { formatMessage } = useIntl();
  const formik = useFormik({
    initialValues: data,
    validationSchema: AddNoticeStepOneSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false,
    onSubmit: values => {
      next({
        ...data,
        ...values,
        selectedOption,
      });
    },
  });
  const handleBlur = fieldName => {
    formik.setFieldTouched(fieldName, true);
    formik.validateForm();
  };
  formik.values.type = selectedOption;
  return (
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <AddNoticeStepOneTitle><FormattedMessage id="addPet"/></AddNoticeStepOneTitle>
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
          onChange={event => {
            formik.setFieldError('name', '');
            handleOptionChange(event);
          }}
        ></AddNoticeLostFound>
        <label htmlFor="lostFound"><FormattedMessage id="lostFound"/></label>
        <AddNoticeInGoodHands
          name="inGoodHands"
          type="radio"
          id="inGoodHands"
          value="inGoodHands"
          checked={selectedOption === 'inGoodHands'}
          onChange={handleOptionChange}
        ></AddNoticeInGoodHands>
        <label htmlFor="inGoodHands"><FormattedMessage id="goodHands"/></label>
        <AddNoticeSell
          name="sell"
          type="radio"
          id="sell"
          value="sell"
          checked={selectedOption === 'sell'}
          onChange={handleOptionChange}
        ></AddNoticeSell>
        <label htmlFor="sell"><FormattedMessage id="sell"/></label>
      </AddNoticeStepOneTopBtnsWrapper>

      <AddNoticeStepOneLabel htmlFor="title">
      <FormattedMessage id="titleAd"/>
      </AddNoticeStepOneLabel>
      <AddNoticeStepOneInputWrapper>
        <AddNoticeStepOneInput
          name="title"
          id="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          placeholder={formatMessage({ id: 'typeNamePet' })}
          onBlur={() => handleBlur('title')}
        />
        <BoxWarning>{formik.touched.title && formik.errors.title}</BoxWarning>
      </AddNoticeStepOneInputWrapper>
      <AddNoticeStepOneLabel htmlFor="name"><FormattedMessage id="namePet"/></AddNoticeStepOneLabel>
      <AddNoticeStepOneInputWrapper>
        <AddNoticeStepOneInput
          name="name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder={formatMessage({ id: 'typeNamePet' })}
          onBlur={() => handleBlur('name')}
        />
        <BoxWarning>{formik.touched.name && formik.errors.name}</BoxWarning>
      </AddNoticeStepOneInputWrapper>

      <AddNoticeStepOneLabel htmlFor="dateOfBirth">
        <FormattedMessage id="dateBirth"/>
      </AddNoticeStepOneLabel>
      <AddNoticeStepOneInput
        type="date"
        name="dateOfBirth"
        id="dateOfBirth"
        onChange={formik.handleChange}
        value={formik.values.dateOfBirth}
        max={moment(moment.now()).format('YYYY-MM-DD')}
      />
      <BoxWarning>
        {formik.touched.dateOfBirth && formik.errors.dateOfBirth}
      </BoxWarning>
      <AddNoticeStepOneLabel htmlFor="breed"><FormattedMessage id="breed"/></AddNoticeStepOneLabel>
      <AddNoticeStepOneSelectWrapper>
        <AddNoticeStepOneSelect
          name="breed"
          id="breed"
          onChange={formik.handleChange}
          value={formik.values.breed}
          onBlur={() => handleBlur('breed')}
        >
          {filterByLengthBreeds.map(breed => (
            <option value={breed} key={breed}>
              {breed}
            </option>
          ))}
        </AddNoticeStepOneSelect>
        <BoxWarning>{formik.touched.breed && formik.errors.breed}</BoxWarning>
      </AddNoticeStepOneSelectWrapper>

      <AddNoticeStepOneButtonNextCancelWrapper>
        <AddNoticeStepOneButtonNext type="submit">
          <FormattedMessage id="next"/>
        </AddNoticeStepOneButtonNext>
        <AddNoticeStepOneButtonCancel type="button" onClick={() => cancel()}>
          <FormattedMessage id="cancel"/>
        </AddNoticeStepOneButtonCancel>
      </AddNoticeStepOneButtonNextCancelWrapper>
    </form>
  );
};
