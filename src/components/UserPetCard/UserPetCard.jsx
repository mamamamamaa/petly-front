import { useDispatch } from 'react-redux';
import { deleteOneOwnPet } from '../../redux/user/operations';
import {
  PetArticle,
  PetDeleteButton,
  // PetImg,
  PetSpanWrapperFlex,
  PetSpanWrapper,
  PetSpan,
  PetComments,
  PetTextWrapper,
  PetDeleteButtonWrapper,
  PetInfoWrapper,
  // PetImgWrapper,
  Text,
} from './UserPetCard.styled';
import { ListModalCardNoticeDragDropContext } from 'components/ListModalCardNotice/ListModalCardNoticeDragDropContext';
export const UserPetCard = ({
  pet = {},
  pictureURL = [],
  alt = 'pets picture',
}) => {
  const dispatch = useDispatch();
  return (
    <PetArticle>
      {/* <PetImgWrapper>
        <PetImg alt={alt} src={pictureURL[0]} />
      </PetImgWrapper> */}
        <ListModalCardNoticeDragDropContext {...{ photoUrl: pictureURL }} />

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
        <PetInfoWrapper>
          <PetSpanWrapper>
            <PetSpan>Date of birth:</PetSpan>
            <PetSpan>{pet.dateOfBirth}</PetSpan>
          </PetSpanWrapper>
        </PetInfoWrapper>
        <PetInfoWrapper>
          <PetSpanWrapper>
            <PetSpan>Breed:</PetSpan>
            <PetSpan>{pet.breed}</PetSpan>
          </PetSpanWrapper>
        </PetInfoWrapper>
        <PetInfoWrapper>
          <PetSpanWrapper>
            <Text>
              <PetComments>Comments:</PetComments>
              <PetComments>{pet.comments}</PetComments>
            </Text>
          </PetSpanWrapper>
        </PetInfoWrapper>
      </PetTextWrapper>
    </PetArticle>
  );
};
