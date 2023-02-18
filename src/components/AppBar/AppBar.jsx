import { useState } from 'react';
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
} from './AppBar.styled';

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleClickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const { isLoggedIn } = useAuth();
  return (
    <Container>
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
        </TabletWrapper>
      </BarContainer>
    </Container>
  );
};

export default AppBar;
