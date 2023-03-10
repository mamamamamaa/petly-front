import debounce from 'lodash.debounce';
import { Suspense, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
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
import { MainHeader } from './NewsPage.styled';
import { useIntl } from 'react-intl';
import { FormattedMessage } from 'react-intl';

const NoticesPage = () => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  const onButtonClick = () => {
    !isLoggedIn
      ? toast.error(
          'Dear friend, please sign up or log in to add your pet to notice'
        )
      : setIsModalOpen(true);
  };

  useEffect(() => {
    ref.current.value = '';
  }, [location]);

  const handleChangeQuery = e => dispatch(setQuery(e.target.value));

  return (
    <Container type="notice">
      <MainHeader><FormattedMessage id="findFavoritePet"/></MainHeader>
      <NoticesSearch>
        <SearchField
          ref={ref}
          placeholder={formatMessage({ id: 'search' })}
          onChange={debounce(handleChangeQuery, 300)}
        />
      </NoticesSearch>

      <NoticesNavWrapper>
        <NoticesNavUl>
          <NoticesNavLi>
            <NoticesNavLink to="sell">
              <NoticesNavText><FormattedMessage id="sell"/></NoticesNavText>
            </NoticesNavLink>
          </NoticesNavLi>
          <NoticesNavLi>
            <NoticesNavLink to="lost">
              <NoticesNavText><FormattedMessage id="lostFound"/></NoticesNavText>
            </NoticesNavLink>
          </NoticesNavLi>
          <NoticesNavLi>
            <NoticesNavLink to="good-hands">
              <NoticesNavText><FormattedMessage id="goodHands"/></NoticesNavText>
            </NoticesNavLink>
          </NoticesNavLi>
          {isLoggedIn && (
            <NoticesNavLi>
              <NoticesNavLink to="favorite">
                <NoticesNavText><FormattedMessage id="favorite"/></NoticesNavText>
              </NoticesNavLink>
            </NoticesNavLi>
          )}
          {isLoggedIn && (
            <NoticesNavLi>
              <NoticesNavLink to="my-ads">
                <NoticesNavText><FormattedMessage id="myAds"/></NoticesNavText>
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
            <AddPetToNoticesText><FormattedMessage id="addPet"/></AddPetToNoticesText>
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
