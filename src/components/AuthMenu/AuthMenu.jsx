import { NavLink } from "react-router-dom";
import { Button, Sp, User } from "./AuthMenu.styled";


const AuthMenu = () => {
    return (
        <User>
            <Button>
                <NavLink to="/login">
                <Sp>Login</Sp>
                </NavLink>
            </Button>
            <Button>
                <NavLink to="/register">
                <Sp>Registration</Sp>
                </NavLink>
            </Button>
        </User>
    )
};

export default AuthMenu;