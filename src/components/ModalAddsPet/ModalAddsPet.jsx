import { useState } from "react";
import { AddOwnPetStepOne } from "../AddOwnPetStepOne/AddOwnPetStepOne";
import { AddOwnPetStepTwo } from "../AddOwnPetStepTwo/AddOwnPetStepTwo";
import { useDispatch } from "react-redux";
import { addOwnPet } from "../../redux/user/operations";


export const ModalAddsPet = ({onClose}) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        dateOfBirth:"",
        breed:"",
        pictureURL: "",
        comments:""
    });

    const handleNextStep = (newData, final=false) => {
        
        setData(prevData => ({...prevData, ...newData}));        
        if(final){
            
            const formData = new FormData();
        formData.append('pictureURL', newData.pictureURL);
        formData.append('comments', newData.comments);
        formData.append('breed', newData.breed);
        formData.append('dateOfBirth', newData.dateOfBirth);
        formData.append('name', newData.name);
            dispatch(addOwnPet(newData));     
            return
        }
        setCurrentStep(prevStep => prevStep + 1);
    }
    const handlePrevStep = (newData) => {
        setData(prevData => ({...prevData, ...newData}));
        setCurrentStep(prevStep => prevStep - 1);
    }
    const cancelData = (e) => {
        setData({
            name: "",
            dateOfBirth:"",
            breed:"",
            pictureURL: "",
            comments:""
        });
        setCurrentStep(0);        
    }
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
    <AddOwnPetStepOne next={handleNextStep} data={data} cancel={cancelData}/>, 
    <AddOwnPetStepTwo next={handleNextStep} data={data} prev={handlePrevStep} onClose={onClose}/>
];
    
    return <div>
        <h3>Add pet</h3>
        {steps[currentStep]}
    </div>
}