import { Field, Form, Formik } from "formik"

export const AddOwnPetStepTwo = ({data, next, prev, onClose}) => {

    const handleSubmit = (values, actions) => { 
        actions.validateForm();        
        next(values, true);        
        actions.resetForm();
        onClose();
    }

    // const handleUpload = (e) => {        
    //     setFieldValue("file", e.target.files[0]);
    // }

    const handleBack = (values, actions) => {  
        actions.setValues();
        prev(values);
    }
    // enctype="multipart/form-data"
    return <Formik 
    initialValues={data}
    onSubmit={handleSubmit}>
    <Form >
    <p>Add photo and some comments<span>*</span></p>
    <input id="file" type="file" name="pictureURL"
    //  onChange={handleUpload}
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