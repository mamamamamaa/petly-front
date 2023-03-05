import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import friendsSelectors from '../../../redux/friends/selectors';
import fetchFriends from '../../../redux/friends/operations';
import Spinner from '../../../components/Spinner/Spinner';
import Friend from '../Friend/Friend';
import { FriendsCard } from '../../../utils';
import { Modal } from '../../Modal/Modal';
import ListOurTeams from '../ListOurTeams/ListOurTeams';
import poster from '../../../utils/svg/easter-egg.png';
import { StyledList, Button, Title, Img } from './FriendsList.styled';

const { selectFriends, selectIsLoading } = friendsSelectors;

const FriendsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const friends = useSelector(selectFriends);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  // открытие и закрытие модального окна =======
  const [modal, setModal] = useState(false);
  const modalHandler = () => setModal(prevState => !prevState);
  // ===========================================

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modal]);

  return (
    <StyledList>
      {isLoading && <Spinner />}
      {modal && (
        <Modal onClose={modalHandler} className='OurTeam'>
          <ListOurTeams />
        </Modal>
      )}

      {friends.map(friend => (
        <FriendsCard key={friend._id}>
          <Friend friend={friend} />
        </FriendsCard>
      ))}
      <Button onClick={modalHandler}>
        <Title>push me ...</Title>
        <Img src={poster} alt="egg" />
      </Button>
    </StyledList>
  );
};

export default FriendsList;
