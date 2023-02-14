import { useDispatch } from 'react-redux';
import { deleteOneOwnPet } from '../../redux/user/operations';
import {
  PetDeleteButton,
  PetImg,
  PetComments,
  PetBreed,
  PetDateOfBirth,
  PetName,
  PetCommentsTitle,
  PetBreedTitle,
  PetDateOfBirthTitle,
  PetNameTitle,
} from './UserPetCard.styled';
export const UserPetCard = ({
  pet = {},
  pictureURL = '',
  alt = 'pets picture',
}) => {
  const dispatch = useDispatch();
  return (
    <article>
      <PetImg alt={alt} src={pictureURL} />
      <PetNameTitle>Name:</PetNameTitle>
      <PetDeleteButton
        type="button"
        onClick={() => dispatch(deleteOneOwnPet(pet._id))}
      >
        delete
      </PetDeleteButton>
      <PetName>{pet.name}</PetName>
      <PetDateOfBirthTitle>Date of birth:</PetDateOfBirthTitle>
      <PetDateOfBirth>{pet.dateOfBirth}</PetDateOfBirth>
      <PetBreedTitle>Breed:</PetBreedTitle>
      <PetBreed>{pet.breed}</PetBreed>
      <PetCommentsTitle>Comments:</PetCommentsTitle>
      <PetComments>{pet.comments}</PetComments>
    </article>
  );
};
