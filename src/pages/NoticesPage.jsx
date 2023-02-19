import debounce from 'lodash.debounce';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  NoticesTitle,
  NoticesSearch,
  SearchField,
  NoticesNavLink,
  NoticesNavText,
  NoticesNavLi,
  NoticesNavUl,
  NoticesNavWrapper,
} from './NoticesPage.styled';
import {
  AddPetToNoticesBtn,
  AddPetToNoticesImg,
  AddPetToNoticesText,
  AddPetToNoticesBtnWrapper,
} from 'components/AddNoticeButton/AddNoticeButton.styled';
import cross from 'utils/svg/cross.svg';
import { useAuth } from '../redux/hooks';
import toast, { Toaster } from 'react-hot-toast';
import AddNoticeButton from '../components/AddNoticeButton/AddNoticeButton';
import { Container } from 'utils';
import { setQuery } from '../redux/notices/noticeSlice';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onButtonClick = () => {
    !isLoggedIn
      ? toast.error(
          'Dear friend, please sign up or log in to add your pet to notice'
        )
      : setIsModalOpen(true);
  };

  const handleChangeQuery = e => dispatch(setQuery(e.target.value));

  return (
      <Container>
        <NoticesTitle>
            Find your favorite pet
        </NoticesTitle>
        <NoticesSearch>
        <SearchField
          placeholder="Search"
          onChange={debounce(handleChangeQuery, 300)}
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
            <AddNoticeButton
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
