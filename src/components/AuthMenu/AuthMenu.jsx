import { Button, Sp, User, NavigLink } from "./AuthMenu.styled";


const AuthMenu = ({close}) => {
    return (
        <User>
            <Button>
                <NavigLink to="/login"  onClick={close}>
                <Sp>Login</Sp>
                </NavigLink>
            </Button>
            <Button>
                <NavigLink to="/register"  onClick={close}>
                <Sp>Registration</Sp>
                </NavigLink>
            </Button>
        </User>
    )
};

export default AuthMenu;
