// ========================add, but not send
import React, { useState, useEffect } from 'react';
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
import { NoPhotoIcon } from 'utils/svg/noPhotoCross';
import { useUser } from 'redux/hooks';

export const FileUploader = () => {
  const { user } = useUser();
  const [files, setFiles] = useState(null);
  const [image, setImage] = useState();
  const [avatarURL, setAvatarURL] = useState();
  const dispatch = useDispatch();

  const onChangeHandler = e => {
    e.preventDefault();
    // console.log(e.target.files[0])

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
        {user.avatar ? (
          <Imgav
            src={avatarURL || user.user.avatarURL}
            alt="preview"
            accept="image/*"
            multiple
          />
        ) : (
          <NoAvatarContainer>
            <NoPhotoIcon />
          </NoAvatarContainer>
        )}
      </DivPhoto>
      <Btn>
        <Formav encType="multipart/form-data">
          <Labelav htmlFor="file-loader-button">
            <Wrap>
              <HiCamera color="#F59256" />
              <Span>Edit photo</Span>
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
