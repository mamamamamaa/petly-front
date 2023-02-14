
import { useDispatch } from 'react-redux';
import { useUser } from '../../redux/hooks';
import { useState } from 'react';
import {
  Title, Wrapper, DivPhoto, Shadow, UserPhoto, ImgAvatar, Card, Btn, Span, Wrap, FormWrap, Form1, DivInput, Input, BtnInput, BtnLogOut, NoAvatarContainer, FormLabel, InputAvatar, FormAndPhotoWrapper, LogOutSpan } from './UserCard.styled';
import { Container } from "../../utils/reusable";

import { HiCamera } from "react-icons/hi2";
import { HiPencil } from "react-icons/hi";
import { FiLogOut, FiCheck } from "react-icons/fi";
import { NoPhotoIcon } from 'utils/svg/noPhotoCross';
import { logout } from '../../redux/auth/operations';

import { updateUserData, getUserData } from '../../redux/user/operations';
import { Formik, useFormik } from 'formik';
import avatar from "../../images/avatart.jpg";

import { useEffect } from 'react';

console.log(getUserData());


const UserCard = () => {
    //=========for avatar============
  const [changeBtn, setChangeBtn] = useState(false);

  const handleClick = () => {
      setChangeBtn(!changeBtn)
  }
  
    const dispatch = useDispatch();
    const userPhoto = useUser();
    const {user}= useUser();

    
    //const {user} = useUser();//достать данные после auth
  console.log(getUserData)
  
    const onChangeHandler = e => {
        console.log("1111")
    const formData = new FormData();
      formData.append('avatar', e.target.files[0]);
      console.log(e.target.files)
    dispatch(updateUserData(formData));
    };
  
  
//////формик 
    const onSubmit = values => {
    const { name, email, birthday, phone, city } = values;
        dispatch(
        ///// проверить на birthday updateUserData
      updateUserData({
        name,
        email,
        birthday,
        phone,
        city,
      }),
     
    );
    };
   console.log(user)
    const formik = useFormik({
    initialValues: {
      name: user.name,      
      email: '',      
      Birthday: '',
      mobilePhone: '',
      city: '',
    },onSubmit,
    });
  

  useEffect(() => {
      dispatch(getUserData())
      console.log("getUserData")
 },[dispatch])

  const handleLogout = () => {
    dispatch(logout());
  };

    return (

        // <NavLink to="/user">
        // <Container>
  <div>
         <Title>My information:</Title> 
          <Card>
            <FormAndPhotoWrapper>
            <Wrapper>
               {/* <Shadow> */}
                    <DivPhoto>
                       
                      {userPhoto ? (
                            <UserPhoto src={userPhoto} 
                             width="233"
                             height="233"
                             alt="photo" />
                        ) : 
    
                        (<NoAvatarContainer><NoPhotoIcon/></NoAvatarContainer>)}
                     {/* </Shadow>  */}
                    </DivPhoto>
                    <Btn>
                       <label htmlFor="photo_uploads">
                    <Wrap >
                        {' '}
                    <HiCamera color="#F59256" width="20" height="20" />
                    <Span>Edit photo</Span>
                    </Wrap>
                    </label> 
                                        
                    <InputAvatar
                        onClick={onChangeHandler}        
                        id="photo_uploads"
                        type="file"
                        name="photo_uploads"
                        style={{  width: 0, height: 0 }}
                    />
                    </Btn>
                    </Wrapper>
            {/* <FormWrap>       */}
              <Formik onSubmit={formik.handleSubmit}>  

            <Form1>
            <DivInput>
            <FormLabel>                 
              Name:
              <Input 
                    name="name"
                    type="name"
                    placeholder="name"
                        onChange={formik.handleChange}
                        onClick ={handleClick}
                    value={formik.values.name} />
            
            </FormLabel>
            <BtnInput
                      type="button" onClick ={handleClick} >
                      {(changeBtn === true) ? <FiCheck color="#F59256"
                                               width="30" heigh="30"/> :
                                              <HiPencil color="rgba(17, 17, 17, 0.6);"
                                               width="30" heigh="30"/>}

                    </BtnInput>
            </DivInput>
            
            <DivInput>               
            <FormLabel>
              Email:
            <Input
                    id="name"
                    name="email"
                    type="email"
                    placeholder="email"
                        onChange={formik.handleChange}
                        onClick ={handleClick}
                    value={formik.values.email} />
            </FormLabel>
            <BtnInput
                      type="button" onClick ={handleClick} >
                      {(changeBtn === true) ? <FiCheck color="#F59256"
                                               width="30" heigh="30"/> :
                                              <HiPencil color="rgba(17, 17, 17, 0.6);"
                                               width="30" heigh="30"/>}

            </BtnInput>
            </DivInput> 
                            
            <DivInput>
            <FormLabel>
              Birthday: 
            <Input name="Birthday:"
                       type="text"
                        placeholder="00.00.0000"
               />
            </FormLabel>
            <BtnInput ><HiPencil color="rgba(17, 17, 17, 0.6)"/></BtnInput>        
            </DivInput>                
                            
            <DivInput>
            <FormLabel>
              Phone:
            <Input name="mobilePhone"
                    type="text"
                    placeholder="+38000000000"
                        onChange={formik.handleChange}
                        onClick ={handleClick}
                    value={formik.values.mobilePhone}/>                              
            </FormLabel>
            <BtnInput
                      type="button" onClick ={handleClick} >
                      {(changeBtn === true) ? <FiCheck color="#F59256"
                                               width="30" heigh="30"/> :
                                              <HiPencil color="rgba(17, 17, 17, 0.6);"
                                               width="30" heigh="30"/>}

            </BtnInput>
            </DivInput>                
                            
            <DivInput>
            <FormLabel>
              City:
            <Input  name="city"
                    type="text"
                    placeholder="City, region"
                        onChange={formik.handleChange}
                        onClick ={handleClick}
                    value={formik.values.city}/>
                                              
            </FormLabel>
            <BtnInput
                      type="button" onClick ={handleClick} >
                      {(changeBtn === true) ? <FiCheck color="#F59256"
                                               width="30" heigh="30"/> :
                                              <HiPencil color="rgba(17, 17, 17, 0.6);"
                                               width="30" heigh="30"/>}

            </BtnInput> 
            </DivInput>                

            
          </Form1>
        
        </Formik>
                 
            {/* </FormWrap> */}
            </FormAndPhotoWrapper>
            
            {/* <BtnInput><HiPencil color="rgba(17, 17, 17, 0.6)" /></BtnInput> */}
            
            {/* <BtnInput type="submit" color="#F59256"><HiPencil/></BtnInput> */}
            <BtnLogOut 
            onClick={() => handleLogout()}>
              {<FiLogOut color="#F59256" />}<LogOutSpan>Log Out</LogOutSpan>
            </BtnLogOut>
        </Card>
</div>   
    )
};

export default UserCard;