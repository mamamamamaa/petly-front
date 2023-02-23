import React from 'react';
import { MainHeader } from '../../../pages/NewsPage.styled';

const FriendsContainer = ({ children }) => {
  return (
    <>
      <MainHeader>Our Friends</MainHeader>
      {children}
    </>
  );
};

export default FriendsContainer;
