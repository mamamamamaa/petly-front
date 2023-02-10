import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
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
} from '../components/SearchForm/SearchForm.styled';
import heart from '../utils/svg/heart.svg';
const Notices = ({  photoUrl, title, breed, place, age }) => {
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
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Notices;
