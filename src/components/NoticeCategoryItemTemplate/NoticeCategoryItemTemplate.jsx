import {
  PhotoPet,
  Title,
  PetSpanWrapper,
  PetSpan,
  PetDetails,
  PetDetailsButton,
  PetDetailsButtonText,
  PhotoPetWrapper,
  AddToFavImg,
  AddToFavBtn,
  AddPetToNoticesBtn,
  AddPetToNoticesImg,
  AddPetToNoticesText,
} from './NoticeCategoryItemTemplate.styled';
import heart from 'utils/svg/heart.svg';
import cross from 'utils/svg/cross.svg';

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
        <AddToFavBtn to="" end>
          <AddToFavImg src={heart} alt="Add to favorites" />
        </AddToFavBtn>
        <AddPetToNoticesBtn to="" end>
          <AddPetToNoticesImg src={cross} alt="Add pet to notices" />
          <AddPetToNoticesText>Add pet</AddPetToNoticesText>
        </AddPetToNoticesBtn>
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
