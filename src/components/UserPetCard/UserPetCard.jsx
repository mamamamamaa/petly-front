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
  PetInfoWrapper,
  PetImgWrapper,
  Text,
} from './UserPetCard.styled';
import { FormattedMessage } from 'react-intl';

export const UserPetCard = ({
  pet = {},
  pictureURL = '',
  alt = 'pets picture',
}) => {
  const dispatch = useDispatch();
  return (
    <PetArticle>
      <PetImgWrapper>
        <PetImg alt={alt} src={pictureURL} />
      </PetImgWrapper>

      <PetTextWrapper>
        <PetSpanWrapperFlex>
          <PetSpanWrapper>
            <PetSpan><FormattedMessage id="namePet"/>:</PetSpan>
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
            <PetSpan><FormattedMessage id="dateBirth"/>:</PetSpan>
            <PetSpan>{pet.dateOfBirth}</PetSpan>
          </PetSpanWrapper>
        </PetInfoWrapper>
        <PetInfoWrapper>
          <PetSpanWrapper>
            <PetSpan><FormattedMessage id="breed"/>:</PetSpan>
            <PetSpan>{pet.breed}</PetSpan>
          </PetSpanWrapper>
        </PetInfoWrapper>
        <PetInfoWrapper>
          <PetSpanWrapper>
            <Text>
              <PetComments><FormattedMessage id="comment"/>:</PetComments>
              <PetComments>{pet.comments}</PetComments>
            </Text>
          </PetSpanWrapper>
        </PetInfoWrapper>
      </PetTextWrapper>
    </PetArticle>
  );
};
