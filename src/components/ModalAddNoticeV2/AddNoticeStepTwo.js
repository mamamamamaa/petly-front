import { useFormik } from 'formik';
import { useState, useEffect, useRef } from 'react';
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
} from './AddNoticeStepTwo.styled';
import { BoxWarning } from './ModalAddNotice.styled';
import { AddNoticeStepTwoSchema } from './AddNoticeSchema';
import { AddNoticeStepTwoDragDropContext } from './AddNoticeStepTwoDragDropContext';
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
    validationSchema: AddNoticeStepTwoSchema,
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

  const [preview, setPreview] = useState([]); // LOAD PREVIEW IMAGE

  const handleImageLoad = async event => {
    const files = event.currentTarget.files; // get all selected files
    const fileArray = [];

    for (let i = 0; i < files.length; i++) {
      if (i === 5) {
        break;
      }
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
    formik.validateField('photoUrl');
  };
  const restorePreview = () => {
    // retrieve the image URLs from localStorage
    const storedPreview = localStorage.getItem('preview');
    if (storedPreview) {
      setPreview(JSON.parse(storedPreview));
    }
  };
  useEffect(() => {
    // restore the preview images when the component mounts
    restorePreview();
  }, []);
  const formikRef = useRef(formik);

  useEffect(() => {
    // validate photos when you click back and than return
    formikRef.current.validateField('photoUrl'); //This ensures that the formikRef object is only re-assigned when the formik object changes, not on every render. If directly set formik to dependency array get endless rerender, if not set formikRef as dependency will cause eslint warning
  }, [formik.values.photoUrl, formikRef]);
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
      <AddNoticeStepTwoInputPriceWrapper selectedOption={selectedOption}>
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
        <BoxWarning>{formik.errors.photoUrl}</BoxWarning>
      </AddNoticeStepTwoLoadImageInputWarningWrapper>
      <AddNoticeStepTwoDragDropContext {...{ formik, preview, setPreview }} />
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
