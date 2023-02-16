import { useState } from 'react';
import { AddOwnPetStepOne } from '../AddOwnPetStepOne/AddOwnPetStepOne';
import { AddOwnPetStepTwo } from '../AddOwnPetStepTwo/AddOwnPetStepTwo';
import { useDispatch } from 'react-redux';
import { addOwnPet } from '../../redux/user/operations';
import moment from 'moment';
import { Container, Title } from './ModalAddsPet.styled';

export const ModalAddsPet = ({onClose}) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        dateOfBirth:"",
        breed:"",
        pictureURL: "",
        comments:"",
        selectedDateInNumber:""
    });


  const handleNextStep = (newData, final = false) => {   
    if (final) {
      const normalizedDateOfBirth = moment(new Date(newData.selectedDateInNumber)).format("DD.MM.YYYY");
      const datatoSubmit = {
        name: newData.name,        
        breed:newData.breed,
        pictureURL: newData.pictureURL,
        comments:newData.comments,       
        dateOfBirth: normalizedDateOfBirth,
      };

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
      
      dispatch(addOwnPet(datatoSubmit));
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
      name: "",
        dateOfBirth:"",
        breed:"",
        pictureURL: "",
        comments:"",
        selectedDateInNumber:""
    });
    setCurrentStep(0);
    onClose();
  };
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    <AddOwnPetStepOne 
      next={handleNextStep} 
      data={data} 
      cancel={cancelData}
    />,
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
