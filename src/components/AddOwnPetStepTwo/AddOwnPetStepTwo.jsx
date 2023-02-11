// import { Field, Form, Formik } from "formik"
// import { useState } from "react";
import { useFormik } from 'formik';

export const AddOwnPetStepTwo = ({data, next, prev, onClose}) => {

    const handleBack= 
    // (values, actions)=>{
        (event) => {
        // console.log('values', values);
        // console.log('actions', actions);
        console.log('event', event);
    }

    const formik = useFormik({
        initialValues: {
            pictureURL: '',
            comments: '',
        },
        onSubmit: (values, actions)=>{
            console.log('values', values);
            console.log('actions', actions);
        }, 
        
      });
      return (
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <div>
                <label> Upload File</label>
                <input
                type='file'
                name='pictureURL'
                accept='image/*'
                onChange={(e) =>
                    formik.setFieldValue('pictureURL', e.currentTarget.files[0])
                }
                />
            </div>
            <div>
                <label> Comments</label>
                <input
                type='text'
                name='comments'
                placeholder="Type comments"
                onChange={formik.handleChange}
                value={formik.values.comments}
                />
            </div>

            <button type="button" 
    onClick={handleBack}
    >Back</button>
    <button type="submit">Done</button>
    </form>
        );
    };
//     const [file, setFile]=useState();

//     const handleSubmit = (values, actions) => { 
//         actions.validateForm();   
//         // console.log(values)
//         const newValue = {
//             ...values,
//             pictureURL: file,      
//         }

//         next(newValue, true);        
//         actions.resetForm();
//         onClose();
//     }

//     const handleUpload = (e) => {   
//         console.log('e.target.files[0]', e.target.files[0]);
//         // змінити той файл в потрібний формат
//         setFile(e.target.files[0].name);
//     }

//     const handleBack = (values, actions) => {  
//         actions.setValues();
//         prev(values);
//     }
//     // enctype="multipart/form-data"
//     return <Formik 
//     initialValues={data}
//     onSubmit={handleSubmit}>
//     <Form encType="multipart/form-data">
//     <p>Add photo and some comments<span>*</span></p>
//     <input id="file" type="file" name="pictureURL"
//      onChange={handleUpload}
//      />
//     <label>Comments<span>*</span>
//         <Field type="text" name="comments"/>
    // </label><button type="button" 
    // onClick={handleBack}
    // >Back</button>
    // <button type="submit">Done</button>    
// </Form>
// </Formik>
// }