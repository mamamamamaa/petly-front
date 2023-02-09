import { NavLink } from "react-router-dom";
import { UserLink, UserIcon } from "./UserMenu.styled";



const UserMenu = () => {
    return (
        <UserLink to="/user">
            <UserIcon/> Account
        </UserLink>
    )
};

export default UserMenu;