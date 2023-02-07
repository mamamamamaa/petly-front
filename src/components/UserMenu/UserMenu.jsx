import { NavLink } from "react-router-dom";



const UserMenu = () => {
    return (
        <NavLink to="/user">
            <svg><use href="../reusable/svg/account.svg"></use></svg> Account
        </NavLink>
    )
};

export default UserMenu;