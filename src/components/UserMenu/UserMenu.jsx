import { useDispatch } from 'react-redux';


import { NavLink } from "react-router-dom";
import {
    Wrapper,
    DivPhoto,
    Shadow,
    UserPhoto,
    Card,
    Btn,
    Span,
    Wrap,
    Title,
    FormWrap,
    Form1,
    Input,
    BtnInput
} from './UserMenu.styled';

import { Container } from "../../utils/reusable";
import { HiCamera } from "react-icons/hi2";
import {HiPencil} from "react-icons/hi"
import { updateUserData } from '../../redux/user/operations';

import { Formik,  useFormik } from 'formik';

const UserMenu = () => {
//const selectUserAvatar = state => state.user.avatarUrl;   
const  dispatch = useDispatch();
//const userPhoto = useSelector(selectUserAvatar)

    const onChangeHandler = e => {
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);
    dispatch(updateUserData(formData));
  };
//////формик 
    const onSubmit = values => {
    const { name, email, birthday, mobilePhone, city } = values;
        dispatch(
        ///// проверить на birthday updateUserData
      updateUserData({
        name,
        email,
        birthday,
        mobilePhone,
        city,
      }),
     
    );
  };
    
    
    
    
    const formik = useFormik({
    initialValues: {
      name: '',
      email: '',      
      Birthday: '',
      mobilePhone: '',
      city: '',
    },onSubmit,
  });


    return (
        <NavLink to="/user">
            {/* <svg></svg> Account */}
            <Title>My information:</Title>
            <Container>
                <Card>
                    <Wrapper>
                    <DivPhoto>
                        <Shadow>
                    <UserPhoto/>  {/* {userPhoto ? (
                            <UserPhoto src={userPhoto} alt="photo" />
                        ) : (<img alt=""/>)} */}
                    </Shadow></DivPhoto>
                    <Btn>
                       <label htmlFor="photo_uploads">
                    <Wrap>
                        {' '}
                    <HiCamera color="#F59256" width="20" height="20" />
                    <Span>Edit photo</Span>
                    </Wrap>
                    </label> 
                    
                    
                    <input
                        id="photo_uploads"
                        type="file"
                        name="photo_uploads"
                        
                        style={{ opacity: 0, width: 0, height: 0 }} 
                       onChange={onChangeHandler}
                    />
                    </Btn></Wrapper>
                    
            <FormWrap>      
            <Formik onSubmit={formik.handleSubmit}>           
         
            <Form1>
            <div>
            <label display="block" textDecoration="none" align-content="flex-start">
                                    
              Name
              <Input 
                    name="name"
                    type="name"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.name} />
            <BtnInput ><HiPencil color="#F59256"/></BtnInput>
            </label>
            
            </div>
            
            <div>               
            <label>
              Email
            <Input
                    name="email"
                    type="email"
                    placeholder="xxxx00@gmail.com"
                    onChange={formik.handleChange}
                    value={formik.values.email} />
            </label>
            </div> 
                            
            <div>
            <label>
              Birthday: 
            <Input name="Birthday:"
                    
                   placeholder="00.00.0000"
               />
            </label>
            </div>                
                            
            <div>
            <label>
              Phone:
            <Input name="mobilePhone"
                    type="text"
                    placeholder="+38000000000"
                    onChange={formik.handleChange}
                    value={formik.values.mobilePhone}/>                              
                                       
            </label>
            </div>                
                            
            <div>
            <label>
              City:
            <Input  name="city"
                    type="text"
                    placeholder="City, region"
                    onChange={formik.handleChange}
                    value={formik.values.city}/>
                                                
            </label>
             <label>
              <Input type="radio" name="picked" value="HiPencil"/>
              <HiPencil color="#F59256"/>
            </label>                       
            </div>                

            <BtnInput type="submit">Submit</BtnInput>
          </Form1>
        
        </Formik>
                 
        </FormWrap>
                    {/* <BtnInput type="submit" color="#F59256"><HiPencil/></BtnInput> */}
        <button></button>
        </Card>

            </Container>
        </NavLink>
    )
};

export default UserMenu;