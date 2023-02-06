import { NavLink } from "react-router-dom";


export const AuthMenu = () => {
    return (
        <ul>
            <li>
                <NavLink>
                    Login
                </NavLink>
            </li>
            <li>
                <NavLink>
                    Registration
                </NavLink>
            </li>
        </ul>
    )
};