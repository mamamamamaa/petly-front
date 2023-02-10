import { Formik } from "formik"

export const AddOwnPetStepTwo = ({data, next, prev}) => {

    const handleSubmit = (values, helpers) => {
        // preventDefault();
        console.log('values', values);
        console.log('helpers', helpers);
        next(values);
    }


    return <Formik 
    initialValues={data}
    onSubmit={handleSubmit}>
    <form>
    <p>Add photo and some comments<span>*</span></p>
    <input type="file" name="photo"/>
    <label>Comments<span>*</span>
        <input type="text" name="comment"/>
    </label>
    <button type="submit">Next</button>
    <button type="button" 
    // onClick={prev}
    >Back</button>
</form>
</Formik>
}