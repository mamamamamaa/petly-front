import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
// import { object, string, mixed, number } from 'yup';
import {
  AddNoticeStepOneButtonBack,
  AddNoticeStepOneButtonDone,
  AddNoticeStepTwoButtonBackDoneWrapper,
  AddNoticeStepTwoInput,
  AddNoticeStepTwoLabelComments,
  AddNoticeStepTwoInputSex,
  AddNoticeStepTwoInputSexCheckboxWrapper,
  AddNoticeStepTwoMale,
  AddNoticeStepTwoFemale,
  AddNoticeStepTwoMaleSpan,
  AddNoticeStepTwoFemaleSpan,
  AddNoticeStepTwoFemaleWrapper,
  AddNoticeStepTwoMaleWrapper,
  AddNoticeStepTwoLabelSex,
  AddNoticeStepTwoLoadImageInput,
  AddNoticeStepTwoLoadImageInputWrapper,
  AddNoticeStepTwoTitle,
  AddNoticeStepTwoCommentArea,
  AddNoticeStepTwoLabelCommentArea,
  AddNoticeStepTwoLabelLocation,
  AddNoticeStepTwoLabelPrice,
  AddNoticeStepTwoLabelPictureURL,
  AddNoticeStepTwoInputComments,
  AddNoticeStepTwoInputPrice,
} from './AddNoticeStepTwo.styled';
import { BoxWarning } from './ModalAddNotice.styled';

const addNoticeStepTwoSchema = yup.object().shape({
  sex: yup.string().oneOf(['male', 'female']).required('Sex is required'),
  place: yup
    .string()
    .min(4, 'Too Short!')
    .max(60, 'Too Long!')
    .required('Location is required'),
  price: yup.number().required('The price is required'),
  photoUrl: yup.string(),
  //mixed()
  // .required('Image is required (jpg, jpeg, png)'),
  comments: yup
    .string()
    .min(8, 'Must be 8 or more letter')
    .max(120, 'Must be 120 or less letter')
    .trim()
    .required('The comments are required'),
});

export const AddNoticeStepTwo = ({
  data,
  next,
  prev,
  onClose,
  selectedOption,
  onFinal,
}) => {
  const handleBack = () => {
    const newValue = {
      ...data,
      ...formik.values,
    };
    prev(newValue);
  };

  const formik = useFormik({
    initialValues: {
      sex: data.sex,
      place: data.place,
      price: data.price,
      photoUrl: data.photoUrl,
      comments: data.comments,
    },
    validationSchema: addNoticeStepTwoSchema,
    onSubmit: (values, actions) => {
      const errors = actions.validateForm();
      console.log(errors);
      console.log(values);
      const newValue = {
        ...data,
        ...values,
      };

      next(newValue, onFinal);
      // actions.resetForm();
      // onClose();
    },
    selectedOption,
  });
  const [isChecked, setIsChecked] = useState(true); // true means MALE by default / false means FEMALE by default
  const [isDisabled, setIsDisabled] = useState(true); // disable checkbox by default
  const [preview, setPreview] = useState(null); // LOAD PREVIEW IMAGE
  const handleImageLoad = event => {
    const files = event.currentTarget.files[0]; //FILE NAME, size, type, lastmodified

    // Update the form values with the file
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result); //=== EVENT.TARGET.RESULT MAKES SET PREVIEW IMAGE TO DIV
    };
    reader.readAsDataURL(files); //return the data as a data URL (base64-encoded string)
    formik.setFieldValue('photoUrl', files);
  };
  const handleCommentsChange = event => {
    formik.setValues({
      ...formik.values,
      comments: event.target.value,
    });
  };

  const onSexChange = event => {
    setIsDisabled(false);

    if (isChecked === true) {
      formik.setValues({
        ...formik.values,
        sex: 'female',
      });
    } else {
      formik.setValues({
        ...formik.values,
        sex: 'male',
      });
    }
    setIsChecked(prev => !prev);
  };
  return (
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <AddNoticeStepTwoTitle>Add pet</AddNoticeStepTwoTitle>
      <AddNoticeStepTwoLabelSex htmlFor="sex">
        The sex:
      </AddNoticeStepTwoLabelSex>
      <AddNoticeStepTwoInputSexCheckboxWrapper>
        <AddNoticeStepTwoMaleWrapper>
          <AddNoticeStepTwoMale />
          <AddNoticeStepTwoMaleSpan checked={isChecked} isDisabled={isDisabled}>
            Male
          </AddNoticeStepTwoMaleSpan>
        </AddNoticeStepTwoMaleWrapper>

        <AddNoticeStepTwoFemaleWrapper>
          <AddNoticeStepTwoFemale />
          <AddNoticeStepTwoFemaleSpan checked={isChecked}>
            Female
          </AddNoticeStepTwoFemaleSpan>
        </AddNoticeStepTwoFemaleWrapper>

        <AddNoticeStepTwoInputSex
          name="sex"
          id="sex"
          type="checkbox"
          placeholder="Type sex"
          checked={isChecked}
          value={formik.values.sex}
          onChange={onSexChange}
          isDisabled={isDisabled}
        />
      </AddNoticeStepTwoInputSexCheckboxWrapper>
      <BoxWarning>{formik.errors.sex}</BoxWarning>
      <AddNoticeStepTwoLabelLocation htmlFor="location">
        Location:
      </AddNoticeStepTwoLabelLocation>
      <AddNoticeStepTwoInput
        name="location"
        id="location"
        placeholder="Type location"
        onChange={formik.handleChange}
        value={formik.values.location}
      />
      <AddNoticeStepTwoLabelPrice
        htmlFor="price"
        selectedOption={selectedOption}
      >
        Price:
      </AddNoticeStepTwoLabelPrice>
      <AddNoticeStepTwoInputPrice
        selectedOption={selectedOption}
        name="price"
        id="price"
        placeholder="Type price"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      <AddNoticeStepTwoLabelPictureURL htmlFor="photoUrl">
        Load the pet’s image
      </AddNoticeStepTwoLabelPictureURL>
      <AddNoticeStepTwoLoadImageInputWrapper
        selectedOption={selectedOption}
        preview={preview}
      >
        <AddNoticeStepTwoLoadImageInput
          type="file"
          id="photoUrl"
          name="photoUrl"
          accept="image/*"
          onChange={handleImageLoad}
          value=""
        />
      </AddNoticeStepTwoLoadImageInputWrapper>
      <div>{formik.errors.pictureURL}</div>

      <AddNoticeStepTwoLabelCommentArea htmlFor="commentsArea">
        Comments
      </AddNoticeStepTwoLabelCommentArea>
      <AddNoticeStepTwoCommentArea
        id="commentsArea"
        name="commentsArea"
        placeholder="Type comments"
        onChange={handleCommentsChange}
        value={formik.values.comments}
      />

      <AddNoticeStepTwoLabelComments htmlFor="comments">
        Comments
      </AddNoticeStepTwoLabelComments>
      <AddNoticeStepTwoInputComments
        type="text"
        id="comments"
        name="comments"
        placeholder="Type comments"
        onChange={handleCommentsChange}
        value={formik.values.comments}
      />
      <AddNoticeStepTwoButtonBackDoneWrapper>
        <AddNoticeStepOneButtonDone type="submit">
          Done
        </AddNoticeStepOneButtonDone>
        <AddNoticeStepOneButtonBack type="button" onClick={handleBack}>
          Back
        </AddNoticeStepOneButtonBack>
      </AddNoticeStepTwoButtonBackDoneWrapper>
    </form>
  );
};
