import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUserPets } from "../../redux/user/operations";

import { Modal } from "../Modal/Modal";
import { ModalAddsPet } from "../ModalAddsPet/ModalAddsPet";
import { PetsList } from "../PetsList/PetsList";
import { Section } from "./PetsData.styled";
const selectPets = state => state.user.pets;
const selectIsLoading = state=> state.isLoading;
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

    const handleModal =()=>{
        setShowModal(prevShowModal=>!prevShowModal);
    }
    
    return (
    <Section>
        <h2>My pets:</h2>
        <p>Add pet</p>
        <button type="button" onClick={handleModal}>+</button>
        {isLoading && <div>Loading...</div>}
        {error &&  <div>error</div> } 
        { !error && !isLoading && pets.length===0 && <div>you have no pets yet</div> }
        { !error && !isLoading && pets.length>0 && <PetsList pets={pets}/>} 
        { showModal && <Modal onClose={handleModal}><ModalAddsPet onClose={handleModal}/></Modal>}
    </Section>
    )
};