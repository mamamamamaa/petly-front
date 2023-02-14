import { useState } from 'react';
import { useAuth } from '../../redux/hooks';
import toast, { Toaster } from 'react-hot-toast';
import {
  AddPetToNoticesBtn,
  AddPetToNoticesImg,
  AddPetToNoticesText,
  AddPetToNoticesBtnWrapper,
} from '../AddNoticeButton/AddNoticeButton.styled';
import { ModalAddsPet } from '../../components/ModalAddsPet/ModalAddsPet';
import cross from 'utils/svg/cross.svg';

const AddNoticeButton = () => {
  const { isLoggedIn } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onButtonClick = () => {
    !isLoggedIn
      ? toast.error(
          'Dear friend, please sign up or log in to add your pet to notice'
        )
      : setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen ? (
        <>
          <ModalAddsPet
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </>
      ) : (
        <AddPetToNoticesBtnWrapper type="button" onClick={onButtonClick}>
          <AddPetToNoticesText>Add pet</AddPetToNoticesText>
          <AddPetToNoticesBtn>
            <AddPetToNoticesImg src={cross} alt="Add pet to notices" />
          </AddPetToNoticesBtn>
        </AddPetToNoticesBtnWrapper>
      )}
      <Toaster />
    </>
  );
};

export default AddNoticeButton;
