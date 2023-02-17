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
  // AddPetToNoticesBtn,
  // AddPetToNoticesImg,
  // AddPetToNoticesText,
  NoticesNavWrapper,
  // AddPetToNoticesBtnWrapper,
} from './NoticesPage.styled';
import { AddPetToNoticesBtn,
          AddPetToNoticesImg,
          AddPetToNoticesText, 
          AddPetToNoticesBtnWrapper
         } from 'components/AddNoticeButton/AddNoticeButton.styled';
import cross from 'utils/svg/cross.svg';
import { useAuth } from '../redux/hooks';
import toast, { Toaster } from 'react-hot-toast';
import { ModalAddsPet } from '../components/ModalAddsPet/ModalAddsPet';
import { Container } from 'utils';

const NoticesPage = () => {
  const { isLoggedIn } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [pets, setPets] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onButtonClick = () => {
    !isLoggedIn
      ? toast.error(
          'Dear friend, please sign up or log in to add your pet to notice'
        )
      : setIsModalOpen(true);
  };

  const dispatch = useDispatch();

  const handleFilterChange = e => {
    console.log(e);
    dispatch(setFirstName(e.target.value));
    console.log(firstName);
  };

  
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
    //     console.log(pets);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // getTrendingHttp();
  }, [firstName, dispatch]);

  return (
         <Container>
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
        {isModalOpen ? (
          <>
            <ModalAddsPet
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </>
        ) : (
          <AddPetToNoticesBtnWrapper type="button" onClick={onButtonClick}>
            <AddPetToNoticesText>Add pet</AddPetToNoticesText>
            <AddPetToNoticesBtn>
              <AddPetToNoticesImg src={cross} alt="Add pet to notices" />
            </AddPetToNoticesBtn>
          </AddPetToNoticesBtnWrapper>
        )}
      </NoticesNavWrapper>
      <Suspense>
        <Outlet />
      </Suspense>
      <Toaster />
    </Container>
  );
};

export default NoticesPage;
