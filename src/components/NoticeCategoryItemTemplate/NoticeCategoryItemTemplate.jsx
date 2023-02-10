import {
  PhotoPet,
  Title,
  PetSpanWrapper,
  PetSpan,
  PetDetails,
  PetDetailsButton,
  PetDetailsButtonText,
  AddToFav,
  AddToFavWrapper,
  PhotoPetWrapper,
} from './NoticeCategoryItemTemplate.styled';
import heart from 'utils/svg/heart.svg';

export const NoticeCategoryItemTemplate = ({
  photoUrl,
  title,
  breed,
  place,
  age,
}) => {
  return (
    <>
      <PhotoPetWrapper>
        <PhotoPet src={photoUrl} alt="Pet" />
        <AddToFavWrapper to="/notice/addfavorite/_id" end>
          <AddToFav src={heart} alt="Add to favorites" />
        </AddToFavWrapper>
      </PhotoPetWrapper>
      <PetDetails>
        <Title>{title}</Title>
        <PetSpanWrapper>
          <PetSpan>Breed:</PetSpan>
          <PetSpan>{breed}</PetSpan>
        </PetSpanWrapper>
        <PetSpanWrapper>
          <PetSpan>Place:</PetSpan>
          <PetSpan>{place}</PetSpan>
        </PetSpanWrapper>
        <PetSpanWrapper>
          <PetSpan>Age:</PetSpan>
          <PetSpan>{age}</PetSpan>
        </PetSpanWrapper>
        <PetDetailsButton>
          <PetDetailsButtonText>Learn More</PetDetailsButtonText>
        </PetDetailsButton>
      </PetDetails>
    </>
  );
};
