import {
    NavList,
    NavListItem,
    NavigLink
} from "./Navigation.styled";


const Navigation = ({close}) => {


    return (
            <NavList>
                <NavListItem>
                    <NavigLink
                    to="/news"
                    onClick={close}
                     >
                     News
                    </NavigLink>
                </NavListItem>
                <NavListItem>
                    <NavigLink
                    // Specify the route?
                    to="/notice/sell"
                    onClick={close}
                     >
                     Find pet
                    </NavigLink>
                </NavListItem>
                <NavListItem>
                    <NavigLink
                    to="/friends"
                    onClick={close}
                     >
                     Our friends
                    </NavigLink>
                </NavListItem>
            </NavList>
    )
};

export default Navigation;