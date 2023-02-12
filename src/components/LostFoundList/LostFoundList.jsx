import {} from './LostFoundList.styled';
import { useDispatch } from 'react-redux';
import { useNotices } from '../../redux/hooks';
import { useEffect } from 'react';
import NoticesContainer from '../NoticesContainer/NoticesContainer';
import { lostFound } from '../../redux/notices/operations';

export const LostFoundList = () => {
  const dispatch = useDispatch();
  const { lostFoundNotices } = useNotices();
  useEffect(() => {
    dispatch(lostFound());
  }, [dispatch]);

  return (
    <>
      <NoticesContainer pets={lostFoundNotices} />
    </>
  );
};
