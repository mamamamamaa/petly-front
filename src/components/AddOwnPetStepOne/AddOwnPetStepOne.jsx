
import { ErrorMessage, Field, Form, Formik } from "formik";
// import * as yup from 'yup';
import { useState } from "react";

const breeds = ["I don`t know", "Persian", "American Shorthair", "Chartreux", "Bombay", "Burmese", "Maine Coon", "Birman", "Himalayan", "Nebelung", "Norwegian Forest", "Siberian", "Scottish Fold","Bengal", "Ragdoll", "Siamese", "British Shorthair", "Exotic Shorthair", "Abyssinian", "Tonkinese", "Other"];
    
// const maxDate = Date.now();

// const schema = yup.object().shape({
//     name: yup.string()
//         .min(2, 'Must be 2 or more letter')
//         .max(16, 'Must be 16 or less letter')
//         .matches(/^[a-zA-Zа-яА-Я-`'іІїЇ]*$/, 'Only letters')
//         .trim()
//         .required('Required'),
//     dateOfBirth: yup.date(),
//         // .required('Required'),
//     breed: yup.string()
//         // .min(2, 'Must be 2 or more letter')
//         // .max(16, 'Must be 16 or less letter')
//         // .matches(/^[a-zA-Zа-яА-Я-`'іІїЇ]*$/, 'Only letters')
//         .required('Required'),   
// });

export const AddOwnPetStepOne = ({next, data, cancel}) => {
    
    const [selectedDate, setSelectedDate] = useState('');
    const [dateToSubmit, setDateToSubmit] = useState();

    
    
    const handleSubmit = (values, actions) => {
        console.log('values', values)
        next({...values, 
            dateOfBirth:dateToSubmit
        });
        console.log('data in 1 step', data);
    }

    const handleMaxDate = (e) => {
        console.log('event', e);
        const maxDate = Date.now();
        console.log('maxDate', maxDate)
    }

    const handleDate = (e) =>{
    setSelectedDate(e.target.value);
    setDateToSubmit(e.target.valueAsNumber);
    }
    
    return <Formik 
    initialValues={data}
    // validationSchema={schema}
    onSubmit={handleSubmit}>
    <Form>
    <label>Name pet
        <Field type="text" name="name" required/>
        <ErrorMessage name="name" component="div" />
    </label>
    <label>Date of birth   
        <Field type="date" name="dateOfBirth" max={()=>handleMaxDate()} required
        onChange={handleDate}
        value={selectedDate}
        />
        <ErrorMessage name="dateOfBirth" component="div" />
    </label>
    <label>Breed
        <Field as="select" name="breed" required>
            {breeds.map(breed=> <option value={breed.toLocaleLowerCase()} key={breed}>{breed}</option>)}                    
        </Field>
        <ErrorMessage name="breed" component="div" />
    </label>    
    <button type="button" 
    onClick={()=>cancel()}
    >Cancel</button>  
    <button type="submit">Next</button>          
</Form>
</Formik>
}


