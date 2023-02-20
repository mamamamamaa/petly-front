// import { useDispatch, useSelector } from "react-redux";
// import {search} from '../../redux/notices/operations';
// import { useState } from "react";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// // import { useFilter } from "redux/hooks";
// // import { getFilterValue } from "../../redux/hooks";
// import {useNotices} from '../../redux/hooks';
// import {NoticesContainer} from '../NoticesContainer/NoticesContainer';



// export const SearchNoticeList = () => {

//   // const dispatch = useDispatch();
 
//   const { pathname } = useLocation();

//   const filter = useSelector(useNotices).getFilterValue;
//   // console.log(filter);
//   console.log(filter);

//   const allNotices = useSelector(useNotices);

//   // useEffect(() => {
//   //   console.log(filter);
//   // }, [filter])
  

//   let  notices;

//     switch (pathname) {
//       case '/notice/sell':
//         notices = allNotices.sellNotices;
//         break;

//       case '/notice/good-hands':
//         notices = allNotices.goodHandsNotices;
//         break;

//       case '/notice/lost':
//         notices = allNotices.lostFoundNotices;
//         break;

//       case '/notice/favorite':
//         notices = allNotices.favoriteNotices;
//         break;

//       case '/notice/my-ads':
//         notices = allNotices.myAdsNotices;
//         break;
    
//       default:
//         break;
//     };

//   // console.log(notices);

  
//   const filteredNotices = (notices) => {
//     // if (filterValue === "") {
//     //   return notices;
//     // } else {
//       const normalizedFilter = filter.toLowerCase();

//       return notices.filter((notice) =>
//         notice.title.toLowerCase().includes(normalizedFilter)
//       );
//     // }
//   };

//   const pets = filteredNotices(notices);
//   console.log(pets);

//   return (
//     <>
//       <NoticesContainer pets={pets} />
//     </>
//   );
// }