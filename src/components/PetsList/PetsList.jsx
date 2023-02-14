import { UserPetCard } from "../UserPetCard/UserPetCard";
import { PetUl, PetLi } from './PetsList.styled';

export const PetsList = ({pets}) => {
    return <PetUl>
        {pets.map((pet) => {
            const { pictureURL, name: alt } = pet;
            return (
              <PetLi key={pet._id}>
                <UserPetCard
                  {...{ pet, pictureURL, alt }}
                />
              </PetLi>
            );
        })} 
</PetUl>
}