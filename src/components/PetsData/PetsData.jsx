
// import axios from "axios";
import { useEffect, useState } from "react";

import { Modal } from "../Modal/Modal";
import { ModalAddsPet } from "../ModalAddsPet/ModalAddsPet";
import { PetsList } from "../PetsList/PetsList";


export const PetsData = () => {
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [pets, setPets] = useState([]);
    
    useEffect(()=>{
        const fetchUserPets = async () => {
            try {
                setIsLoading(true);
                // const res = await axios.get('https://petly-server.onrender.com/api/userprofile/');                
                // console.log('res', res);
                // const userPets = res.pets;


                // =========================
                const fakeRes= {
                    user: {
                        _id: "63e43cab48ea6257aa6ed83f",
                        password: "$2a$10$1McqkhX8TZalsFRP2t2ys.aFUU./hOYRnzn2Rbhdg3v.518HS2rgK",
                        email: "jkmuf@example.com",
                        name: "Jkmuf",
                        city: "Sumy ",
                        mobilePhone: "+380971234567",
                        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTQzY2FiNDhlYTYyNTdhYTZlZDgzZiIsInR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTY3NTkwMzkyMywiZXhwIjoxNjc1OTkwMzIzfQ.5jB8p2CRT-u1JFCI62JRMppfbJoXwj8Fr8WmzDH7GRw",
                        refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTQzY2FiNDhlYTYyNTdhYTZlZDgzZiIsInR5cGUiOiJyZWZyZXNoVG9rZW4iLCJpYXQiOjE2NzU5MDM5MjN9.OgKpQ5IlEoVcIb0P67-btjd95pOxbLtKoZPPZOyPRJE",
                        favorite: [],
                        createdAt: "2023-02-09T00:22:03.194Z",
                        updatedAt: "2023-02-09T00:52:03.790Z"
                    },
                    pets: [
                        {
                            _id: "63e4480f48ea6257aa6ed852",
                            name: "hgfhgf",
                            dateOfBirth: "02.02.2022",
                            breed: "jldjlhsd",
                            comments: "utfdstyfstfdsdsdlsdf",
                            pictureURL: "https://res.cloudinary.com/dmwntn6pl/image/upload/v1675905038/cz9ehjjbimaol4u5exz9.png",
                            owner: "63e43cab48ea6257aa6ed83f"
                        },
                        {
                            _id: "63e44a9548ea6257aa6ed859",
                            name: "Tom",
                            dateOfBirth: "01.01.2011",
                            breed: "cat",
                            comments: "fake cat",
                            pictureURL: "https://res.cloudinary.com/dmwntn6pl/image/upload/v1675905685/i8g2xtz60p73eyzwejpr.jpg",
                            owner: "63e43cab48ea6257aa6ed83f"
                        },
                        {
                            "_id": "63e44aa848ea6257aa6ed85c",
                            "name": "TomCat",
                            "dateOfBirth": "01.01.2011",
                            breed: "cat",
                            comments: "fake cat",
                            pictureURL: "https://res.cloudinary.com/dmwntn6pl/image/upload/v1675905703/swfgfonohjtd1qefj4ze.jpg",
                            owner: "63e43cab48ea6257aa6ed83f"
                        },
                        {
                            _id: "63e44ab748ea6257aa6ed85f",
                            name: "Cat",
                            dateOfBirth: "01.01.2011",
                            breed: "cat",
                            comments: "fake cat",
                            pictureURL: "https://res.cloudinary.com/dmwntn6pl/image/upload/v1675905718/uaxhzsmlhuwktuxcnnkh.jpg",
                            owner: "63e43cab48ea6257aa6ed83f"
                        }
                    ]
                };
                const userPets = fakeRes.pets;
                console.log('userPets', userPets);
                // =========================


                setPets(userPets);                
            } catch (error) {
                setError('ups...');
            }finally {
                setIsLoading(false);
            }
        };
        fetchUserPets();
    },[]);

    const handleModal =()=>{
        setShowModal(prevShowModal=>!prevShowModal)
    }

    const handleDeleteUserPet = (petId) => {
        setPets(prevPets=>prevPets.filter(pet=>pet._id!==petId));
    }
    
    const handleAddUserPet = (newPet) => {
        console.log('newPet', newPet);
        setPets(prevPets=>({
            ...prevPets,
            ...newPet
        }))
    }


    return (
    <section>
        <h2>My pets:</h2>
        <p>Add pet</p>
        <button type="button" onClick={handleModal}>+</button>
        {isLoading && <div>Loading...</div>}
        {error &&  <div>error</div> } 
        { pets.length===0 && !error && !isLoading &&<div>you have no pets yet</div> }
        { pets.length>0 && <PetsList pets={pets} onDelete={handleDeleteUserPet}/>} 
        { showModal && <Modal onClose={handleModal}><ModalAddsPet onSubmit={handleAddUserPet}/></Modal>}
    </section>
    )
};


// {
//     "user": {
//         "_id": "63e43cab48ea6257aa6ed83f",
//         "password": "$2a$10$1McqkhX8TZalsFRP2t2ys.aFUU./hOYRnzn2Rbhdg3v.518HS2rgK",
//         "email": "jkmuf@example.com",
//         "name": "Jkmuf",
//         "city": "Sumy ",
//         "mobilePhone": "+380971234567",
//         "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTQzY2FiNDhlYTYyNTdhYTZlZDgzZiIsInR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTY3NTkwMzkyMywiZXhwIjoxNjc1OTkwMzIzfQ.5jB8p2CRT-u1JFCI62JRMppfbJoXwj8Fr8WmzDH7GRw",
//         "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTQzY2FiNDhlYTYyNTdhYTZlZDgzZiIsInR5cGUiOiJyZWZyZXNoVG9rZW4iLCJpYXQiOjE2NzU5MDM5MjN9.OgKpQ5IlEoVcIb0P67-btjd95pOxbLtKoZPPZOyPRJE",
//         "favorite": [],
//         "createdAt": "2023-02-09T00:22:03.194Z",
//         "updatedAt": "2023-02-09T00:52:03.790Z"
//     },
//     "pets": [
//         {
//             "_id": "63e4480f48ea6257aa6ed852",
//             "name": "hgfhgf",
//             "dateOfBirth": "02.02.2022",
//             "breed": "jldjlhsd",
//             "comments": "utfdstyfstfdsdsdlsdf",
//             "pictureURL": "https://res.cloudinary.com/dmwntn6pl/image/upload/v1675905038/cz9ehjjbimaol4u5exz9.png",
//             "owner": "63e43cab48ea6257aa6ed83f"
//         },
//         {
//             "_id": "63e44a9548ea6257aa6ed859",
//             "name": "Tom",
//             "dateOfBirth": "01.01.2011",
//             "breed": "cat",
//             "comments": "fake cat",
//             "pictureURL": "https://res.cloudinary.com/dmwntn6pl/image/upload/v1675905685/i8g2xtz60p73eyzwejpr.jpg",
//             "owner": "63e43cab48ea6257aa6ed83f"
//         },
//         {
//             "_id": "63e44aa848ea6257aa6ed85c",
//             "name": "TomCat",
//             "dateOfBirth": "01.01.2011",
//             "breed": "cat",
//             "comments": "fake cat",
//             "pictureURL": "https://res.cloudinary.com/dmwntn6pl/image/upload/v1675905703/swfgfonohjtd1qefj4ze.jpg",
//             "owner": "63e43cab48ea6257aa6ed83f"
//         },
//         {
//             "_id": "63e44ab748ea6257aa6ed85f",
//             "name": "Cat",
//             "dateOfBirth": "01.01.2011",
//             "breed": "cat",
//             "comments": "fake cat",
//             "pictureURL": "https://res.cloudinary.com/dmwntn6pl/image/upload/v1675905718/uaxhzsmlhuwktuxcnnkh.jpg",
//             "owner": "63e43cab48ea6257aa6ed83f"
//         }
//     ]
// }