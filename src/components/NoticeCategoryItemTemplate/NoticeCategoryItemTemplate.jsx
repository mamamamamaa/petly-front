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
  AddPetToNoticesBtn,
  AddPetToNoticesImg,
  AddPetToNoticesText,
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
        <AddToFavBtn to="" >
          <AddToFavImg src={heart} alt="Add to favorites" />
        </AddToFavBtn>
        <AddPetToNoticesBtn to="" >
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
            <PetDeleteButtonImg
              src={recycleBin}
              alt="Recycle bin"
            ></PetDeleteButtonImg>
          </PetDeleteButtonDiv>
        </PetDeleteButton>
      </PetDetails>
    </>
  );
};
