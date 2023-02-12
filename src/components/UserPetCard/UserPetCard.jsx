import { useDispatch } from "react-redux";
import { deleteOneOwnPet } from "../../redux/user/operations";

export const UserPetCard = ({pet}) => {
    const dispatch = useDispatch();

    return (<article>
        <button type="button" onClick={()=>dispatch(deleteOneOwnPet(pet._id))}>delete</button>
        <img alt="" src=""/>
        <ul>
            
                    <li>
                        <p>Name:</p>
                        <p>{pet.name}</p>
                    </li>
                    <li>
                        <p>Date of birth:</p>
                        <p>{pet.dateOfBirth}</p>
                    </li>
                    <li>
                        <p>Breed:</p>
                        <p>{pet.breed}</p>
                    </li>
                    <li>
                        <p>Comments:</p>
                        <p>{pet.comments}</p>
                    </li>
    
        </ul>        
    </article>)
} 