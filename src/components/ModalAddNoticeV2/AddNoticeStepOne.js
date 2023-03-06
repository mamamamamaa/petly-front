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
import { addNoticeStepOneSchema } from './addNoticeSchema';

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
          onChange={event => {
            formik.setFieldError('name', '');
            handleOptionChange(event);
          }}
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
