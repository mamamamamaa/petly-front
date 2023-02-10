import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUserPets } from "../../redux/user/operations";

import { Modal } from "../Modal/Modal";
import { ModalAddsPet } from "../ModalAddsPet/ModalAddsPet";
import { PetsList } from "../PetsList/PetsList";
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
    <section>
        <h2>My pets:</h2>
        <p>Add pet</p>
        <button type="button" onClick={handleModal}>+</button>
        {isLoading && <div>Loading...</div>}
        {error &&  <div>error</div> } 
        { pets.length===0 && !error && !isLoading &&<div>you have no pets yet</div> }
        { pets.length>0 && <PetsList pets={pets}/>} 
        { showModal && <Modal onClose={handleModal}><ModalAddsPet/></Modal>}
    </section>
    )
};