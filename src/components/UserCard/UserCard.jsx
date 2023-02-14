
import { useDispatch } from 'react-redux';
import { useUser } from '../../redux/hooks';
import { useState } from 'react';
import {
  Title, Wrapper, DivPhoto, Shadow, FormLabel, InputAvatar, Card, Btn, Span, Wrap, FormWrap, Form1, DivInput, Input, BtnInput, BtnLogOut } from './UserCard.styled';


import { HiCamera } from "react-icons/hi2";
import { HiPencil } from "react-icons/hi";
import { FiLogOut, FiCheck } from "react-icons/fi";

import { FileUploader } from '../UseAvatar/UserAvatar';
import { getUserData,updateUserData } from '../../redux/user/operations';

import { Formik, useFormik } from 'formik';
//import avatar from "../../images/avatart.jpg";
import { useEffect } from 'react';




 

const UserCard = () => {
  const [active, setActive] = useState('');

    //=========for avatar============
  const [changeBtn, setChangeBtn] = useState(false);

  const handleClick = () => {
    setChangeBtn(!changeBtn)
    setActive(!active)
  }
  
    const dispatch = useDispatch();    
    const user= useUser();
   
   console.log(user);
  
    
    
    const onChangeHandler = e => {
        console.log("1111")
    const formData = new FormData();
      formData.append('avatar', e.target.files[0]);
      console.log(e.target.files)
    dispatch(updateUserData(formData));
    };
 /////////////////////////////////
    
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
        name: user.user.user.name,      
      email: `${user.user.user.email}`,      
      birthday: user.user.user.birthday || " ",
      mobilePhone: user.user.user.mobilePhone ,
      city: `${user.user.user.city}`,
    },onSubmit, enableReinitialize:true
    });
  console.log(formik)
  useEffect(() =>{
    dispatch(getUserData())
    
     
 },[dispatch])
  
    return (
     
      
      <>
      
          <Title>My information:</Title> 
          
        <Card>
            
            <Wrapper>
              <Shadow>
              <DivPhoto>
                <FileUploader/> 
                       {/* <ImgAvatar src={avatar}
                                        alt="User avatar"
                                        loading="lazy"
                                          width="233"
                                          height="233"/> */}
                  <label htmlFor="photo-uploads" cursor="pointer" position="absolute"> 
                  <InputAvatar
                         onClick={onChangeHandler}        
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

              {/* {user.map(user => ( key={user.id} */}
        
         
                <Form1 autoComplete="off"
                 
                
                >
                  <DivInput>
                    <FormLabel>
                                    
                      Name:
                      <Input
                      
                        name="name"
                        type="name"
                        placeholder="name"
                        onChange={formik.handleChange}
                        onClick={formik.handleClick}
                        value={formik.values.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />
            
                    </FormLabel>
                    <BtnInput name="name"
                      type="button" onClick={handleClick.this} >
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
                        onClick={formik.handleClick}
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

            
                </Form1>
       
        </Formik>
                 
        </FormWrap>
            
            <BtnInput
                      type="submit" onClick={onSubmit} >
            {( Input === active || changeBtn === true ) ? <FiCheck color="#F59256" width="30" heigh="30"/> : <HiPencil color="rgba(17, 17, 17, 0.6)"
                                               width="30" heigh="30"/>}

            </BtnInput>                   
            
            {/* <BtnInput type="submit" color="#F59256"><HiPencil/></BtnInput> */}
            
            {/* onClick={() => handleLogout()} */}
            <BtnLogOut >
              {<FiLogOut color="#F59256" />}Log Out
            </BtnLogOut>
        </Card>

      
 </>   

       
    )
};

export default UserCard;