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
  AdvWrapper,
  AdvTitle,
  PetDeleteButton,
  PetDeleteButtonDiv,
  PetDeleteButtonImg,
  PetDeleteButtonText,
} from './NoticeCategoryItemTemplate.styled';
import heart from 'utils/svg/heart.svg';
import cross from 'utils/svg/cross.svg';
import recycleBin from 'utils/svg/recycleBin.svg';

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
        <AdvWrapper>
          <AdvTitle>In good hands</AdvTitle>
        </AdvWrapper>
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
        <PetDeleteButton>
          <PetDeleteButtonDiv>
            <PetDeleteButtonText>Delete</PetDeleteButtonText>
            <PetDeleteButtonImg src={recycleBin} alt="Recycle bin"></PetDeleteButtonImg>
          </PetDeleteButtonDiv>
        </PetDeleteButton>
      </PetDetails>
    </>
  );
};
