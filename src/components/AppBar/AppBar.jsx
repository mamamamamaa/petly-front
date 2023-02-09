import { useState } from "react";
import { useAuth } from "../../redux/hooks";
import Navigation from "../Navigation/Navigation";
import AuthMenu from "../AuthMenu/AuthMenu";
import UserMenu from "../UserMenu/UserMenu";
import { BurgerIcon } from "../reusable/svg/burgerBtn";
import { CloseIcon } from "../reusable/svg/close";

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
    console.log(isMenuOpen);
    const ToggleClickHandler = () => {
      setIsMenuOpen(!isMenuOpen);
    }

    const { isLoggedIn } = useAuth();
    return (
        <BarContainer>
            <LogoBlack>pe<LogoAccent>t</LogoAccent>ly</LogoBlack>
                <TabletWrapper>
                <BurgerBtn onClick={ToggleClickHandler}>
                    {!isMenuOpen ? <BurgerIcon/> : <CloseIcon/>}
                </BurgerBtn>
                
                <MenuWrpr isClosed={!isMenuOpen}>
                    <Nav isClosed={!isMenuOpen}>
                        <Navigation/>
                    </Nav>
                    <UserMenuWrpr>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</UserMenuWrpr>
                </MenuWrpr>
                </TabletWrapper>
                
        </BarContainer>
    )
};

export default AppBar;