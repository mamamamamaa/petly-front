import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import * as yup from 'yup';
import {
  AddNoticeStepOneButtonBack,
  AddNoticeStepOneButtonDone,
  AddNoticeStepTwoButtonBackDoneWrapper,
  AddNoticeStepTwoInputLocation,
  AddNoticeStepTwoLabelComments,
  AddNoticeStepTwoInputGenderRadio,
  AddNoticeStepTwoGenderWrapper,
  AddNoticeStepTwoMale,
  AddNoticeStepTwoFemale,
  AddNoticeStepTwoMaleSpan,
  AddNoticeStepTwoFemaleSpan,
  AddNoticeStepTwoFemaleWrapper,
  AddNoticeStepTwoMaleWrapper,
  AddNoticeStepTwoGenderText,
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
  AddNoticeStepTwoInputLocationWrapper,
  AddNoticeStepTwoInputPriceWrapper,
  AddNoticeStepTwoLoadImageInputWarningWrapper,
  AddNoticeStepTwoCommentAreaWrapper,
  AddNoticeStepTwoCommentWrapper,
  AddNoticeStepTwoImg,
  AddNoticeStepTwoButtonDelImg,
  AddNoticeStepTwoSlide,
} from './AddNoticeStepTwo.styled';
import { BoxWarning } from './ModalAddNotice.styled';
import React from 'react';

const addNoticeStepTwoSchema = yup.object().shape({
  gender: yup.string().oneOf(['male', 'female']).required('Gender is required'),
  location: yup
    .string()
    .min(4, 'Too Short!')
    .max(60, 'Too Long!')
    .required('Location is required'),
  price: yup.number().required('The price is required'),
  photoUrl: yup
    .array()
    .test(
      'max',
      'You can upload up to 2 files.',
      value => !value || value.filter(file => file !== null).length <= 2
    )
    .test(
      'fileFormat',
      'Image must be either a JPG, JPEG or PNG file.',
      value => {
        if (!value || value.length === 0) return true; // allow empty values
        return value.every(file => {
          if (!file) return true; // allow null values
          return ['image/jpeg', 'image/png', 'image/jpg'].includes(file.type);
        });
      }
    )
    .test('fileSize', 'File size is too large', value => {
      if (!value || value.length === 0) return true; // allow empty values
      return value.every(file => {
        if (!file) return true; // allow null values
        return file.size <= 7 * 1024 * 1024; // 7MB
      });
    }),
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
  isDisabled,
  setIsDisabled,
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
      gender: data.gender,
      location: data.location,
      price: data.price,
      photoUrl: data.photoUrl,
      comments: data.comments,
    },
    validationSchema: addNoticeStepTwoSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false,
    onSubmit: (values, actions) => {
      // const errors = actions.validateForm();
      // console.log(errors);
      const newValue = {
        ...data,
        ...values,
      };

      next(newValue, onFinal);
      localStorage.setItem('preview', '');
      onClose();
    },
    selectedOption,
  });
  console.log(formik);
  const [preview, setPreview] = useState([]); // LOAD PREVIEW IMAGE

  const handleImageLoad = async event => {
    const files = event.currentTarget.files; // get all selected files
    const fileArray = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      fileArray.push(
        new Promise(resolve => {
          reader.onload = () => resolve(reader.result);
        })
      );
      reader.readAsDataURL(files[i]);
      formik.setFieldValue(`photoUrl[${i}]`, files[i]);
    }

    const loadedFiles = await Promise.all(fileArray);
    setPreview(loadedFiles);
    localStorage.setItem('preview', JSON.stringify(loadedFiles));
  };
  const restorePreview = () => {
    // retrieve the image URLs from localStorage
    const storedPreview = localStorage.getItem('preview');
    if (storedPreview) {
      setPreview(JSON.parse(storedPreview));
    }
  };
  const deleteImage = index => {
    // create a copy of the preview array
    formik.setFieldValue('photoUrl', '');
    const updatedPreview = [...preview];
    // remove the image at the specified index
    updatedPreview.splice(index, 1);
    // update the preview state and localStorage
    setPreview(updatedPreview);
    localStorage.setItem('preview', JSON.stringify(updatedPreview));
  };
  useEffect(() => {
    // restore the preview images when the component mounts
    restorePreview();
  }, []);
  const handleCommentsChange = event => {
    formik.setValues({
      ...formik.values,
      comments: event.target.value,
    });
  };
  const handleMale = () => {
    setIsDisabled(false);
    formik.setFieldValue('gender', 'male');
  };
  const handleFemale = () => {
    setIsDisabled(false);
    formik.setFieldValue('gender', 'female');
  };
  const handleBlur = fieldName => {
    formik.setFieldTouched(fieldName, true);
    formik.validateForm();
  };
  return (
    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
      <AddNoticeStepTwoTitle>Add pet</AddNoticeStepTwoTitle>
      <AddNoticeStepTwoGenderText>The sex:</AddNoticeStepTwoGenderText>
      <AddNoticeStepTwoGenderWrapper
        role="group"
        aria-labelledby="gender-group"
      >
        <AddNoticeStepTwoMaleWrapper htmlFor="male">
          <AddNoticeStepTwoMale />
          <AddNoticeStepTwoInputGenderRadio
            id="male"
            type="radio"
            name="gender"
            value="male"
            checked={formik.values.gender === 'male'}
            onChange={handleMale}
          />
          <AddNoticeStepTwoMaleSpan
            gender={formik.values.gender}
            isDisabled={isDisabled}
          >
            Male
          </AddNoticeStepTwoMaleSpan>
        </AddNoticeStepTwoMaleWrapper>
        <AddNoticeStepTwoFemaleWrapper htmlFor="female">
          <AddNoticeStepTwoFemale />
          <AddNoticeStepTwoInputGenderRadio
            id="female"
            type="radio"
            name="gender"
            value="female"
            checked={formik.values.gender === 'female'}
            onChange={handleFemale}
          />
          <AddNoticeStepTwoFemaleSpan
            gender={formik.values.gender}
            isDisabled={isDisabled}
          >
            Female
          </AddNoticeStepTwoFemaleSpan>
        </AddNoticeStepTwoFemaleWrapper>
        <BoxWarning>{formik.errors.gender}</BoxWarning>
      </AddNoticeStepTwoGenderWrapper>

      <AddNoticeStepTwoLabelLocation htmlFor="location">
        Location:
      </AddNoticeStepTwoLabelLocation>

      <AddNoticeStepTwoInputLocationWrapper>
        <AddNoticeStepTwoInputLocation
          name="location"
          id="location"
          placeholder="Type location"
          onChange={formik.handleChange}
          value={formik.values.location}
          onBlur={() => handleBlur('location')}
        />
        <BoxWarning>
          {formik.touched.location && formik.errors.location}
        </BoxWarning>
      </AddNoticeStepTwoInputLocationWrapper>

      <AddNoticeStepTwoLabelPrice
        htmlFor="price"
        selectedOption={selectedOption}
      >
        Price:
      </AddNoticeStepTwoLabelPrice>

      <AddNoticeStepTwoInputPriceWrapper>
        <AddNoticeStepTwoInputPrice
          selectedOption={selectedOption}
          name="price"
          id="price"
          placeholder="Type price"
          onChange={formik.handleChange}
          value={formik.values.price}
          onBlur={() => handleBlur('price')}
        />
        <BoxWarning>{formik.touched.price && formik.errors.price}</BoxWarning>
      </AddNoticeStepTwoInputPriceWrapper>

      <AddNoticeStepTwoLabelPictureURL htmlFor="photoUrl">
        Load the pet’s image
      </AddNoticeStepTwoLabelPictureURL>
      <AddNoticeStepTwoLoadImageInputWarningWrapper>
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
            multiple
            onBlur={() => handleBlur('photoUrl')}
          />
        </AddNoticeStepTwoLoadImageInputWrapper>
        <BoxWarning>
          {formik.touched.photoUrl && formik.errors.photoUrl}
        </BoxWarning>
      </AddNoticeStepTwoLoadImageInputWarningWrapper>

      <div className="swiper-container">
        <div className="swiper-wrapper">
          {preview.map((url, index) => (
            <AddNoticeStepTwoSlide className="swiper-slide" key={index}>
              <AddNoticeStepTwoImg src={url} alt={`Slide ${index}`} />
              <AddNoticeStepTwoButtonDelImg onClick={() => deleteImage(index)}/>
            </AddNoticeStepTwoSlide>
          ))}
        </div>
      </div>

      <AddNoticeStepTwoLabelCommentArea htmlFor="commentsArea">
        Comments
      </AddNoticeStepTwoLabelCommentArea>
      <AddNoticeStepTwoCommentAreaWrapper>
        <AddNoticeStepTwoCommentArea
          id="commentsArea"
          name="commentsArea"
          placeholder="Type comments"
          onChange={handleCommentsChange}
          value={formik.values.comments}
          onBlur={() => handleBlur('comments')}
        />
        <BoxWarning>
          {formik.touched.comments && formik.errors.comments}
        </BoxWarning>
      </AddNoticeStepTwoCommentAreaWrapper>

      <AddNoticeStepTwoLabelComments htmlFor="comments">
        Comments
      </AddNoticeStepTwoLabelComments>
      <AddNoticeStepTwoCommentWrapper>
        <AddNoticeStepTwoInputComments
          type="text"
          id="comments"
          name="comments"
          placeholder="Type comments"
          onChange={handleCommentsChange}
          value={formik.values.comments}
          onBlur={() => handleBlur('comments')}
        />
        <BoxWarning>
          {formik.touched.comments && formik.errors.comments}
        </BoxWarning>
      </AddNoticeStepTwoCommentWrapper>

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
