import React from 'react';
import { PageTitle } from './FriendsContainer.styled';

const FriendsContainer = ({ children }) => {
  return (
    <>
      <PageTitle>Our Friends</PageTitle>
      {children}
    </>
  );
};

export default FriendsContainer;
