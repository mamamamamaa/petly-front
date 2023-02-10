import {
  SearchTitle,
  SearchField,
  NoticesCategoriesList,
  NoticeCategoryItem,
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
} from './SearchForm.styled';
import axios from 'axios';
import { useState, useEffect } from 'react';
import noPoster from '../../noPoster.jpg';
import heart from '../../utils/svg/heart.svg';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

const SearchForm = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const getAll = async () => {
      const { data } = await instance.get(
        `/api/notices/searchManyTitles?title=${firstName}`
      );
      console.log(data);
      return data;
    };

    const getTrendingHttp = async () => {
      try {
        const response = await getAll().then(responseHttp => {
          return responseHttp;
        });
        setPets([...response]);
      } catch (error) {
        console.error(error);
      }
    };
    getTrendingHttp();
  }, [firstName]);
  // FrontEnd - NoticesPage - Компонент рендериться на маршрут /notices/:categoryName Компонент рендерить: - форму пошуку NoticesSearch - блок навігації NoticesCategoriesNav - список оголошень NoticesCategoriesList - кнопку відкриття модалки для створення оголошення AddNoticeButton Під час першого входу на сторінку рендериться список оголошень з продажу
  // FrontEnd - NoticesPage - Компонент рендерить список всіх оголошень відповідної категорії - NoticeCategoryItem, данні по яким отримує з бекенду
  return (
    <>
      <SearchTitle>
        {children}
        <SearchField
          placeholder="Search"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        
      </SearchTitle>
      {pets.length > 0 ? (
        <NoticesCategoriesList>
          {pets.map(
            ({ _id, photoUrl = noPoster, title, breed, place, age }) => (
              <NoticeCategoryItem key={_id}>
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
              </NoticeCategoryItem>
            )
          )}
        </NoticesCategoriesList>
      ) : null}
    </>
  );
};
export default SearchForm;
