import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { ModalAddsPet } from "../ModalAddsPet/ModalAddsPet";
import { PetsList } from "../PetsList/PetsList";


export const PetsData = () => {
    
    const [showModal, setShowModal] = useState(false);
    const [pets, setPets] = useState([]);

    // запит на бєк і прокидання пропсів для редеру списку карток тварин

    const handleModal =()=>{
        setShowModal(prevShowModal=>!prevShowModal)
    }
    
    return (
    <section>
        <h2>My pets:</h2>
        <p>Add pet</p>
        <button type="button" onClick={handleModal}>+</button>
        <PetsList pets={pets}/>
        { showModal && <Modal onClose={handleModal}><ModalAddsPet/></Modal>}
    </section>
    )
};