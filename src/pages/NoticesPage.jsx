import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { search } from 'redux/notices/operations';
import { useNavigate } from 'react-router-dom';
// import { sell } from 'redux/notices/operations';
import { useDispatch } from 'react-redux';
import { NoticesContainer } from 'components/NoticesContainer/NoticesContainer';
import { SearchNoticeList } from 'components/SearchNoticeList/SearchNoticeList';
import { useFilter } from '../redux/hooks';
import { filterNotices } from 'redux/notices/noticeSlice';
import {
  Form,
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

  // const navigate = useNavigate();
  // const goToSearch = () => navigate('/search-ads');
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    setFilter(event.currentTarget.value);
    console.log(filter);
};

  useEffect(() => {
    dispatch(filterNotices(filter));
    // console.log(filterNotices(filter));
  },[filter, dispatch]);

  
  
 
  // const {filterValue} = useFilter;
  // console.log(filterValue);


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   goToSearch();
  //   // dispatch(firstName);
  //   console.log('submit');
  // }
  
  // useEffect(() => {
    // const getTrendingHttp = async () => {
    //   try {
    //     const response = await dispatch(search(firstName)).then(
    //       responseHttp => {
    //         return responseHttp;
    //       }
    //     );
    //     // console.log(response);
    //     setPets([...response.payload]);
    //     console.log(pets);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // getTrendingHttp();
  // }, [firstName, dispatch]);

  return (
      <Container>
        <NoticesSearch>
        <SearchField
          placeholder="Search"
          value={filter}
          onChange={handleFilterChange}
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
      
        {/* {filter !== '' ? (
         <SearchNoticeList/>
          )
          : ( */}
          <Suspense>
           <Outlet />
         </Suspense>
         {/* )} */}
      <Toaster />
    </Container>
  );
};

export default NoticesPage;
