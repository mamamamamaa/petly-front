import { useDispatch, useSelector } from 'react-redux';


import { NavLink } from "react-router-dom";
import { UserPhoto, Card, Btn, Span, Wrap} from './UserMenu.styled';
import { Container } from "../../utils/reusable";
import { updateUserData } from '../../redux/user/operations';


const UserMenu = () => {
  const  dispatch = useDispatch();
const userPhoto = useSelector()

    const onChangeHandler = e => {
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);
    dispatch(updateUserData(formData));
  };



    return (
        <NavLink to="/user">
            <svg></svg> Account
            <Container>
                <Card>
                    <div>
                        {userPhoto ? (
                            <UserPhoto src={userPhoto} alt="photo" />
                        ) : (<img alt=""/>)}
                    </div>
                    <Btn>
                       <label htmlFor="photo_uploads">
                        <Wrap>
                        {' '}
                    {/* <Icon width="20" height="20" /> */}
                    <Span>Edit photo</Span>
                    </Wrap>
                    </label> 
                    </Btn>
                    <input
                        type="file"
                        name="photo_uploads"
                        style = {{width: 10, heigh: 10}}
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