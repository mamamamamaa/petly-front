import { NavLink } from "react-router-dom";
import { useAuth } from "../../redux/hooks";

export const Navigation = () => {
    // const { isLoggedIn } = useAuth();
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                    // to="/"
        
                     >
                     News
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    // to="/"
        
                     >
                     Find pet
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    // to="/"
        
                     >
                     Our friends
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};