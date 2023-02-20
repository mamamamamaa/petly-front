import React, { useState } from 'react';
import { AddNoticeStepOne } from './AddNoticeStepOne';
import { AddNoticeStepTwo } from './AddNoticeStepTwo';
<<<<<<< HEAD
// import { SubTitle } from './ModalAddNotice.styled';
=======
import { useDispatch } from 'react-redux';
import { addNotice } from 'redux/notices/operations';
import { ModalAddNoticeWrapper } from './ModalAddNotice.styled';
import moment from 'moment';
>>>>>>> e9227225c98f73038fc7381367bb47ff4686d349

export const ModalAddNotice = props => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    type: 'sell',
    title: '',
    name: '',
    dateOfBirth: '',
    breed: '',
    sex: '',
    photoUrl: '',
    place: '',
    price: '',
    comments: '',
  });

<<<<<<< HEAD
  let Child = undefined;
  if (page === 0) {
    Child = (
      <AddNoticeStepOne
        setData={setData}
        closeModal={props.onClose}
        setPage={setPage}
        data={data}
        title="First Page"
      />
    );
  } else {
    Child = (
      <AddNoticeStepTwo
        setData={setData}
        closeModal={props.onClose}
        setPage={setPage}
        data={data}
        title="Second Page"
      />
    );
  }

  return (
    <>
      {/* <SubTitle>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </SubTitle>
      {data.type === 'sell' && (
        <SubTitle>Lets find a new home for you pet</SubTitle>
      )}
      {data.type === 'good-hands' && (
        <SubTitle>You give your pet to a good people</SubTitle>
      )}
      {data.type === 'lost/found' && (
        <SubTitle>Your pet will find his home</SubTitle>
      )} */}
      {Child}
    </>
  );
=======
  const handleNextStep = (newData, final = false) => {
    if (final) {
      const normalizedDateOfBirth = moment(
        new Date(newData.selectedDateInNumber)
      ).format('DD.MM.YYYY');
      const datatoSubmit = {
        name: newData.name,
        breed: newData.breed,
        comments: newData.comments,
        dateOfBirth: normalizedDateOfBirth,
        type: newData.type,
        title: newData.title,
        sex: newData.sex,
        place: newData.place,
        photoUrl: newData.photoUrl,
      };

      // const handleNextStep = (newData = {}, final = false) => {
      //   const normalizedDateOfBirth = moment(new Date(newData.dateOfBirth)).format(
      //     'DD.MM.YYYY'
      //   );
      //   if (final) {
      //     setData({
      //       ...newData,
      //       dateOfBirth: normalizedDateOfBirth,
      //     });

      const formData = new FormData();

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

      dispatch(addNotice(datatoSubmit));
      return;
    }
    setData(newData);
    // setData({
    //   ...newData,
    //   dateOfBirth: normalizedDateOfBirth,
    // });

    setCurrentStep(prevStep => prevStep + 1);
  };

  const handlePrevStep = newData => {
    setData(prevData => ({ ...prevData, ...newData }));
    setCurrentStep(prevStep => prevStep - 1);
  };

  const cancelData = e => {
    setData({
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
      selectedDateInNumber: '',
    });
    setCurrentStep(0);
    onClose();
  };
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    <AddNoticeStepOne next={handleNextStep} data={data} cancel={cancelData} />,
    <AddNoticeStepTwo
      next={handleNextStep}
      data={data}
      prev={handlePrevStep}
      onClose={onClose}
    />,
  ];
  return <ModalAddNoticeWrapper>{steps[currentStep]}</ModalAddNoticeWrapper>;
>>>>>>> e9227225c98f73038fc7381367bb47ff4686d349
};
