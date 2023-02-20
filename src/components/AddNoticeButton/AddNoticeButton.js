import { useState } from 'react';
import { useAuth } from '../../redux/hooks';
import toast, { Toaster } from 'react-hot-toast';
import {
  AddPetToNoticesBtn,
  AddPetToNoticesImg,
  AddPetToNoticesText,
  AddPetToNoticesBtnWrapper,
} from '../AddNoticeButton/AddNoticeButton.styled';
import { ModalAddNotice } from '../ModalAddNoticeV2/ModalAddNotice';
import cross from 'utils/svg/cross.svg';
import { Modal } from 'components/Modal/Modal';

const AddNoticeButton = () => {
  const { isLoggedIn } = useAuth();
  // const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const handleModal = () => {
  //   setShowModal(prevShowModal => !prevShowModal);
  // };
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const onButtonClick = () => {
    !isLoggedIn
      ? toast.error(
          'Dear friend, please sign up or log in to add your pet to notice'
        )
      : openModal();
  };

  return (
    <>
      <AddPetToNoticesBtnWrapper onClick={onButtonClick}>
        <AddPetToNoticesText>Add pet</AddPetToNoticesText>
        <AddPetToNoticesBtn type="button">
          <AddPetToNoticesImg src={cross} alt="Add pet to notices" />
        </AddPetToNoticesBtn>
      </AddPetToNoticesBtnWrapper>
      {isOpen && (
        <Modal onClose={closeModal}>
          <ModalAddNotice isOpen={isOpen} onClose={closeModal} />
        </Modal>
      )}

      <Toaster />
    </>
  );
};

export default AddNoticeButton;
