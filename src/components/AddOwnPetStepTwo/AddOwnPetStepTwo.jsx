import { Field, Form, Formik } from "formik"
import { useState } from "react";

export const AddOwnPetStepTwo = ({data, next, prev, onClose}) => {
    const [file, setFile]=useState();

    const handleSubmit = (values, actions) => { 
        actions.validateForm();   
        console.log(values)
        const newValue = {
            ...values,
            pictureURL: file,      
        }

        next(newValue, true);        
        actions.resetForm();
        onClose();
    }

    const handleUpload = (e) => {   
        console.log('e.target.files[0]', e.target.files[0]);
        // змінити той файл в потрібний формат
        setFile(e.target.files[0]);
    }

    const handleBack = (values, actions) => {  
        actions.setValues();
        prev(values);
    }
    // enctype="multipart/form-data"
    return <Formik 
    initialValues={data}
    onSubmit={handleSubmit}>
    <Form encType="multipart/form-data">
    <p>Add photo and some comments<span>*</span></p>
    <input id="file" type="file" name="pictureURL"
     onChange={handleUpload}
     />
    <label>Comments<span>*</span>
        <Field type="text" name="comments"/>
    </label><button type="button" 
    onClick={handleBack}
    >Back</button>
    <button type="submit">Done</button>    
</Form>
</Formik>
}