import { UserLink, Text } from "./UserMenu.styled";
import { AccountIcon } from "../../utils/svg/account";
import { FormattedMessage } from 'react-intl';


const UserMenu = ({close}) => {
    return (
        <UserLink to="/user"  onClick={close}>
            <AccountIcon/> 
            <Text><FormattedMessage id="account"/></Text>
        </UserLink>
    )
};

export default UserMenu;