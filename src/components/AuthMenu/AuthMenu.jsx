import { Button, Sp, User, NavigLink } from "./AuthMenu.styled";
import { FormattedMessage } from 'react-intl';

const AuthMenu = ({close}) => {
    return (
        <User>
            <Button>
                <NavigLink to="/login"  onClick={close}>
                <Sp><FormattedMessage id="login"/></Sp>
                </NavigLink>
            </Button>
            <Button>
                <NavigLink to="/register"  onClick={close}>
                <Sp><FormattedMessage id="registerBtn"/></Sp>
                </NavigLink>
            </Button>
        </User>
    )
};

export default AuthMenu;
