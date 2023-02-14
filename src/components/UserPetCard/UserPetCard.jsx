import { useDispatch } from "react-redux";
import { deleteOneOwnPet } from "../../redux/user/operations";
import {
  PetDeleteButton,
  PetUl,
  PetImg,
  PetLi,
  PetComments,
  PetBreed,
  PetDateOfBirth,
  PetName,
  PetCommentsTitle,
  PetBreedTitle,
  PetDateOfBirthTitle,
  PetNameTitle,
} from './UserPetCard.styled';
export const UserPetCard = ({pet}) => {
    const dispatch = useDispatch();

    return (
      <article>
        <PetDeleteButton
          type="button"
          onClick={() => dispatch(deleteOneOwnPet(pet._id))}
        >
          delete
        </PetDeleteButton>
        <PetImg alt="" src="" />
        <PetUl>
          <PetLi>
            <PetNameTitle>Name:</PetNameTitle>
            <PetName>{pet.name}</PetName>
          </PetLi>
          <PetLi>
            <PetDateOfBirthTitle>Date of birth:</PetDateOfBirthTitle>
            <PetDateOfBirth>{pet.dateOfBirth}</PetDateOfBirth>
          </PetLi>
          <PetLi>
            <PetBreedTitle>Breed:</PetBreedTitle>
            <PetBreed>{pet.breed}</PetBreed>
          </PetLi>
          <PetLi>
            <PetCommentsTitle>Comments:</PetCommentsTitle>
            <PetComments>{pet.comments}</PetComments>
          </PetLi>
        </PetUl>
      </article>
    );
} 