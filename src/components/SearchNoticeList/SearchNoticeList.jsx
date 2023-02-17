import { useDispatch } from "react-redux";
import {search} from '../../redux/notices/operations';
import { useState } from "react";
import { useEffect } from "react";
import {NoticesContainer} from '../NoticesContainer/NoticesContainer';


export const SearchNoticeList = ({pets}) => {
//     const dispatch = useDispatch();

//     const [firstName, setFirstName] = useState('');
//   const [pets, setPets] = useState([]);

//   const handleFilterChange = e => {
//     console.log(e);
//     dispatch(setFirstName(e.target.value));
//     console.log(firstName);
//   };

  
//   useEffect(() => {
//     const getTrendingHttp = async () => {
//       try {
//         const response = await dispatch(search(firstName)).then(
//           responseHttp => {
//             return responseHttp;
//           }
//         );
//         console.log(response);
//         setPets([...response.payload]);
//         console.log(pets);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getTrendingHttp();
//   }, [firstName, dispatch]);

  return (
    <>
      <NoticesContainer pets={pets} />
    </>
  );
}