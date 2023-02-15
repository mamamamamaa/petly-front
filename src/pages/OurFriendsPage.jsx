import { Container } from 'utils';
import React from 'react';
import FriendsContainer from '../components/OurFriends/FriendsContainer/FriendsContainer';
import FriendsList from '../components/OurFriends/FriendsList/FriendsList';

const OurFriendsPage = () => {
  return (
    <Container>
    <FriendsContainer>
      <FriendsList />
    </FriendsContainer>
    </Container>
  );
};

export default OurFriendsPage;
