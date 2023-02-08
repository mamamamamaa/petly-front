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
        MenuContainer,
        UserMenuWrpr,
        BurgerBtn
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
                <BurgerBtn onClick={ToggleClickHandler}>
                    {!isMenuOpen ? <BurgerIcon/> : <CloseIcon/>}
                </BurgerBtn>
                <MenuWrpr>
                <MenuContainer>
                    <Navigation />
                    <UserMenuWrpr>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</UserMenuWrpr>
                </MenuContainer>
                </MenuWrpr>
        </BarContainer>
    )
};

export default AppBar;