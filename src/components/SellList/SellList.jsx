import {} from './SellList.styled';
import NoticesContainer from '../NoticesContainer/NoticesContainer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { sell } from '../../redux/notices/operations';
import { useNotices } from '../../redux/hooks';

export const SellList = () => {
  // const dispatch = useDispatch();
  // const { sellNotices } = useNotices();
  // useEffect(() => {
  //   dispatch(sell());
  // }, [dispatch]);

  // return (
  //   <>
  //     <NoticesContainer
  //       pets={sellNotices}
  //       {
  //         ...{
  //           // firstName,
  //           // setFirstName,
  //           // pets,
  //         }
  //       }
  //     />
  //   </>
  // );
};
