import NoticesContainer from '../NoticesContainer/NoticesContainer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { myAds } from '../../redux/notices/operations';
import { useNotices } from '../../redux/hooks';

export const MyAdsList = () => {
  const dispatch = useDispatch();
  const { myAdsNotices } = useNotices();
  useEffect(() => {
    dispatch(myAds());
  }, [dispatch]);

  return (
    <>
      <NoticesContainer pets={myAdsNotices} />
    </>
  );
};
