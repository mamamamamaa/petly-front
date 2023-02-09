import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import friendsSelectors from '../../../redux/friends/selectors';
import fetchFriends from '../../../redux/friends/operations';
import Spinner from '../../../components/Spinner/Spinner';
import Friend from '../Friend/Friend';

const { selectFriends, selectIsLoading } = friendsSelectors;

const FriendsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const friends = useSelector(selectFriends);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && <Spinner />}
      {friends.map(friend => (
        <li key={friend._id}>
          <Friend friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;
