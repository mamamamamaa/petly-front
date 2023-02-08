
import { useAuth } from "../../redux/hooks";
import Navigation from "../Navigation/Navigation";
import AuthMenu from "../AuthMenu/AuthMenu";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <div>
            <span>pe<span>t</span>ly</span>
            <Navigation />
            <div>{isLoggedIn ? <UserMenu /> : <AuthMenu />}</div>
        </div>
    )
};

export default AppBar;