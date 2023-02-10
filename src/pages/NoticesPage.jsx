import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { search } from 'redux/notices/operations';
// import { sell } from 'redux/notices/operations';
import { useDispatch } from 'react-redux';
import {NoticesContainer} from 'components/NoticesContainer/NoticesContainer'
const NoticesPage = ({ children }) => {
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
      {children}
      <NoticesContainer {...{ firstName, setFirstName, pets }} />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default NoticesPage;
