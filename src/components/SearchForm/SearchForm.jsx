import {
  SearchTitle,
  SearchField,
  NoticesCategoriesList,
} from './SearchForm.styled';
import axios from 'axios';
import { useState, useEffect } from 'react';
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
  return (
    <>
      <SearchTitle>
        {children}
        <SearchField
          placeholder="Search"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        Use strict search:
        <input
          type="radio"
          name="myRadio"
          value="one"
          onChange={e => {
            console.log(e.target.value);
            return setOption(e.target.value);
          }}
        />
        Show all notices
        <input
          defaultChecked={true}
          type="radio"
          name="myRadio"
          value="all"
          onChange={e => setOption(e.target.value)}
        />
      </SearchTitle>
      {pets.length > 0 ? (
        <NoticesCategoriesList>
          {pets.map(({ _id, title }) => (
            <li key={_id}>{title}</li>
          ))}
        </NoticesCategoriesList>
      ) : null}
    </>
  );
};
export default SearchForm;
