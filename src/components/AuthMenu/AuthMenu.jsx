import { Button, Sp, User, NavigLink } from "./AuthMenu.styled";


const AuthMenu = () => {
    return (
        <User>
            <Button>
                <NavigLink to="/login">
                <Sp>Login</Sp>
                </NavigLink>
            </Button>
            <Button>
                <NavigLink to="/register">
                <Sp>Registration</Sp>
                </NavigLink>
            </Button>
        </User>
    )
};

export default AuthMenu;
