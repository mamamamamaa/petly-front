import { Field, Form, Formik } from "formik";
// import moment from "moment";
import { useState } from "react";
export const AddOwnPetStepOne = ({next, data, cancel}) => {
    
    const [selectedDate, setSelectedDate] = useState('');
    const [dateToSubmit, setDateToSubmit] = useState();
    const breeds = ["I don`t know", "Persian", "American Shorthair", "Chartreux", "Bombay", "Burmese", "Maine Coon", "Birman", "Himalayan", "Nebelung", "Norwegian Forest", "Siberian", "Scottish Fold","Bengal", "Ragdoll", "Siamese", "British Shorthair", "Exotic Shorthair", "Abyssinian", "Tonkinese", "Other"];
    const handleSubmit = (values, actions) => {
        // console.log('values', values);
        // console.log('actions', actions);
        // actions.validateForm();
        next({...values, 
            dateOfBirth:dateToSubmit
        });
        // next(values);
    }

    const handleDate = (e) =>{
        console.log(e.target.value);
        console.log('e.target.valueAsNumber', e.target.valueAsNumber);
    //     // moment("12-25-1995", "MM-DD-YYYY");
    //     // const normalData = moment(`${e.target.value}`, "YYYY-MM-DD").format("DD-MM-YYYY");
    //     // console.log(normalData);
    setSelectedDate(e.target.value);
    setDateToSubmit(e.target.valueAsNumber);
    }

    return <Formik 
    initialValues={data}
    onSubmit={handleSubmit}>
    <Form>
    <label>Name pet
        <Field type="text" name="name" required/>
    </label>
    <label>Date of birth   
        <Field type="date" name="dateOfBirth" required
        // placeholder="DD-MM-YYYY"
        // max={Date.now()}
        onChange={handleDate}
        value={selectedDate}
        />
    </label>
    <label>Breed
        <Field as="select" name="breed" required>
            {breeds.map(breed=> <option value={breed.toLocaleLowerCase()} key={breed}>{breed}</option>)}                    
        </Field>
    </label>    
    <button type="button" 
    onClick={()=>cancel()}
    >Cancel</button>  
    <button type="submit">Next</button>          
</Form>
</Formik>
}