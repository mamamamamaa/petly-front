import {
  SearchTitle,
  SearchField,
  NoticesCategoriesList,
  NoticeCategoryItem,
} from './SearchForm.styled';
import { useState, useEffect } from 'react';
import noPoster from '../../noPoster.jpg';
import { search } from '../../redux/notices/operations';
import { useDispatch } from 'react-redux';
import Notices from '../../pages/NoticesPage';

const SearchForm = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [pets, setPets] = useState([]);
    const dispatch = useDispatch();
  useEffect(() => {
    const getTrendingHttp = async () => {
      try {
        const response = await dispatch(search(firstName)).then(
          responseHttp => {
            return responseHttp;
          }
        );
        console.log(response);
        setPets([...response.payload]);
      } catch (error) {
        console.error(error);
      }
    };
    getTrendingHttp();
  }, [firstName, dispatch]);
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
          {/* {pets.map(
            ({ _id, photoUrl = noPoster, title, breed, place, age }) => (
              
            )
          )} */}
          {pets.map(
            ({ _id, photoUrl = noPoster, title, breed, place, age }) => (
              <NoticeCategoryItem key={_id}>
                <Notices {...{ _id, photoUrl, title, breed, place, age }} />
              </NoticeCategoryItem>
            )
          )}
          {/* {friends.map(friend => (
            <li key={friend._id}>
              <Friend friend={friend} />
            </li>
          ))} */}
        </NoticesCategoriesList>
      ) : null}
    </>
  );
};
export default SearchForm;
