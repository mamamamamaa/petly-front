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
  sex: 'male',
  place: '',
  price: '',
  photoUrl: '',
  comments: '',
  // commentsArea: null,
};
const testState = {
  type: 'sell',
  title: 'demon',
  name: 'demon',
  dateOfBirth: '2020-01-01',
  breed: 'barbet',
  sex: 'male',
  place: 'Kharkiv',
  price: '500',
  photoUrl: '',
    // 'https://res.cloudinary.com/dmwntn6pl/image/upload/v1676226383/errsg3cyfmmclldf7amh.jpg',
  comments: 'nice creature',
};
export const ModalAddNotice = ({ onClose, isOpen }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(initialState);
  const [final, setFinal] = useState(false);
  const onFinal = () => setFinal(final);
  
  const next = (newData = {}, final) => {
    const normalizedDateOfBirth = moment(new Date(newData.dateOfBirth)).format(
      'DD.MM.YYYY'
    );
    if (final) {
      setData({
        ...newData,
        dateOfBirth: normalizedDateOfBirth,
      });

      const formData = new FormData();
      console.log(newData.photoUrl);
      formData.append(
        'photoUrl',
        newData.photoUrl || ''
        // 'https://res.cloudinary.com/dmwntn6pl/image/upload/v1676226383/errsg3cyfmmclldf7amh.jpg'
      );
      formData.append('comments', newData.comments || 'lemonad');
      formData.append('breed', newData.breed || 'barbet');
      formData.append('dateOfBirth', newData.dateOfBirth);
      formData.append('name', newData.name || 'demon');
      formData.append('type', newData.type || 'sell');
      formData.append('title', newData.title || 'demon');
      formData.append('sex', newData.sex || 'male');
      formData.append('place', newData.place || 'demon');
      formData.append('price', newData.price || 200);
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      dispatch(addNotice(formData));
      return;
    }
    setData({
      ...newData,
      dateOfBirth: normalizedDateOfBirth,
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
      {...{ next, data, cancel, selectedOption, handleOptionChange }}
      // selectedOption FOR BUTTONS SWAPING OPTION 'SELL', 'inGoodHands', 'lostFound'
      //handleOptionChange TAKE DATA 'SELL', 'inGoodHands', 'lostFound' FROM INPUTS
    />,
    <AddNoticeStepTwo
      {...{ final, onFinal, next, data, prev, onClose, selectedOption }} //selectedOption TO SHOW SELL FILED OR NO
    />,
  ];
  return (
    <ModalAddNoticeWrapper {...{ maxHeight }}>
      {steps[currentStep]}
    </ModalAddNoticeWrapper>
  );
};
