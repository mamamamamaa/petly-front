import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Window } from './Modal.styled';
import { CloseButton } from '../CloseButton/CloseButton';

export const Modal = ({ children, onClose }) => {
  const modalRoot = document.querySelector('#modal-root');

  const onBackdropClose = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const onEscapeClose = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscapeClose);

    return () => window.removeEventListener('keydown', onEscapeClose);
  }, [onClose]);

  return createPortal(
    <Backdrop onClick={onBackdropClose}>
      <Window>
        <CloseButton onClose={onClose} />
        {children}
      </Window>
    </Backdrop>,
    modalRoot
  );
};
