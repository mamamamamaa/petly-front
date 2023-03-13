import { useState, useEffect } from 'react';
import { useAuth } from '../../redux/hooks';
import Navigation from '../Navigation/Navigation';
import AuthMenu from '../AuthMenu/AuthMenu';
import UserMenu from '../UserMenu/UserMenu';
import { BurgerIcon } from '../../utils/svg/burgerBtn';
import { CloseIcon } from '../../utils/svg/close';
import { Container } from 'utils';
import {
  BarContainer,
  LogoBlack,
  LogoAccent,
  MenuWrpr,
  UserMenuWrpr,
  BurgerBtn,
  Nav,
  TabletWrapper,
  HomePageLink,
  Btn,
  ImgBtn
} from './AppBar.styled';
import { ContainerHeader } from '../Layout/Layout.styled';
import UKR from '../../images/UKR.png';
import GB from '../../images/GB.png';

const AppBar = ({ handleLocaleChange }) => {  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleClickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  

  const { isLoggedIn } = useAuth();
  return (
    <ContainerHeader>
      <BarContainer>
        <LogoBlack>
          <HomePageLink to="/" onClick={closeMenu}>
            pe<LogoAccent>t</LogoAccent>ly
          </HomePageLink>
        </LogoBlack>
        <TabletWrapper>
          <BurgerBtn onClick={toggleClickHandler}>
            {!isMenuOpen ? <BurgerIcon /> : <CloseIcon />}
          </BurgerBtn>
          <MenuWrpr isClosed={!isMenuOpen}>
            <Nav isClosed={!isMenuOpen}>
              <Navigation close={closeMenu} />
            </Nav>
            <UserMenuWrpr>
              {isLoggedIn ? (
                <UserMenu close={closeMenu} />
              ) : (
                <AuthMenu close={closeMenu} />
              )}
            </UserMenuWrpr>
          </MenuWrpr>
          <div>
            <Btn onClick={() => handleLocaleChange('uk')}>
              <ImgBtn src={UKR} width="25" height ="25" alt="flag Ukraine"/></Btn>
            <Btn onClick={() => handleLocaleChange('en')}>
              <ImgBtn src={GB} width="25" height ="25" alt="flag Ukraine"/></Btn>
          </div>
        </TabletWrapper>
      </BarContainer>
    </ContainerHeader>
  );
};

export default AppBar;
