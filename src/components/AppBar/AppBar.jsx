import { useState } from "react";
import { useAuth } from "../../redux/hooks";
import Navigation from "../Navigation/Navigation";
import AuthMenu from "../AuthMenu/AuthMenu";
import UserMenu from "../UserMenu/UserMenu";
import { BurgerIcon } from "../../utils/svg/burgerBtn";
import { CloseIcon } from "../../utils/svg/close";

import {BarContainer,
        LogoBlack,
        LogoAccent,
        MenuWrpr,
        UserMenuWrpr,
        BurgerBtn,
        Nav,
        TabletWrapper
} from "./AppBar.styled";


const AppBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleClickHandler = () => {
      setIsMenuOpen(!isMenuOpen);
    }

    const { isLoggedIn } = useAuth();
    return (
        <BarContainer>
            <LogoBlack>pe<LogoAccent>t</LogoAccent>ly</LogoBlack>
                <TabletWrapper>
                <BurgerBtn onClick={toggleClickHandler}>
                    {!isMenuOpen ? <BurgerIcon/> : <CloseIcon/>}
                </BurgerBtn>
                
                <MenuWrpr isClosed={!isMenuOpen}>
                    <Nav isClosed={!isMenuOpen}>
                        <Navigation close={toggleClickHandler}/>
                    </Nav>
                    <UserMenuWrpr>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</UserMenuWrpr>
                </MenuWrpr>
                </TabletWrapper>
                
        </BarContainer>
    )
};

export default AppBar;