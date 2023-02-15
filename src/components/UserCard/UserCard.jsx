

import { useDispatch } from 'react-redux';
import { useUser } from '../../redux/hooks';
import { useState } from 'react';
import {
  Title, Wrapper, DivPhoto,  Card, Btn, Span, Wrap, Form1, DivInput, Input, BtnInput, BtnLogOut, FormLabel, InputAvatar,  LogOutSpan, FormAndPhotoWrapper } from './UserCard.styled';
//import { Container } from "../../utils/reusable";

import { HiCamera } from "react-icons/hi2";
import { HiPencil } from "react-icons/hi";
import { FiLogOut, FiCheck } from "react-icons/fi";
//import { NoPhotoIcon } from 'utils/svg/noPhotoCross';
import { logout } from '../../redux/auth/operations';
import { FileUploader } from '../UseAvatar/UserAvatar';
import { updateUserData, getUserData } from '../../redux/user/operations';
import { Formik, useFormik } from 'formik';
//import avatar from "../../images/avatart.jpg";
import { useEffect } from 'react';

//========================================
// const formSchema = object().shape({
//   name: string()
//     .min(2, 'min 2 symbols')
//     .matches(/^[a-zA-Zа-яА-Я-`'іІїЇ]*$/, 'Only letters')
//     .required('Name is required'),
  
//   email: string()
//     .matches(
//       // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//       /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
//     // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//       // /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//       'Invalid email'
//     )
//     .required('Email is required'),
  
//   mobilePhone: string()
//     .matches(/^\+?3?8?(0\d{2}\d{3}\d{2}\d{2})$/, 'Bad phone number')
//     .required('Phone is required'),
  
//   city: string()
//     .matches(
//       /^(([a-zA-Zа-яА-Я]([-]?)){1,})([^-,?,\s,.,0-9,!])+(,)+((\s?[a-zA-Zа-яА-Я](([-]?){0,1})){1,})([^-,?,.,\s,0-9,!])$/,
//       'Error. Example: Brovary, Kyiv'
//     )
//     .required('City is required'),
// });
//==========================================


const UserCard = () => {
  const [active, setActive] = useState('');

    //=========for avatar============
  const [changeBtn, setChangeBtn] = useState(false);

  const handleClick = () => {
    setChangeBtn(!changeBtn)
    setActive(!active)
  }
  
  const dispatch = useDispatch();
  console.log(dispatch);
    const {user}= useUser();
  console.log(user);
    
    const onChangeHandler = e => {
        console.log("1111")
    const formData = new FormData();
      formData.append('avatar', e.target.files[0]);
      console.log(e.target.files)
    dispatch(updateUserData(formData));
    };
 ///////////////////////////////
    
//////формик 
    const onSubmit = value => {
    const { name, email, birthday, phone, city } = value;
     console.log(value)
      dispatch(        
      updateUserData({
        name,
        email,
        birthday,
        phone,
        city,
      }),     
    );
    };
  
    let formik = useFormik({
      initialValues: {
       name: user.user.name,      
      email: user.user.email,      
      birthday: user.user.birthday || " ",
      mobilePhone: user.user.mobilePhone ,
      city: user.user.city,
      },      
      onSubmit, enableReinitialize: true
    });
  console.log(formik)

 useEffect(() => {
      dispatch(getUserData())
      console.log("getUserData")
 },[dispatch])

    
  
  //============================================
  // code Yulya
  const handleLogout = () => {
    dispatch(logout());
  };
   
  
    return (
     
      
      <>
      
          <Title>My information:</Title> 
          
        <Card>
          <FormAndPhotoWrapper> 
            
            <Wrapper>
              {/* <Shadow> */}
              <DivPhoto>
                <FileUploader/> 
                       {/* <ImgAvatar src={avatar}
                                        alt="User avatar"
                                        loading="lazy"
                                          width="233"
                                          height="233"/> */}
                 
                </DivPhoto>
              {/* </Shadow> */}
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
                        id="photo-uploads"
                        type="file"
                    name="photo_uploads"
                      accept='image/*'
                      multiple
                        style={{  width: 0, height: 0 }}
                    />
                    </Btn>
            </Wrapper>
            
                       
        {/* <FormWrap>       */}
        <Formik      
            >
         
                <Form1 onSubmit={formik.handleSubmit}>
                <DivInput>
                    <FormLabel>
                                    
                      Name:
                      <Input
                      
                        name="name"
                        type="name"
                        placeholder="name"
                        onChange={formik.handleChange}
                        onSubmit={formik.handleClick}
                        value={formik.values.name}
                        />
            
                    </FormLabel>
                    <BtnInput name="name"
                      type="button" onClick={handleClick} >
                      {(changeBtn === true) ? <FiCheck color="#F59256" width="30" heigh="30" /> :
                        <HiPencil color="rgba(17, 17, 17, 0.6)" width="30" heigh="30" />}

                    </BtnInput>
                </DivInput>
            
                <DivInput>
                    <FormLabel>
                      Email:
                      <Input
                          
                        name="email"
                        id="email"
                        type="email"
                        placeholder="email"
                        onChange={formik.handleChange}
                        onSubmit={formik.handleClick}
                      value={formik.values.email}
                    onBlur={formik.handleBlur}/>
                    
                    </FormLabel>
                    
                    <BtnInput
                      type="button" onClick={handleClick} >
                      {(changeBtn === true || Input.name === active) ? <HiPencil color="rgba(17, 17, 17, 0.6)" width="30" heigh="30" /> :
                        <FiCheck color="#F59256" width="30" heigh="30" />}

                    </BtnInput>
                </DivInput>
                            
                <DivInput>
                    <FormLabel>
                      Birthday:
                      <Input
                          
                        name="birthday"
                        id="birthday"
                        type="text"
                        placeholder="00.00.0000"
                        onChange={formik.handleChange}
                        onClick={handleClick}
                      value={formik.values.birthday}
                     onBlur={formik.handleBlur}/>
                    </FormLabel>
                    <BtnInput
                      type="button" onClick={handleClick} >
                      {(changeBtn === true) ? <HiPencil color="rgba(17, 17, 17, 0.6)" width="30" heigh="30" /> :
                        <FiCheck color="#F59256" width="30" heigh="30" />}

                    </BtnInput>
                </DivInput>
                            
                <DivInput>
                    <FormLabel>
                      Phone:
                      <Input
                            
                        name="mobilePhone"
                        id="mobilePhone"
                        type="text"
                        placeholder="+38000000000"
                        onChange={formik.handleChange}
                         onClick ={handleClick}
                      value={formik.values.mobilePhone}
                     onBlur={formik.handleBlur}/>
                                       
                    </FormLabel>
                    <BtnInput
                      type="button" onClick={handleClick} >
                      {(Input.name === active || changeBtn === true) ? <HiPencil color="rgba(17, 17, 17, 0.6)" width="30" heigh="30" /> :
                        <FiCheck color="#F59256" width="30" heigh="30" />}
                                        
                    </BtnInput>
                </DivInput>
                            
                <DivInput>
                    <FormLabel >
                      City:
                      <Input
                            
                        name="city"
                        id="city"
                        type="text"
                        placeholder="City, region"
                        onChange={formik.handleChange}
                                
                      value={formik.values.city}
                       onBlur={formik.handleBlur}
                      />
                                                
                    </FormLabel>
                    <BtnInput 
                      type="button" onClick={handleClick} >
                      {(Input.name === active || changeBtn === true) ? <HiPencil color="rgba(17, 17, 17, 0.6)" width="30" heigh="30" /> :
                        <FiCheck color="#F59256" width="30" heigh="30" />}

                    </BtnInput>
                </DivInput>
 
            
 <BtnInput
                      type="submit" onSubmit={onSubmit} >
            {( Input === active || changeBtn === true ) ? <FiCheck color="#F59256" width="30" heigh="30"/> : <HiPencil color="rgba(17, 17, 17, 0.6)"
                                               width="30" heigh="30"/>}

            </BtnInput>  
 {/* <button type="submit">Submit</button> */}
            
      </Form1>
       
    </Formik>
                 
            
  </FormAndPhotoWrapper>            
                            
            
            {/* <BtnInput type="submit" color="#F59256"><HiPencil/></BtnInput> */}
            
            {/* onClick={() => handleLogout()} */}
            <BtnLogOut 
            onClick={() => handleLogout()}>
              {<FiLogOut color="#F59256" />}<LogOutSpan>Log Out</LogOutSpan>
            </BtnLogOut>
      </Card>
      

      
 </>    
            
           
            
 
    )
};



export default UserCard;


//=======================1==================
// return (

//         // <NavLink to="/user">
//         // <Container>
//   <div>
//          <Title>My information:</Title> 
//           <Card>
//             <FormAndPhotoWrapper>
//             <Wrapper>
//                {/* <Shadow> */}
//                     <DivPhoto>
                       
//                       {userPhoto ? (
//                             <UserPhoto src={userPhoto} 
//                              width="233"
//                              height="233"
//                              alt="photo" />
//                         ) : 
    
//                         (<NoAvatarContainer><NoPhotoIcon/></NoAvatarContainer>)}
//                      {/* </Shadow>  */}
//                     </DivPhoto>
//                     <Btn>
//                        <label htmlFor="photo_uploads">
//                     <Wrap >
//                         {' '}
//                     <HiCamera color="#F59256" width="20" height="20" />
//                     <Span>Edit photo</Span>
//                     </Wrap>
//                     </label> 
                                        
//                     <InputAvatar
//                         onClick={onChangeHandler}        
//                         id="photo_uploads"
//                         type="file"
//                         name="photo_uploads"
//                         style={{  width: 0, height: 0 }}
//                     />
//                     </Btn>
//                     </Wrapper>
//             {/* <FormWrap>       */}
//               <Formik onSubmit={formik.handleSubmit}>  

//             <Form1>
//             <DivInput>
//             <FormLabel>                 
//               Name:
//               <Input 
//                     name="name"
//                     type="name"
//                     placeholder="name"