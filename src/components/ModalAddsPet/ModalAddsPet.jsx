import { useState } from 'react';
import { AddOwnPetStepOne } from '../AddOwnPetStepOne/AddOwnPetStepOne';
import { AddOwnPetStepTwo } from '../AddOwnPetStepTwo/AddOwnPetStepTwo';
import { useDispatch } from 'react-redux';
import { addOwnPet } from '../../redux/user/operations';
import moment from 'moment';
import { Container, Title } from './ModalAddsPet.styled';

export const ModalAddsPet = ({ onClose }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: '',
    dateOfBirth: '',
    breed: '',
    photoUrl: [],
    comments: '',
    selectedDateInNumber: '',
  });

  const handleNextStep = (newData, final = false) => {
    if (final) {
      const normalizedDateOfBirth = moment(
        new Date(newData.selectedDateInNumber)
      ).format('DD.MM.YYYY');
      
      const formData = new FormData();
      if (Array.isArray(newData.photoUrl)) {
        newData.photoUrl.forEach(file => {
          const photoUrlFile = new File([file], file.name, {
            type: 'image/jpeg',
          });
          formData.append('pictureURL', photoUrlFile);
        });
      }
      formData.append('comments', newData.comments);
      formData.append('breed', newData.breed);
      formData.append('dateOfBirth', normalizedDateOfBirth);
      formData.append('name', newData.name);
      // for (const [key, value] of formData.entries()) {
      //   console.log(`${key}: ${value}`);
      // }
      dispatch(addOwnPet(formData));
      return;
    }
    setData(newData);
    setCurrentStep(prevStep => prevStep + 1);
  };

  const handlePrevStep = newData => {
    setData(prevData => ({ ...prevData, ...newData }));
    setCurrentStep(prevStep => prevStep - 1);
  };

  const cancelData = e => {
    setData({
      name: '',
      dateOfBirth: '',
      breed: '',
      photoUrl: [],
      comments: '',
      selectedDateInNumber: '',
    });
    setCurrentStep(0);
    onClose();
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

  return (
    <Container>
      <Title>Add pet</Title>
      {steps[currentStep]}
    </Container>
  );
};
