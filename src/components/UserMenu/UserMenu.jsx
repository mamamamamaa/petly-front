import { UserLink, Text } from "./UserMenu.styled";
import { AccountIcon } from "../../utils/svg/account";



const UserMenu = ({close}) => {
    return (
        <UserLink to="/user"  onClick={close}>
            <AccountIcon/> 
            <Text>Account</Text>
        </UserLink>
    )
};

export default UserMenu;