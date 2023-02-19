// ========================add, but not send
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { updateAvatar } from "redux/user/operations";
import {
    Inputav, 
    Labelav,
    Formav,
    Imgav,
    Btn,
} from '../UserCard/UserCard.styled'
import { HiCamera } from "react-icons/hi2";
import { NoAvatarContainer, Span, Wrap, DivPhoto } from "../UserCard/UserCard.styled";
import { NoPhotoIcon } from "utils/svg/noPhotoCross";
import { useUser } from "redux/hooks";


export const FileUploader = () => {
  const[file, setFile] = useState(null)
  const [image, setImage] = useState();
  const [avatarURL, setAvatarURL] = useState();
  const dispatch = useDispatch(); 
  const { user } = useUser();
 
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setAvatarURL(fileReader.result);
  };
  
  const saveFile = (file) => {
  // save file to server here   
    
    console.log("Saving file:", file.name);
    // console.log("file object:", file);
    // console.log("file path:",File.path);
};
 
      
      const onChangeHandler = e => {
        // console.log(e.target.files[0])

        const file = e.target.files[0];

        
        if (file && file.size > 0) {
        saveFile(file);
        }
        const newFile = new File([file], file.name);
        setFile(newFile);
        
        setImage(e.target.files[0]);          
        fileReader.readAsDataURL(e.target.files[0]);
        
        let formData = new FormData();
        
        formData.append('avatarURL', newFile);     
        dispatch(updateAvatar(formData));
      };
  
  
  
  return (
     <>
    <DivPhoto>
     {user.user.avatarURL ? (
    <Imgav
        src={user.user.avatarURL}
        alt="preview"
         accept='image/*'
                      multiple
      />) : 
    (<NoAvatarContainer><NoPhotoIcon/></NoAvatarContainer>)}
    </DivPhoto>
    <Btn>
    <Formav encType="multipart/form-data">
      <Labelav
        htmlFor="file-loader-button"
       
      >
        <Wrap >
          <HiCamera color="#F59256"/>
           <Span>Edit photo</Span> 
         </Wrap>
      </Labelav>
      <Inputav
        id="file-loader-button"
        type="file"
        name="saveFile"
        onChange={onChangeHandler}
      />
      
    </ Formav>
      </Btn>
    </>
  );
};


// ===================================================
