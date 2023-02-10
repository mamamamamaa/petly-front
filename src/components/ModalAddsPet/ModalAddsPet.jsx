import { useState } from "react";
import { AddOwnPetStepOne } from "../AddOwnPetStepOne/AddOwnPetStepOne";
import { AddOwnPetStepTwo } from "../AddOwnPetStepTwo/AddOwnPetStepTwo";

export const ModalAddsPet = () => {
    
    const [data, setData] = useState({
        name: "",
        dateOfBirth:"",
        breed:"",
        photo: "",
        comment:""
    });

    const handleNextStep = (newData) => {
        // preventDefault();
        console.log('newData', newData);
        setData(prevData => ({...prevData, ...newData}));
        setCurrentStep(prevStep => prevStep + 1);
    }

    const handlePrevStep = (newData) => {
        console.log('newData', newData);
        setData(prevData => ({...prevData, ...newData}));
        setCurrentStep(prevStep => prevStep - 1);
    }

    const cancelData = () => {
        setData({
            name: "", 
            dateOfBirth:"", 
            breed:"", 
            photo: "", 
            comment:""
        });
        setCurrentStep(0);
    }

    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
    <AddOwnPetStepOne next={handleNextStep} data={data} cancel={cancelData}/>, 
    <AddOwnPetStepTwo next={handleNextStep} data={data} prev={handlePrevStep} />
];

    

    return <div>
        <h3>Add pet</h3>
        {steps[currentStep]}
    </div>
}