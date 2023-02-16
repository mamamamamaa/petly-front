import { useState } from 'react';
import { AddOwnPetStepOne } from './AddNoticeStepOne';
// import { AddOwnPetStepOne } from '../AddOwnPetStepOne/AddOwnPetStepOne';
import { AddOwnPetStepTwo } from './AddNoticeStepTwo';
// import { AddOwnPetStepTwo } from '../AddOwnPetStepTwo/AddOwnPetStepTwo';
import { useDispatch } from 'react-redux';
import { addNotice } from 'redux/notices/operations';
import moment from 'moment';

export const ModalAddNotice = ({ onClose }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
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
  });

  const handleNextStep = (newData, final = false) => {
    const normalizedDateOfBirth = moment(new Date(newData.dateOfBirth)).format(
      'DD.MM.YYYY'
    );
    console.log('newData', newData);
    console.log('final', final);
    if (final) {
      setData({
        ...newData,
        dateOfBirth: normalizedDateOfBirth,
      });

      const formData = new FormData();

      formData.append(
        'pictureURL',
        newData.pictureURL,
        newData.pictureURL.name
      );
      formData.append('comments', newData.comments);
      formData.append('breed', newData.breed);
      formData.append('dateOfBirth', newData.dateOfBirth);
      formData.append('name', newData.name);
      formData.append('type', newData.type);
      formData.append('title', newData.title);
      formData.append('sex', newData.sex);
      formData.append('place', newData.place);
      formData.append('price', newData.price);

      dispatch(addNotice(newData));
      return;
    }
    setData({
      ...newData,
      dateOfBirth: normalizedDateOfBirth,
    });
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
    });
    setCurrentStep(0);
  };
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    <AddOwnPetStepOne next={handleNextStep} data={data} cancel={cancelData} />,
    <AddOwnPetStepTwo
      next={handleNextStep}
      data={data}
      prev={handlePrevStep}
      onClose={onClose}
    />,
  ];
  console.log(data);
  return (
    <div>
      <h3>Add pet</h3>
      <p>some text</p>
      {steps[currentStep]}
    </div>
  );
};
