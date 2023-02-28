import { useFormik } from 'formik';
import * as yup from 'yup';
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
const filterByLengthBreeds = breeds.filter(
  breed => breed.split('').length < 16
);

const addNoticeStepOneSchema = yup.object().shape({
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
  breed: yup.string().required('The breed is required'),
});

export const AddNoticeStepOne = ({
  next,
  data,
  cancel,
  selectedOption,
  handleOptionChange,
}) => {
  const formik = useFormik({
    initialValues: data,
    validationSchema: addNoticeStepOneSchema,
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
        <label htmlFor="lostFound">lost/found</label>
        <AddNoticeInGoodHands
          name="inGoodHands"
          type="radio"
          id="inGoodHands"
          value="inGoodHands"
          checked={selectedOption === 'inGoodHands'}
          onChange={handleOptionChange}
        ></AddNoticeInGoodHands>
        <label htmlFor="inGoodHands">in good hands</label>
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

      <AddNoticeStepOneLabel htmlFor="title">
        Tittle of ad
      </AddNoticeStepOneLabel>
      <AddNoticeStepOneInputWrapper>
        <AddNoticeStepOneInput
          name="title"
          id="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          placeholder="Type name pet"
          onBlur={() => handleBlur('title')}
        />
        <BoxWarning>{formik.touched.title && formik.errors.title}</BoxWarning>
      </AddNoticeStepOneInputWrapper>

      <AddNoticeStepOneLabel htmlFor="name">Name pet</AddNoticeStepOneLabel>
      <AddNoticeStepOneInputWrapper>
        <AddNoticeStepOneInput
          name="name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Type name pet"
          onBlur={() => handleBlur('name')}
        />
        <BoxWarning>{formik.touched.name && formik.errors.name}</BoxWarning>
      </AddNoticeStepOneInputWrapper>

      <AddNoticeStepOneLabel htmlFor="dateOfBirth">
        Date of birth
      </AddNoticeStepOneLabel>
      <AddNoticeStepOneInput
        type="date"
        name="dateOfBirth"
        id="dateOfBirth"
        onChange={formik.handleChange}
        value={formik.values.dateOfBirth}
      />
      <AddNoticeStepOneLabel htmlFor="breed">Breed</AddNoticeStepOneLabel>
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
          Next
        </AddNoticeStepOneButtonNext>
        <AddNoticeStepOneButtonCancel type="button" onClick={() => cancel()}>
          Cancel
        </AddNoticeStepOneButtonCancel>
      </AddNoticeStepOneButtonNextCancelWrapper>
    </form>
  );
};
