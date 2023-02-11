import { NavLink } from "react-router-dom";
// import { useAuth } from "../../redux/hooks";

const Navigation = () => {
    // const { isLoggedIn } = useAuth();
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                    to="/news"
        
                     >
                     News
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    // Specify the route?
                    to="/notice/sell"
        
                     >
                     Find pet
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/friends"
        
                     >
                     Our friends
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/user"
        
                     >
                     User
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;