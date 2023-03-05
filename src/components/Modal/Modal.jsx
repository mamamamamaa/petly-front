import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseButton } from '../CloseButton/CloseButton';
import { Backdrop, Window } from './Modal.styled';

export const Modal = ({ children, onClose, className }) => {
  const modalRoot = document.querySelector('#modal-root');
  // console.log(date);
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
      <Window className={className}>
        <CloseButton onClose={onClose} />
        {children}
      </Window>
    </Backdrop>,
    modalRoot
  );
};
