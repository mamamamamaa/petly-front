// import { NavLink } from "react-router-dom";
// import { useAuth } from "../../redux/hooks";
import { Nav,
    NavList,
    NavListItem,
    NavigLink
} from "./Navigation.styled";


const Navigation = () => {
    // const { isLoggedIn } = useAuth();
    return (
        <Nav>
            <NavList>
                <NavListItem>
                    <NavigLink
                    to="/news"
        
                     >
                     News
                    </NavigLink>
                </NavListItem>
                <NavListItem>
                    <NavigLink
                    // Specify the route?
                    to="/notice/sell"
        
                     >
                     Find pet
                    </NavigLink>
                </NavListItem>
                <NavListItem>
                    <NavigLink
                    to="/friends"
        
                     >
                     Our friends
                    </NavigLink>
                </NavListItem>
            </NavList>
        </Nav>
    )
};

export default Navigation;