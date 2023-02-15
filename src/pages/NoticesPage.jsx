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
  NoticesNavWrapper,
} from './NoticesPage.styled';
import { useAuth } from '../redux/hooks';
import AddNoticeButton from '../components/AddNoticeButton/AddNoticeButton';

const NoticesPage = () => {
  const { isLoggedIn } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [pets, setPets] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    // const getTrendingHttp = async () => {
    //   try {
    //     const response = await dispatch(search(firstName)).then(
    //       responseHttp => {
    //         return responseHttp;
    //       }
    //     );
    //     console.log(response);
    //     setPets([...response.payload]);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // getTrendingHttp();
  }, [firstName, dispatch]);

  return (
    <>
      <NoticesSearch>
        <SearchField
          placeholder="Search"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </NoticesSearch>
      <NoticesNavWrapper>
        <NoticesNavUl>
          <NoticesNavLi>
            <NoticesNavLink to="sell">
              <NoticesNavText>sell</NoticesNavText>
            </NoticesNavLink>
          </NoticesNavLi>
          <NoticesNavLi>
            <NoticesNavLink to="lost">
              <NoticesNavText>lost/found</NoticesNavText>
            </NoticesNavLink>
          </NoticesNavLi>
          <NoticesNavLi>
            <NoticesNavLink to="good-hands">
              <NoticesNavText>in good hands</NoticesNavText>
            </NoticesNavLink>
          </NoticesNavLi>
          {isLoggedIn && (
            <NoticesNavLi>
              <NoticesNavLink to="favorite">
                <NoticesNavText>favorite ads</NoticesNavText>
              </NoticesNavLink>
            </NoticesNavLi>
          )}
          {isLoggedIn && (
            <NoticesNavLi>
              <NoticesNavLink to="my-ads">
                <NoticesNavText>my ads</NoticesNavText>
              </NoticesNavLink>
            </NoticesNavLi>
          )}
        </NoticesNavUl>
        <AddNoticeButton />
      </NoticesNavWrapper>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default NoticesPage;
