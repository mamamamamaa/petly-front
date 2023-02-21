import { useState, useEffect } from 'react';
import { useAuth } from '../../redux/hooks';
import toast, { Toaster } from 'react-hot-toast';
import {
  AddPetToNoticesBtn,
  AddPetToNoticesImg,
  AddPetToNoticesText,
  AddPetToNoticesBtnWrapper,
} from '../AddNoticeButton/AddNoticeButton.styled';
import { ModalAddNotice } from '../../components/ModalAddNotice/ModalAddNotice';
import cross from 'utils/svg/cross.svg';
import { Modal } from 'components/Modal/Modal';

const AddNoticeButton = () => {
  const { isLoggedIn } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const onButtonClick = () => {
    !isLoggedIn
      ? toast.error(
          'Dear friend, please sign up or log in to add your pet to notice'
        )
      : setShowModal(true);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <>
      <AddPetToNoticesBtnWrapper type="button" onClick={onButtonClick}>
        <AddPetToNoticesText>Add pet</AddPetToNoticesText>
        <AddPetToNoticesBtn>
          <AddPetToNoticesImg src={cross} alt="Add pet to notices" />
        </AddPetToNoticesBtn>
      </AddPetToNoticesBtnWrapper>
      {showModal && (
        <Modal onClose={handleModal} className='addNotice'>
          <ModalAddNotice onClose={handleModal} />
        </Modal>
      )}

      <Toaster />
    </>
  );
};

export default AddNoticeButton;
