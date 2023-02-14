
// ========================add, but not send


import React, { useState } from "react";
// import { useDispatch } from 'react-redux';
// import { updateUserAvatar } from "redux/user/operations";
import {
    Inputav, 
  Labelav,
    
    Formav,
    Imgav,
} from '../UserCard/UserCard.styled'
import { HiCamera } from "react-icons/hi2";

// export const FileUploader = () => {
//   const [image, setImage] = useState();
//   const [imageURL, setImageURL] = useState();
//   const dispatch = useDispatch();  

//   const fileReader = new FileReader();
//   fileReader.onloadend = () => {
//     setImageURL(fileReader.result);
//   };
  
//         const onChangeHandler = e => {
//         console.log("1111")
//           const formData = new FormData();
//           const file = e.target.files[0];
//       formData.append('avatar',file);
//           console.log(e.target.files)
          
//           dispatch(updateUserAvatar(formData));
//           setImage(file);
          
//       fileReader.readAsDataURL(file);
//     };

  
//   return (
//     <Formav>
//       <Labelav
//         htmlFor="file-loader-button"
       
//       >
//         <HiCamera color="#F59256"/>edit 
//       </Labelav>
//       <Inputav
//         id="file-loader-button"
//         type="file"
        
//         onChange={onChangeHandler}
//       />
//       <Imgav
//         src={imageURL ? imageURL : "no_photo.jpg"}
        
//         alt="preview"
//          accept='image/*'
//                       multiple
        
//       />
//       <div  className="file-uploader__file-name">{image ? image.name : ""}</div>
//     </ Formav>
//   );
// };


// ===================================================
// add & read & 
// import React, { useState } from "react";
// import "./file-uploader.css";
// import { HiCamera } from "react-icons/hi2";


export const FileUploader = () => {
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };
  const handleOnChange = (event) => {
    event.preventDefault();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      setImage(file);
      fileReader.readAsDataURL(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files && event.dataTransfer.files.length) {
      setImage(event.dataTransfer.files[0]);
      fileReader.readAsDataURL(event.dataTransfer.files[0]);
    }
  };

  const handleDragEmpty = (event) => {
    event.preventDefault();
    event.stopPropagation();
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
        
        onChange={handleOnChange}
      />
      <Imgav
        src={imageURL ? imageURL : "no_photo.jpg"}
        
        alt="preview"
        onDrop={handleDrop}
        onDragEnter={handleDragEmpty}
        onDragOver={handleDragEmpty}
      />
      <div >{image ? "" : ""}</div>
    </Formav>
  );
};