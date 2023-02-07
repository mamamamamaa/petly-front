import { NavLink } from "react-router-dom";
import { UserPhoto, Card} from './UserMenu.styled';
import { Container } from "../../utils/reusable";


const UserMenu = () => {


    return (
        <NavLink to="/user">
            <svg></svg> Account
            <Container>
                <Card>
                    <UserPhoto />
                    <button></button>
                    <form></form>
                    <button></button>
                </Card>

            </Container>
        </NavLink>
    )
};

export default UserMenu;