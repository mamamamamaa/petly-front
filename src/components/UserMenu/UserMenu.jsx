import { useDispatch, useSelector } from 'react-redux';


import { NavLink } from "react-router-dom";
import { UserPhoto, Card, Btn, Span, Wrap} from './UserMenu.styled';
//import { Container } from "../../utils/reusable";


const UserMenu = ({}) => {
    dispatch = useDispatch();

    const onChangeHandler = e => {
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);
    dispatch(updateUserInfo(formData));
  };



    return (
        <NavLink to="/user">
            <svg></svg> Account
            <Container>
                <Card>
                    <div>
                        <UserPhoto
                        //добавить useSelector на аватар
                            alt="photo" />
                    </div>
                    <Btn>
                       <label htmlFor="image_uploads">
                        <Wrap>
                        {' '}
                    <Icon width="20" height="20" />
                    <Span>Edit photo</Span>
                    </Wrap>
                    </label> 
                    </Btn>
                    <input
                        type="file"
                        //style={ }
                        onChange={onChangeHandler}
                    />
                    <button></button>
                    <form></form>
                    <button></button>
                </Card>

            </Container>
        </NavLink>
    )
};

export default UserMenu;