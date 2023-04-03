import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import {
  Overlay,
  ModalWindow,
  ModalBtn,
  ModalLogo,
  LogoAccent,
  HomePageLink,
} from './ModalMenu.styled';
import { CloseIcon } from '../../utils/svg/close';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ children, onClose }) => {

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', closeModal);
      document.body.style.overflow = '';
    };
  });

  const closeModal = ({ target, currentTarget, code }) => {
    if (target !== currentTarget || code === 'Escape') {
      onClose();
    }
  };

  return createPortal(
    <Overlay>
      <ModalLogo onClick={closeModal}>
        <HomePageLink to="/" >
          pe
          <LogoAccent>t</LogoAccent>ly
        </HomePageLink>
      </ModalLogo>

      <ModalBtn onClick={closeModal}>
        <CloseIcon />
      </ModalBtn>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>,
    modalRoot
  );
};
