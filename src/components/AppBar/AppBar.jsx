import { useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import { useAuth } from '../../redux/hooks';
import Navigation from '../Navigation/Navigation';
import AuthMenu from '../AuthMenu/AuthMenu';
import UserMenu from '../UserMenu/UserMenu';
import { BurgerIcon } from '../../utils/svg/burgerBtn';
import {
  BarContainer,
  LogoBlack,
  LogoAccent,
  MenuWrpr,
  UserMenuWrpr,
  BurgerBtn,
  Nav,  
  HomePageLink,
  Btn,
  ImgBtn,
  Lang,
  Line
} from './AppBar.styled';

import UKR from '../../images/UKR.png';
import GB from '../../images/GB.png';
import { Modal } from 'components/ModalMenu/ModalMenu';

const AppBar = ({ handleLocaleChange }) => {  
 
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  
  const [showModal, setShowModal] = useState(false);

  const closeMenu = () => {
    setShowModal(false);
  };

  const toggleClickHandler = () => {
    setShowModal(!showModal);
  };

  const { isLoggedIn } = useAuth();
  return (
    <> {isDesktop && (
      <BarContainer>
        <LogoBlack>
          <HomePageLink to="/">
            pe<LogoAccent>t</LogoAccent>ly
          </HomePageLink>
        </LogoBlack>
            <Nav>
              <Navigation/>
            </Nav>

            <UserMenuWrpr>
              {isLoggedIn ? (
                <UserMenu/>
              ) : (
                <AuthMenu/>
              )}
        </UserMenuWrpr>
        <Lang>
             <Btn onClick={() => handleLocaleChange('en')}>
               <ImgBtn src={GB} width="25" height="25" alt="Great Britan flag" />
               <Line/></Btn>
             <Btn onClick={() => handleLocaleChange('uk')}>
              <ImgBtn src={UKR} width="25" height ="25" alt="flag Ukraine"/></Btn>            
           </Lang> 
      </BarContainer>
    )}

    {isMobile && !showModal && (  
      <BarContainer>
       <LogoBlack><HomePageLink to="/" onClick={closeMenu}>pe
        <LogoAccent>t</LogoAccent>ly
        </HomePageLink>
          </LogoBlack>
          <Lang>
             <Btn onClick={() => handleLocaleChange('en')}>
               <ImgBtn src={GB} width="25" height="25" alt="Great Britan flag" />
               <Line/></Btn>
             <Btn onClick={() => handleLocaleChange('uk')}>
              <ImgBtn src={UKR} width="25" height ="25" alt="flag Ukraine"/></Btn>            
           </Lang> 
       <BurgerBtn 
           onClick={toggleClickHandler}>
            <BurgerIcon />
          </BurgerBtn>          
      </BarContainer>
    )}


    {isMobile && showModal && (
       <Modal onClose={closeMenu}>
       <MenuWrpr isClosed={!showModal}>
         <Nav isClosed={!showModal}>
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
       </Modal>
    )}

    {isTablet && !showModal && (
      <BarContainer>
       <LogoBlack><HomePageLink to="/" onClick={closeMenu}>pe
        <LogoAccent>t</LogoAccent>ly
        </HomePageLink>
       </LogoBlack>
       <BurgerBtn 
           onClick={toggleClickHandler}>
            <BurgerIcon />
          </BurgerBtn>
          <UserMenuWrpr>
              {isLoggedIn ? (
                <UserMenu close={closeMenu} />
              ) : (
                <AuthMenu close={closeMenu} />
              )}
            </UserMenuWrpr>          
        
           <Lang>
             <Btn onClick={() => handleLocaleChange('en')}>
               <ImgBtn src={GB} width="25" height="25" alt="Great Britan flag" />
               <Line/></Btn>
             <Btn onClick={() => handleLocaleChange('uk')}>
              <ImgBtn src={UKR} width="25" height ="25" alt="flag Ukraine"/></Btn>            
           </Lang>        

      </BarContainer>
    )}


    {isTablet && showModal && (
      <Modal onClose={closeMenu}>
    <MenuWrpr isClosed={!showModal}>
      <Nav isClosed={!showModal}>
        <Navigation close={closeMenu} />
      </Nav>
    </MenuWrpr>
    </Modal>
    )}
    </>
  );
};

export default AppBar;
