import NoticesContainer from '../NoticesContainer/NoticesContainer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { favorite } from '../../redux/notices/operations';
import { useNotices } from '../../redux/hooks';

export const FavoriteList = () => {
  const dispatch = useDispatch();
  const { favoriteNotices } = useNotices();
  useEffect(() => {
    dispatch(favorite());
  }, [dispatch]);

  return (
    <>
      <NoticesContainer pets={favoriteNotices} />
    </>
  );
};
