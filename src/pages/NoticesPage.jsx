import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { search } from 'redux/notices/operations';
// import { sell } from 'redux/notices/operations';
import { useDispatch } from 'react-redux';
import { NoticesContainer } from 'components/NoticesContainer/NoticesContainer';
import {
  NoticesSearch,
  SearchField,
  NoticesNavLink,
  NoticesNavText,
  NoticesNavLi,
  NoticesNavUl,
} from './NoticesPage.styled';

const NoticesPage = () => {
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
      <NoticesSearch>
        <SearchField
          placeholder="Search"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </NoticesSearch>
      <NoticesNavUl>
        <NoticesNavLi>
          <NoticesNavLink to="sell">
            <NoticesNavText>sell</NoticesNavText>
          </NoticesNavLink>
        </NoticesNavLi>
        <NoticesNavLi>
          <NoticesNavLink to="lost">lost/found</NoticesNavLink>
        </NoticesNavLi>
        <NoticesNavLi>
          <NoticesNavLink to="good-hands">in good hands</NoticesNavLink>
        </NoticesNavLi>
        <NoticesNavLi>
          <NoticesNavLink to="favorite-ads">favorite ads</NoticesNavLink>
        </NoticesNavLi>
        <NoticesNavLi>
          <NoticesNavLink to="my-ads">my ads</NoticesNavLink>
        </NoticesNavLi>
      </NoticesNavUl>

      <NoticesContainer {...{ firstName, setFirstName, pets }} />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default NoticesPage;
