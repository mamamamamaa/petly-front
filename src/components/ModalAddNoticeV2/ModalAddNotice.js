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
  comments: null,
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
  const handleNextStep = (newData = {}, final ) => {
    console.log('IN NEXT STEP');
    const normalizedDateOfBirth = moment(new Date(newData.dateOfBirth)).format(
      'DD.MM.YYYY'
    );
    console.log(newData);
    console.log(final);
    if (final) {
      setData({
        ...newData,
        dateOfBirth: normalizedDateOfBirth,
      });

      const formData = new FormData();
      console.log(formData);
      // formData.append('photoUrl', newData.photoUrl, newData.photoUrl.name);
      formData.append(
        'photoUrl',
        testState.photoUrl ||
          'https://res.cloudinary.com/dmwntn6pl/image/upload/v1676226383/errsg3cyfmmclldf7amh.jpg'
      );
      formData.append('comments', testState.comments || 'demon');
      formData.append('breed', testState.breed || 'barbet');
      formData.append('dateOfBirth', testState.dateOfBirth);
      formData.append('name', testState.name || 'demon');
      formData.append('type', testState.type || 'sell');
      formData.append('title', testState.title ||'demon');
      formData.append('sex', testState.sex  ||'male');
      formData.append('place', testState.place || 'demon');
      formData.append('price', testState.price || 200);
      // formData.append(
      //   'photoUrl',
      //   newData.photoUrl ||
      //     'https://res.cloudinary.com/dmwntn6pl/image/upload/v1676226383/errsg3cyfmmclldf7amh.jpg'
      // );
      // formData.append('comments', newData.comments || 'demon');
      // formData.append('breed', newData.breed || 'barbet');
      // formData.append('dateOfBirth', newData.dateOfBirth);
      // formData.append('name', newData.name || 'demon');
      // formData.append('type', newData.type || 'sell');
      // formData.append('title', newData.title ||'demon');
      // formData.append('sex', newData.sex  ||'male');
      // formData.append('place', newData.place || 'demon');
      // formData.append('price', newData.price || 200);
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      dispatch(addNotice(formData));
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
      selectedOption={selectedOption} // FOR BUTTONS SWAPING OPTION 'SELL', 'inGoodHands', 'lostFound'
      handleOptionChange={handleOptionChange} //TAKE DATA 'SELL', 'inGoodHands', 'lostFound' FROM INPUTS
    />,
    <AddNoticeStepTwo
      onFinal={onFinal}
      next={handleNextStep}
      data={data}
      prev={handlePrevStep}
      onClose={onClose}
      selectedOption={selectedOption} // TO SHOW SELL FILED OR NO
    />,
  ];
  return (
    <ModalAddNoticeWrapper {...{ maxHeight }}>
      {steps[currentStep]}
    </ModalAddNoticeWrapper>
  );
};
