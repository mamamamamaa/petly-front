import { Modal } from "../Modal/Modal";
import { ModalAddsPet } from "../ModalAddsPet/ModalAddsPet";
import { PetsList } from "../PetsList/PetsList";


export const PetsData = () => {
    // запит на бєк і прокидання пропсів для редеру списку карток тварин
    // при кліку на кнопку відкриття модалки додавання тварини

    const showModal = false;
    // const showModal = true;
    
    return (
    <section>
        <h2>My pets:</h2>
        <p>Add pet</p>
        <button type="button">+</button>
        <PetsList/>
        { showModal && <Modal><ModalAddsPet/></Modal>}
    </section>
    )
};