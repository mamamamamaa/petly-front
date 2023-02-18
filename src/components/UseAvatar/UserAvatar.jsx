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
import { useUserAvatar } from "redux/hooks";

export const FileUploader = () => {
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  const dispatch = useDispatch(); 
  const avatar = useUserAvatar()

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };
  // console.log(fileReader)
  
  let formData = new FormData();
      const onChangeHandler = e => {
        console.log(e.target.files[0])
        setImage(e.target.files[0]);          
        fileReader.readAsDataURL(e.target.files[0]);
        
        if (e.target && e.target.files[0]) {
          formData.append('avatarUrl', e.target.files[0]);
        }
              
        dispatch(updateAvatar(e.target.files[0]));
      };
  
  

  
  
  return (
    <Formav>
      <Labelav
        htmlFor="file-loader-button"
       
      >
        <HiCamera color="#F59256"/>edit 
      </Labelav>
      <Inputav
        id="file-loader-button"
        type="file"
        
        onChange={onChangeHandler}
      />
      <Imgav
        src={imageURL ? imageURL : "no_photo.jpg"}
        
        alt="preview"
         accept='image/*'
                      multiple
        
      />
      <div  className="file-uploader__file-name">{image ? image.name : ""}</div>
    </ Formav>
  );
};


// ===================================================
// add & read & 
// import React, { useState } from "react";
// import "./file-uploader.css";
// import { HiCamera } from "react-icons/hi2";


// export const FileUploader = () => {
//   const [image, setImage] = useState();
//   const [imageURL, setImageURL] = useState();
//   const fileReader = new FileReader();
//   fileReader.onloadend = () => {
//     setImageURL(fileReader.result);
//   };
//   const handleOnChange = (event) => {
//     event.preventDefault();
//     if (event.target.files && event.target.files.length) {
//       const file = event.target.files[0];
//       setImage(file);
//       fileReader.readAsDataURL(file);
//     }
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     if (event.dataTransfer.files && event.dataTransfer.files.length) {
//       setImage(event.dataTransfer.files[0]);
//       fileReader.readAsDataURL(event.dataTransfer.files[0]);
//     }
//   };

//   const handleDragEmpty = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//   };

//   return (
//     <>
//     <DivPhoto>
//     {imageURL ? (
//     <Imgav
//         src={imageURL}
//         alt="preview"
//         onDrop={handleDrop}
//         onDragEnter={handleDragEmpty}
//         onDragOver={handleDragEmpty}
//       />) : 
//     (<NoAvatarContainer><NoPhotoIcon/></NoAvatarContainer>)}
//     </DivPhoto>
//       <Btn>
//       <Formav>
//       <Labelav htmlFor="file-loader-button">
//         <Wrap >
//           <HiCamera color="#F59256"/>
//           <Span>Edit photo</Span> 
//         </Wrap>
//       </Labelav>
//       <Inputav
//         id="file-loader-button"
//         type="file"
//         onChange={handleOnChange}
//       />
//       {/* <div >{image ? "" : ""}</div> */}
//     </Formav>
//     </Btn>
//    </>
//   );
// };