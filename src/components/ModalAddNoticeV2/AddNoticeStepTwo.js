import { useFormik } from 'formik';
import { useState } from 'react';

import { object, string, mixed, number } from 'yup';
// import { ErrorMessage, Field, Form, Formik } from 'formik';
import {
  AddNoticeStepTwoForm,
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
const addNoticeSchema = object().shape({
  sex: string().required('Sex is required'),
  place: string()
    .min(4, 'Too Short!')
    .max(60, 'Too Long!')
    .required('Location is required'),
  price: number().required('The price is required'),
  photoUrl: mixed().required('Image is required'),
  comments: string()
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
      pictureURL: data.pictureURL,
      comments: data.comments,
    },
    validationSchema: addNoticeSchema,
    onSubmit: (values, actions) => {
      actions.validateForm();
      const newValue = {
        ...data,
        ...values,
      };

      next(newValue, true);
      actions.resetForm();
      onClose();
    },
    selectedOption,
  });
  const [isChecked, setIsChecked] = useState(false);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const handleImageLoad = e => {
    const url = e.currentTarget?.files[0];
    formik.setFieldValue('pictureURL', url, url?.name);
    setFile(url);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(url);
  }
    return (
      <AddNoticeStepTwoForm
        onSubmit={formik.handleSubmit}
        encType="multipart/form-data"
      >
        <AddNoticeStepTwoTitle>Add pet</AddNoticeStepTwoTitle>
        <AddNoticeStepTwoLabelSex htmlFor="title">
          The sex:
        </AddNoticeStepTwoLabelSex>
        <AddNoticeStepTwoInputSexCheckboxWrapper>
          <AddNoticeStepTwoMaleWrapper>
            <AddNoticeStepTwoMale checked={isChecked} />
            <AddNoticeStepTwoMaleSpan checked={isChecked}>
              Male
            </AddNoticeStepTwoMaleSpan>
          </AddNoticeStepTwoMaleWrapper>

          <AddNoticeStepTwoFemaleWrapper>
            <AddNoticeStepTwoFemale checked={isChecked} />
            <AddNoticeStepTwoFemaleSpan checked={isChecked}>
              Female
            </AddNoticeStepTwoFemaleSpan>
          </AddNoticeStepTwoFemaleWrapper>

          <AddNoticeStepTwoInputSex
            name="title"
            id="title"
            type="checkbox"
            placeholder="Type sex"
            checked={isChecked}
            onChange={() => setIsChecked(prev => !prev)}
          />
        </AddNoticeStepTwoInputSexCheckboxWrapper>
        <AddNoticeStepTwoLabelLocation htmlFor="location">
          Location:
        </AddNoticeStepTwoLabelLocation>
        <AddNoticeStepTwoInput
          name="location"
          id="location"
          placeholder="Type location"
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
        />
        <AddNoticeStepTwoLabelPictureURL htmlFor="pictureURL">
          Load the pet’s image
        </AddNoticeStepTwoLabelPictureURL>
        <AddNoticeStepTwoLoadImageInputWrapper selectedOption={selectedOption}
          preview={preview }>
          <AddNoticeStepTwoLoadImageInput
            type="file"
            id="pictureURL"
            name="pictureURL"
            accept="image/*"
            onChange={handleImageLoad}
          />
        </AddNoticeStepTwoLoadImageInputWrapper>
        {/* {preview && (
          <img src={preview} alt="preview" width="100" height="100" />
        )} */}
        <div>{formik.errors.pictureURL}</div>

        <AddNoticeStepTwoLabelCommentArea htmlFor="commentsArea">
          Comments
        </AddNoticeStepTwoLabelCommentArea>
        <AddNoticeStepTwoCommentArea
          id="commentsArea"
          name="commentsArea"
          placeholder="Type comments"
          onChange={formik.handleChange}
        />

        <AddNoticeStepTwoLabelComments htmlFor="comments">
          Comments
        </AddNoticeStepTwoLabelComments>
        <AddNoticeStepTwoInputComments
          type="text"
          id="comments"
          name="comments"
          placeholder="Type comments"
          onChange={formik.handleChange}
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
      </AddNoticeStepTwoForm>
    );
  };
 