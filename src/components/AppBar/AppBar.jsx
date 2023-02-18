import { useState } from "react";
import { useAuth } from "../../redux/hooks";
import Navigation from "../Navigation/Navigation";
import AuthMenu from "../AuthMenu/AuthMenu";
import UserMenu from "../UserMenu/UserMenu";
import { BurgerIcon } from "../../utils/svg/burgerBtn";
import { CloseIcon } from "../../utils/svg/close";
import { Container } from "utils";
import {BarContainer,
        LogoBlack,
        LogoAccent,
        LogoMenu,
        MenuWrpr,
        MenuMobWrpr,
        UserMenuWrpr,
        UserMenuWrprMob,
        BurgerBtn,
        BurgerMenuBtn,
        Nav,
        NavMob,
        TabletWrapper,
        HomePageLink
} from "./AppBar.styled";


const AppBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleClickHandler = () => {
      setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }


    const { isLoggedIn } = useAuth();
    return (
        <Container>
        <BarContainer>
            <LogoBlack><HomePageLink to="/" onClick={closeMenu}>pe<LogoAccent>t</LogoAccent>ly</HomePageLink></LogoBlack>
                <TabletWrapper>
                <BurgerBtn onClick={toggleClickHandler}>
                    {!isMenuOpen ? <BurgerIcon/> : <CloseIcon/>}
                </BurgerBtn>
                <MenuWrpr isClosed={!isMenuOpen}>
                    <Nav isClosed={!isMenuOpen}>
                        <Navigation close={closeMenu} />
                    </Nav>
                    <UserMenuWrpr>{isLoggedIn ?
                         <UserMenu close={closeMenu} /> 
                        : <AuthMenu close={closeMenu} />}
                    </UserMenuWrpr>
                </MenuWrpr>
                </TabletWrapper>
        </BarContainer>

        {/* <MenuMobWrpr isClosed={!isMenuOpen}>
        <LogoMenu><HomePageLink to="/" onClick={closeMenu}>pe<LogoAccent>t</LogoAccent>ly</HomePageLink></LogoMenu>
                    <BurgerMenuBtn onClick={toggleClickHandler}>
                             {!isMenuOpen ? <BurgerIcon/> : <CloseIcon/>}
                    </BurgerMenuBtn>
                    <NavMob isClosed={!isMenuOpen}>
                        <Navigation close={closeMenu} />
                    </NavMob>
                    <UserMenuWrprMob>{isLoggedIn ?
                         <UserMenu close={closeMenu} /> 
                        : <AuthMenu close={closeMenu} />}
                    </UserMenuWrprMob>
                    
        </MenuMobWrpr> */}

        </Container>
    )
};

export default AppBar;