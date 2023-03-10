import { useState } from 'react';
import React, { useEffect } from 'react';
import { AddNoticeStepOne } from './AddNoticeStepOne';
import { AddNoticeStepTwo } from './AddNoticeStepTwo';
import { useDispatch } from 'react-redux';
import { addNotice } from 'redux/notices/operations';
import { ModalAddNoticeWrapper } from './ModalAddNotice.styled';
import moment from 'moment';
const initialState = {
  type: '',
  title: '',
  name: '',
  dateOfBirth: '',
  breed: '',
  gender: '',
  location: '',
  price: '',
  photoUrl: [],
  comments: '',
};
export const ModalAddNotice = ({ onClose, isOpen }) => {
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(true); // disable checkbox by default
  const [data, setData] = useState(initialState);
  const [final, setFinal] = useState(false);
  const onFinal = () => setFinal(final);

  const next = (newData = {}, final) => {
    if (final) {
      let normalizedDateOfBirth;
      if (newData.dateOfBirth !== '') {
        normalizedDateOfBirth = moment(new Date(newData.dateOfBirth)).format(
          'DD.MM.YYYY'
        );
      } else {
        normalizedDateOfBirth = newData.dateOfBirth;
      }
      const formData = new FormData();
      if (Array.isArray(newData.photoUrl)) {
        newData.photoUrl.forEach(file => {
          const photoUrlFile = new File([file], file.name, {
            type: 'image/jpeg',
          });
          formData.append('photoUrl', photoUrlFile);
        });
      }
      formData.append('comments', newData.comments);
      formData.append('breed', newData.breed);
      formData.append('dateOfBirth', normalizedDateOfBirth);
      formData.append('name', newData.name);
      formData.append('title', newData.title);
      formData.append('sex', newData.gender);
      formData.append('place', newData.location);
      if (selectedOption === 'sell') {
        formData.append('price', newData.price);
      }
      switch (newData.type) {
        case 'inGoodHands':
          formData.append('type', 'good-hands');
          break;
        case 'lostFound':
          formData.append('type', 'lost/found');
          break;
        default:
          formData.append('type', 'sell');
          break;
      }
      // for (const [key, value] of formData.entries()) {
      //   console.log(`${key}: ${value}`);
      // }

      dispatch(addNotice(formData));
      return;
    }
    setData({
      ...newData,
    });
    setCurrentStep(prevStep => prevStep + 1);
  };

  const prev = (newData = {}) => {
    setData(prevData => ({ ...prevData, ...newData }));
    setCurrentStep(prevStep => prevStep - 1);
  };

  const cancel = () => {
    setData(initialState);
    setCurrentStep(0);
    onClose();
  };
  const [maxHeight, setMaxHeight] = useState(0);
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when the modal is open
      document.body.style.overflow = 'hidden';
      const screenHeight = window.innerHeight;
      const maxModalHeight = screenHeight * 0.8;
      setMaxHeight(maxModalHeight);
    } else {
      // Allow scrolling when the modal is closed
      document.body.style.overflow = 'auto';
    }

    // Remove the event listener when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, dispatch]);
  const [selectedOption, setSelectedOption] = useState('sell');

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    <AddNoticeStepOne
      {...{
        next,
        data,
        cancel,
        selectedOption,
        handleOptionChange,
      }}
      // selectedOption FOR BUTTONS SWAPING OPTION 'SELL', 'inGoodHands', 'lostFound'
      //handleOptionChange TAKE DATA 'SELL', 'inGoodHands', 'lostFound' FROM INPUTS
    />,
    <AddNoticeStepTwo
      {...{
        final,
        onFinal,
        next,
        data,
        prev,
        onClose,
        selectedOption,
        isDisabled,
        setIsDisabled,
      }} //selectedOption TO SHOW SELL FILED OR NO
    />,
  ];
  return (
    <ModalAddNoticeWrapper {...{ maxHeight }}>
      {steps[currentStep]}
    </ModalAddNoticeWrapper>
  );
};
