import {} from './InGoodHandsList.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { search } from 'redux/notices/operations';
import { goodHands } from 'redux/notices/operations';
import { useDispatch } from 'react-redux';
import { NoticesContainer } from 'components/NoticesContainer/NoticesContainer';
import {
  NoticesSearch,
  SearchField,
  NoticesNavLink,
  NoticesNavText,
  NoticesNavLi,
  NoticesNavUl,
  AddPetToNoticesBtn,
  AddPetToNoticesImg,
  AddPetToNoticesText,
  NoticesNavWrapper,
  AddPetToNoticesBtnWrapper,
} from 'pages/NoticesPage.styled';
import cross from 'utils/svg/cross.svg';
export const InGoodHandsList = () => {
  const [firstName, setFirstName] = useState('');
  const [pets, setPets] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getTrendingHttp = async () => {
      try {
        const response = await dispatch(goodHands()).then(responseHttp => {
          return responseHttp;
        });
        console.log(response);
        setPets([...response.payload]);
      } catch (error) {
        console.error(error);
      }
    };
    getTrendingHttp();
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
           <NoticesNavLi>
             <NoticesNavLink to="favorite-ads">
               <NoticesNavText>favorite ads</NoticesNavText>
             </NoticesNavLink>
           </NoticesNavLi>
           <NoticesNavLi>
             <NoticesNavLink to="my-ads">
               <NoticesNavText>my ads</NoticesNavText>
             </NoticesNavLink>
           </NoticesNavLi>
         </NoticesNavUl>
         <AddPetToNoticesBtnWrapper>
           <AddPetToNoticesText>Add pet</AddPetToNoticesText>
           <AddPetToNoticesBtn to="">
             <AddPetToNoticesImg src={cross} alt="Add pet to notices" />
           </AddPetToNoticesBtn>
         </AddPetToNoticesBtnWrapper>
       </NoticesNavWrapper>
       <NoticesContainer
         {...{
           firstName,
           setFirstName,
           pets,
         }}
       />
       <Suspense>
         <Outlet />
       </Suspense>
     </>
   );
};
