import {
    NavList,
    NavListItem,
    NavigLink
} from "./Navigation.styled";


const Navigation = () => {

    return (
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
    )
};

export default Navigation;