import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { Overlay, ModalWindow, StyledModalBurger } from "./ModalMenu.styled";
import { BurgerIcon } from '../../utils/svg/burgerBtn';
import { CloseIcon } from '../../utils/svg/close';
import { BurgerBtn } from "components/AppBar/AppBar.styled";

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ children, onClose }) => {

  const [showModal, setShowModal] = useState(true);

  useEffect(() => {

    document.addEventListener('keydown', closeModal);
    document.body.style.overflow = "hidden";
        return () => {
          document.removeEventListener('keydown', closeModal);
          document.body.style.overflow = ""; 
        }
   
  })

  const closeModal = ({ target, currentTarget, code }) => {
    if (target !== currentTarget || code === "Escape") {
      onClose();
    }
  }

  return createPortal(
    <Overlay onClick={closeModal} >
      <ModalWindow>{children}</ModalWindow>
      {/* <StyledModalBurger
      open={showModal}
      onClick={() => {
          setShowModal(current => !current);
          setShowModal(!showModal);
        }}>
            {!showModal ? <BurgerIcon /> : <CloseIcon />}
          </StyledModalBurger> */}
      {/* <StyledModalBurger
        aria-label="menu"
       
        onClick={() => {
          setShowModal(current => !current);
          setShowModal(!showModal);
        }}
      > */}
        {/* <div></div>
        <div></div>
        <div></div> */}
      {/* </StyledModalBurger> */}
    </Overlay>,
    modalRoot);
}