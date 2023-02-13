import { useFormik } from 'formik';

export const AddOwnPetStepTwo = ({data, next, prev, onClose}) => {

    const handleBack= ()=>{        
        const newValue = {
            ...data,
            ...formik.values,
        }
        prev(newValue);
    }

    const formik = useFormik({
        initialValues: data,
        onSubmit: (values, actions)=>{
            actions.validateForm();   
        const newValue = {
            ...data,
            ...values,
        }

        next(newValue, true);        
        actions.resetForm();
        onClose();
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
                    formik.setFieldValue('pictureURL', e.currentTarget.files[0], e.currentTarget.files[0].name)
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
