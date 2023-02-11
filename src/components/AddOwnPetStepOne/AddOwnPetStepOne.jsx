import { Field, Form, Formik } from "formik";

export const AddOwnPetStepOne = ({next, data, cancel}) => {
    // зробити запит на отримання всіх порід тварин
    const breeds = ["I don`t know", "Persian", "American Shorthair", "Chartreux", "Bombay", "Burmese", "Maine Coon", "Birman", "Himalayan", "Nebelung", "Norwegian Forest", "Siberian", "Scottish Fold","Bengal", "Ragdoll", "Siamese", "British Shorthair", "Exotic Shorthair", "Abyssinian", "Tonkinese", "Other"];

    const handleSubmit = (values, actions) => {
        console.log('values', values);
        console.log('actions', actions);
        actions.validateForm();
        next(values);
    }

    return <Formik 
    initialValues={data}
    onSubmit={handleSubmit}>
    <Form>
    <label>Name pet<span>*</span>
        <Field type="text" name="name" required/>
    </label>
    <label>Date of birth<span>*</span>
        <Field type="date" name="dateOfBirth" required
        // max={Date.now()}
        />
    </label>
    <label>Breed<span>*</span>
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