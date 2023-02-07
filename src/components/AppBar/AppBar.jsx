import { useAuth } from "../../redux/hooks";
import Navigation from "../Navigation/Navigation";
import AuthMenu from "../AuthMenu/AuthMenu";
import UserMenu from "../UserMenu/UserMenu";
import {BarContainer,
        LogoBlack,
        LogoAccent,
        MenuWrpr,
        UserMenuWrpr
} from "./AppBar.styled";

const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <BarContainer>
            <LogoBlack>pe<LogoAccent>t</LogoAccent>ly</LogoBlack>
                <MenuWrpr>
                    <Navigation />
                    <UserMenuWrpr>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</UserMenuWrpr>
                </MenuWrpr>
        </BarContainer>
    )
};

export default AppBar;