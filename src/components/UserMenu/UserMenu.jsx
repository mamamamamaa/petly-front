import { UserLink, Text } from "./UserMenu.styled";
import { AccountIcon } from "../reusable/svg/account";



const UserMenu = () => {
    return (
        <UserLink to="/user">
            <AccountIcon/> 
            <Text>Account</Text>
        </UserLink>
    )
};

export default UserMenu;