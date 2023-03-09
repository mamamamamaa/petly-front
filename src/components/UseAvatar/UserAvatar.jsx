// ========================
import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { updateAvatar } from 'redux/user/operations';
import {
  Inputav,
  Labelav,
  Formav,
  Imgav,
  Btn,
} from '../UserCard/UserCard.styled';
import { HiCamera } from 'react-icons/hi2';
import {
  NoAvatarContainer,
  Span,
  Wrap,
  DivPhoto,
} from '../UserCard/UserCard.styled';

import { useUser } from 'redux/hooks';
import { RxAvatar } from "react-icons/rx";
import { FormattedMessage } from 'react-intl';


export const FileUploader = () => {
  const { user } = useUser();  
  const [avatarURL, setAvatarURL] = useState();
  const dispatch = useDispatch();

  const onChangeHandler = e => {
    e.preventDefault();
    
    const file = e.target.files[0];

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setAvatarURL(fileReader.result);
    };

    const newFile = new File([file], file.name);

    fileReader.readAsDataURL(file);

    let formData = new FormData();

    formData.append('avatarURL', newFile);
    dispatch(updateAvatar(formData));
  };

  return (
    <>
      <DivPhoto>
        {user && (avatarURL || user.user.avatarURL) ? (
         <Imgav
            src={avatarURL || user.user.avatarURL}
            alt=" "
            accept="image/*"
            multiple
          />
        ) : (
           <NoAvatarContainer>
              <RxAvatar size={70} color="rgba(17, 17, 17, 0.6)" />
          </NoAvatarContainer>
        )}
      </DivPhoto>
      <Btn>
        <Formav encType="multipart/form-data">
          <Labelav htmlFor="file-loader-button">
            <Wrap>
              <HiCamera color="#F59256" />
              <Span><FormattedMessage id="editPhoto"/></Span>
            </Wrap>
          </Labelav>
          <Inputav
            id="file-loader-button"
            type="file"
            name="saveFile"
            onChange={onChangeHandler}
          />
        </Formav>
      </Btn>
    </>
  );
};

// ===================================================
