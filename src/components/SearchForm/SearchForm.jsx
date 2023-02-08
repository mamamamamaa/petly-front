import {
  SearchTitle,
  SearchField,
  NoticesCategoriesList,
  NoticeCategoryItem,
  RadioBtn,
  RadioBtnLabel,
  PhotoPet,
  Title,
  PetSpanWrapper,
  PetSpan,
  PetDetails,
  PetDetailsButton,
  PetDetailsButtonText,
} from './SearchForm.styled';
import axios from 'axios';
import { useState, useEffect } from 'react';
import noPoster from '../../noPoster.jpg';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

const SearchForm = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [option, setOption] = useState('all');
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const getAll = async () => {
      const { data } = await instance.get(
        `/api/notices/searchManyTitles?title=${firstName}`
      );
      console.log(data);
      return data;
    };
    const getStrict = async () => {
      const { data } = await instance.get(
        `/api/notices/searchOneTitle?title=${firstName}`
      );
      console.log(data);
      return data;
    };
    const getTrendingHttp = async () => {
      if (option === 'one') {
        try {
          const response = await getStrict().then(responseHttp => {
            return responseHttp;
          });
          setPets([response]);
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          const response = await getAll().then(responseHttp => {
            return responseHttp;
          });
          setPets([...response]);
        } catch (error) {
          console.error(error);
        }
      }
    };
    getTrendingHttp();
  }, [firstName, option]);
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
        <RadioBtnLabel>
          <RadioBtn
            type="radio"
            name="myRadio"
            value="one"
            onChange={e => {
              console.log(e.target.value);
              return setOption(e.target.value);
            }}
          />
          Strict search
        </RadioBtnLabel>
        <RadioBtnLabel>
          <RadioBtn
            defaultChecked={true}
            type="radio"
            name="myRadio"
            value="all"
            onChange={e => setOption(e.target.value)}
          />
          Show all notices
        </RadioBtnLabel>
      </SearchTitle>
      {pets.length > 0 ? (
        <NoticesCategoriesList>
          {pets.map(
            ({ _id, photoUrl = noPoster, title, breed, place, age }) => (
              <NoticeCategoryItem key={_id}>
                <PhotoPet src={photoUrl} alt="Pet" />
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
