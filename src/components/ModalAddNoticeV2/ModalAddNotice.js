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
  sex: '',
  place: '',
  price: '',
  photoUrl: '',
  comments: '',
};
const testState = {
  type: 'sell',
  title: 'kantor',
  name: 'kantor',
  dateOfBirth: '2020-01-01',
  breed: 'barbet',
  sex: 'male',
  place: 'Kharkiv',
  price: '500',
  photoUrl:
    'https://res.cloudinary.com/dmwntn6pl/image/upload/v1676226383/errsg3cyfmmclldf7amh.jpg',
  comments: 'nice creature',
};
export const ModalAddNotice = ({ onClose, isOpen }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(initialState);
  const [final, setFinal] = useState(false);
  const onFinal = () => {
    setFinal(true);
  };
  const handleNextStep = (newData = {}) => {
    const normalizedDateOfBirth = moment(new Date(newData.dateOfBirth)).format(
      'DD.MM.YYYY'
    );
    if (final) {
      setData({
        ...newData,
        dateOfBirth: normalizedDateOfBirth,
      });

      const formData = new FormData();
      console.log(formData);
      formData.append('photoUrl', newData.photoUrl, newData.photoUrl.name);
      formData.append('comments', newData.comments);
      formData.append('breed', newData.breed);
      formData.append('dateOfBirth', newData.dateOfBirth);
      formData.append('name', newData.name);
      formData.append('type', newData.type);
      formData.append('title', newData.title);
      formData.append('sex', newData.sex);
      formData.append('place', newData.place);
      formData.append('price', newData.price);
      console.log(formData);

      dispatch(addNotice(newData));
      // dispatch(addNotice(testState));
      return;
    }
    setData({
      ...newData,
      dateOfBirth: normalizedDateOfBirth,
    });
    setCurrentStep(prevStep => prevStep + 1);
  };

  const handlePrevStep = (newData = {}) => {
    setData(prevData => ({ ...prevData, ...newData }));
    setCurrentStep(prevStep => prevStep - 1);
  };

  const cancelData = e => {
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
      // dispatch(addNotice(testState));
      // dispatch(addNotice(testState));
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
      next={handleNextStep}
      data={data}
      cancel={cancelData}
      selectedOption={selectedOption}
      handleOptionChange={handleOptionChange}
    />,
    <AddNoticeStepTwo
      onFinal={onFinal}
      next={handleNextStep}
      data={data}
      prev={handlePrevStep}
      onClose={onClose}
      selectedOption={selectedOption}
    />,
  ];
  return (
    <ModalAddNoticeWrapper {...{ maxHeight }}>
      {steps[currentStep]}
    </ModalAddNoticeWrapper>
  );
};
