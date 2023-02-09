import { UserPetCard } from "../UserPetCard/UserPetCard";

export const PetsList = ({pets}) => {
    return <ul>
        {pets.map((pet)=>{
            return <li key={pet._id}>
                <UserPetCard pet={pet} />
            </li>
        })} 
</ul>
}