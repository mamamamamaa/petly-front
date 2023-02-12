import {} from './InGoodHandsList.styled';
import { useDispatch } from 'react-redux';
import { useNotices } from '../../redux/hooks';
import { useEffect } from 'react';
import NoticesContainer from '../NoticesContainer/NoticesContainer';
import { goodHands } from '../../redux/notices/operations';

export const InGoodHandsList = () => {
  const dispatch = useDispatch();
  const { goodHandsNotices } = useNotices();
  useEffect(() => {
    dispatch(goodHands());
  }, [dispatch]);

  return (
    <>
      <NoticesContainer pets={goodHandsNotices} />
    </>
  );
};
