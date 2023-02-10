import { Formik } from "formik";

export const AddOwnPetStepOne = ({next, data, cancel}) => {
    // зробити запит на отримання всіх порід тварин
    const breeds = ["I don`t know", "Persian", "American Shorthair", "Chartreux", "Bombay", "Burmese", "Maine Coon", "Birman", "Himalayan", "Nebelung", "Norwegian Forest", "Siberian", "Scottish Fold","Bengal", "Ragdoll", "Siamese", "British Shorthair", "Exotic Shorthair", "Abyssinian", "Tonkinese", "Other"];

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
    <label>Name pet<span>*</span>
        <input type="text" name="name" required/>
    </label>
    <label>Date of birth<span>*</span>
        <input type="date" name="dateOfBirth" required
        // max={Date.now()}
        />
    </label>
    <label>Breed<span>*</span>
        <select name="breed" required>
            {breeds.map(breed=> <option value={breed.toLocaleLowerCase()} key={breed}>{breed}</option>)}                    
        </select>
    </label>
    <button type="submit">Next</button>
    <button type="button" 
    // onClick={cancel}
    >Cancel</button>            
</form>
</Formik>
}