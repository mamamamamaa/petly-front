import { useDispatch } from 'react-redux';
import { deleteOneOwnPet } from '../../redux/user/operations';
import {
  PetArticle,
  PetDeleteButton,
  PetImg,
  PetSpanWrapperFlex,
  PetSpanWrapper,
  PetSpan,
  PetComments,
  PetTextWrapper,
  PetDeleteButtonWrapper,
} from './UserPetCard.styled';
export const UserPetCard = ({
  pet = {},
  pictureURL = '',
  alt = 'pets picture',
}) => {
  const dispatch = useDispatch();
  return (
    <PetArticle>
      <PetImg alt={alt} src={pictureURL} />
      <PetTextWrapper>
        <PetSpanWrapperFlex>
          <PetSpanWrapper>
            <PetSpan>Name:</PetSpan>
            <PetSpan>{pet.name}</PetSpan>
          </PetSpanWrapper>
          <PetDeleteButtonWrapper>
            <PetDeleteButton
              type="button"
              onClick={() => dispatch(deleteOneOwnPet(pet._id))}
            />
          </PetDeleteButtonWrapper>
        </PetSpanWrapperFlex>
        <PetSpanWrapper>
          <PetSpan>Date of birth:</PetSpan>
          <PetSpan>{pet.dateOfBirth}</PetSpan>
        </PetSpanWrapper>
        <PetSpanWrapper>
          <PetSpan>Breed:</PetSpan>
          <PetSpan>{pet.breed}</PetSpan>
        </PetSpanWrapper>
        <PetSpanWrapper>
          <PetComments>Comments:</PetComments>
          <PetComments>{pet.comments}</PetComments>
        </PetSpanWrapper>
      </PetTextWrapper>
    </PetArticle>
  );
};
