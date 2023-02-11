import { useDispatch } from 'react-redux';
import { useUser } from '../../redux/hooks';


import { NavLink } from "react-router-dom";
import {
  Wrapper, DivPhoto, Shadow, UserPhoto, ImgAvatar, Card, Btn, Span, Wrap, FormWrap, Form1, DivInput, Input, BtnInput, BtnLogOut } from './UserCard.styled';

import { Container } from "../../utils/reusable";
import { HiCamera } from "react-icons/hi2";
import { HiPencil } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { updateUserData } from '../../redux/user/operations';

import { Formik, useFormik } from 'formik';

//import { useEffect } from 'react';

//console.log(getUserData());


 //import {logout} from "../../redux/auth/authSlice"
// ===============================================
// logOutBtn
     
  //   const dispatch = useDispatch()
    
  //   const onLogOutHandler = () = {
      
  //     dispatch(logout())  
  //   }

  //  onClick={onLogOutHandler}
  // ===============================================


const UserCard = () => {
 //=========for avatar============
   
  const dispatch = useDispatch();
  const userPhoto = useUser();
    //const userData = useSelector(selectUserData);//достать данные после auth
  
    const onChangeHandler = e => {
    const formData = new FormData();
      formData.append('avatar', e.target.files[0]);
      console.log(e.target.files)
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
  
//   useEffect(() => {
//    dispatch(getUserData())
//  },[dispatch])

    return (

        <NavLink to="/user">
           
            <Container>
                <Card>
                    <Wrapper>
                    <DivPhoto>
                        <Shadow>
                      {userPhoto ? (
                            <UserPhoto src={userPhoto} alt="photo" />
                        ) : (<ImgAvatar src={HiCamera} alt=""/>)}
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
            <DivInput>
            <label display="block" textDecoration="none" align-content="flex-start">
                                    
              Name:
              <Input 
                    name="name"
                    type="name"
                    placeholder="Name:"
                    onChange={formik.handleChange}
                    value={formik.values.name} />
            
            </label>
            <BtnInput ><HiPencil color="rgba(17, 17, 17, 0.6)"/></BtnInput>
            </DivInput>
            
            <DivInput>               
            <label>
              Email:
            <Input
                    name="email"
                    type="email"
                    placeholder="xxxx00@gmail.com"
                    onChange={formik.handleChange}
                    value={formik.values.email} />
            </label>
            <BtnInput ><HiPencil color="rgba(17, 17, 17, 0.6)"/></BtnInput>
            </DivInput> 
                            
            <DivInput>
            <label>
              Birthday: 
            <Input name="Birthday:"
                    
                   placeholder="00.00.0000"
               />
            </label>
            <BtnInput ><HiPencil color="rgba(17, 17, 17, 0.6)"/></BtnInput>        
            </DivInput>                
                            
            <DivInput>
            <label>
              Phone:
            <Input name="mobilePhone"
                    type="text"
                    placeholder="+38000000000"
                    onChange={formik.handleChange}
                    value={formik.values.mobilePhone}/>                              
                                       
            </label>
            <BtnInput ><HiPencil color="rgba(17, 17, 17, 0.6)"/></BtnInput>
            </DivInput>                
                            
            <DivInput>
            <label>
              City:
            <Input  name="city"
                    type="text"
                    placeholder="City, region"
                    onChange={formik.handleChange}
                    value={formik.values.city}/>
                                                
            </label>
            <BtnInput ><HiPencil color="rgba(17, 17, 17, 0.6)"/></BtnInput>                   
            </DivInput>                

            
          </Form1>
        
        </Formik>
                 
            </FormWrap>
            
            <BtnInput><HiPencil color="rgba(17, 17, 17, 0.6)" /></BtnInput>
            
            {/* <BtnInput type="submit" color="#F59256"><HiPencil/></BtnInput> */}
            
            
            <BtnLogOut>
              <FiLogOut color="#F59256" />Log Out
            </BtnLogOut>
        </Card>

            </Container>
        </NavLink>

       
    )
};

export default UserCard;