
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUserPets } from "../../redux/user/operations";

import { Modal } from "../Modal/Modal";
import { ModalAddsPet } from "../ModalAddsPet/ModalAddsPet";
import { PetsList } from "../PetsList/PetsList";
import {
  PetsDataTitle,
  PetsDataAddText,
  PetsDataButton,
  PetsDataSection,
  PetsDataAddBtnWrapper,
  PetsDataAddBtnContainer,
  Notification
} from './PetsData.styled';
const selectPets = state => state.user.pets;
const selectIsLoading = state => state.isLoading;
const selectError = state => state.error;

export const PetsData = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const pets = useSelector(selectPets);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchUserPets());
  }, [dispatch]);

  const handleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };


  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

 useEffect(() => {
   !showModal && localStorage.setItem('preview', ''); // removes pets from localStorage if accidently? close window
 }, [showModal]);
  
  return (
    <PetsDataSection>
      <PetsDataAddBtnContainer>
        <PetsDataTitle>My pets:</PetsDataTitle>        
        <PetsDataAddBtnWrapper>
          <PetsDataAddText>Add pet</PetsDataAddText>
          <PetsDataButton type="button" onClick={handleModal}></PetsDataButton>
        </PetsDataAddBtnWrapper>  
      </PetsDataAddBtnContainer>
      <PetsDataAddBtnContainer>
      {isLoading && <Notification>Loading...</Notification>}
        {error && <Notification>Sorry, something went wrong, try again later</Notification>}
        {!error && !isLoading && pets.length === 0 && (
          <Notification>You have no pets yet</Notification>
        )}
        {!error && !isLoading && pets.length > 0 && <PetsList pets={pets} />}
        {showModal && (
          <Modal onClose={handleModal} className='AddPet'>
            <ModalAddsPet onClose={handleModal} />
          </Modal>
        )}
      </PetsDataAddBtnContainer>
    </PetsDataSection>
    
  );
};