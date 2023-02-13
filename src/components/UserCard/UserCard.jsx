
import { useDispatch } from 'react-redux';
import { useUser } from '../../redux/hooks';
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import {
  Title, Wrapper, DivPhoto, Shadow, Label, ImgAvatar, InputAvatar, Card, Btn, Span, Wrap, FormWrap, Form1, DivInput, Input, BtnInput, BtnLogOut } from './UserCard.styled';

import { Container } from "../../utils/reusable";

import { HiCamera } from "react-icons/hi2";
import { HiPencil } from "react-icons/hi";
import { FiLogOut, FiCheck } from "react-icons/fi";

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
    //const userPhoto = useUser();
    const {user}= useUser();

    
    //const {user} = useUser();//достать данные после auth
  console.log(getUserData)
  
    // const onChangeHandler = e => {
    //     console.log("1111")
    // const formData = new FormData();
    //   formData.append('avatar', e.target.files[0]);
    //   console.log(e.target.files)
    // dispatch(updateUserData(formData));
    // };
  
  
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

    return (

    <NavLink to="/user">
           
      <Container>
         <Title>My information:</Title> 
        <Card>
            
            <Wrapper>
              <Shadow>
                    <DivPhoto>
                       <ImgAvatar src={avatar}
                                        alt="User avatar"
                                        loading="lazy"
                                          width="233"
                                          height="233"/>
                  <label htmlFor="photo-uploads" cursor="pointer" position="absolute"> 
                  <InputAvatar
                        // onClick={onChangeHandler}        
                        id="photo-uploads"
                        type="file"
                    name="photo_uploads"
                      accept='image/*'
                      multiple
                        style={{  width: 0, height: 0 }}/>
                  
                    <Wrap >                                          
                    <HiCamera color="#F59256" width="30" height="30" />
                    </Wrap>
                    <Span name="image">Edit photo</Span>
                  </label> 
                </DivPhoto>
              </Shadow>
              <Btn>
                
                    
                  
                                        
                    
                 
              </Btn>
            </Wrapper>
               
          <FormWrap>      
              <Formik onSubmit={formik.handleSubmit}>  

            
         
              <Form1 autoComplete="off">
                <DivInput>
                  <Label>
                                    
                    Name:
                    <Input 
                    name="name"
                    type="name"
                    placeholder="name"
                        onChange={formik.handleChange}
                        onClick ={handleClick}
                    value={formik.values.name} />
            
                  </Label>
                    <BtnInput
                      type="button" onClick ={handleClick} >
                      {(changeBtn === true) ? <FiCheck color="#F59256" width="30" heigh="30"/> :
                                              <HiPencil color="rgba(17, 17, 17, 0.6);" width="30" heigh="30"/>}

                    </BtnInput>
                </DivInput>
            
                <DivInput>               
                  <Label>
                    Email:
                    <Input
                          id="name"
                          name="email"
                          type="email"
                          placeholder="email"
                              onChange={formik.handleChange}
                              onClick ={handleClick}
                          value={formik.values.email} />
                  </Label>
                    
                    <BtnInput
                      type="button" onClick ={handleClick} >
                      {(changeBtn === true) ? <FiCheck color="#F59256" width="30" heigh="30" /> :
                                              <HiPencil color="rgba(17, 17, 17, 0.6);"width="30" heigh="30"/>}

                    </BtnInput>
                </DivInput> 
                            
                <DivInput>
                  <Label>
                    Birthday: 
                    <Input name="Birthday:"
                          type="text"
                          placeholder="00.00.0000"
                              onChange={formik.handleChange}
                              onClick={handleClick}
                          value={formik.values.birthday}/>
                  </Label>
                    <BtnInput
                      type="button" onClick ={handleClick} >
                      {(changeBtn === true) ? <FiCheck color="#F59256" width="30" heigh="30" /> :
                                              <HiPencil color="rgba(17, 17, 17, 0.6);"width="30" heigh="30"/>}

                    </BtnInput>        
                </DivInput>                
                            
                <DivInput>
                  <Label>
                    Phone:
                    <Input  name="mobilePhone"
                            type="text"
                            placeholder="+38000000000"
                                onChange={formik.handleChange}
                                onClick ={handleClick}
                            value={formik.values.mobilePhone}/>                              
                                       
                  </Label>
                    <BtnInput
                              type="button" onClick ={handleClick} >
                              {(changeBtn === true) ? <FiCheck color="#F59256"
                                                      width="30" heigh="30"/> :
                                                      <HiPencil color="rgba(17, 17, 17, 0.6);"
                                                      width="30" heigh="30"/>}

                    </BtnInput>
                </DivInput>                
                            
                <DivInput>
                  <Label>
                    City:
                    <Input  name="city"
                            type="text"
                            placeholder="City, region"
                                onChange={formik.handleChange}
                                
                            value={formik.values.city}/>
                                                
                  </Label>
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
                 
        </FormWrap>
            
            {/* <BtnInput
                      type="button" onClick ={handleClick} >
                      {(changeBtn === true) ? <FiCheck color="#F59256" width="30" heigh="30"/> : <HiPencil color="rgba(17, 17, 17, 0.6)"
                                               width="30" heigh="30"/>}

            </BtnInput>                    */}
            
            {/* <BtnInput type="submit" color="#F59256"><HiPencil/></BtnInput> */}
            
            
            <BtnLogOut>
              {<FiLogOut color="#F59256" />}Log Out
            </BtnLogOut>
        </Card>

      </Container>
    </NavLink>

       
    )
};

export default UserCard;