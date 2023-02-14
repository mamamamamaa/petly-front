import { UserPetCard } from "../UserPetCard/UserPetCard";

export const PetsList = ({pets}) => {
    return <ul>
        {pets.map((pet) => {
            const { pictureURL, name: alt } = pet;
            return (
              <li key={pet._id}>
                <UserPetCard
                  {...{ pet, pictureURL, alt }}
                />
              </li>
            );
        })} 
</ul>
}