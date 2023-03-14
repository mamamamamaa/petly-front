import { useState, useEffect } from 'react';
import { useAuth } from '../../redux/hooks';
import toast, { Toaster } from 'react-hot-toast';
import {
  AddPetToNoticesBtn,
  AddPetToNoticesImg,
  AddPetToNoticesText,
  AddPetToNoticesBtnWrapper,
} from './AddNoticeButton.styled';
import { ModalAddNotice } from '../ModalAddNoticeV2/ModalAddNotice';
import cross from 'utils/svg/cross.svg';
import { Modal } from 'components/Modal/Modal';
import { useIntl } from 'react-intl';

const AddNoticeButton = () => {  
  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { formatMessage } = useIntl();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onButtonClick = () => {
    !isLoggedIn
      ? toast.error(formatMessage({ id: 'toastAddNoticeButton'}))
      : openModal();
  };

  useEffect(() => {
    openModal(); // removes double click button issue
  }, []);
  useEffect(() => {
  !isOpen &&  localStorage.setItem('preview', ''); // removes pets from localStorage if accidently? close window
  }, [isOpen]);

  return (
    <>
      <AddPetToNoticesBtnWrapper>
        <AddPetToNoticesText>Add pet</AddPetToNoticesText>
        <AddPetToNoticesBtn type="button" onClick={onButtonClick}>
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
