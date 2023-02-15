
import { Container } from "../utils/reusable";
import UserCard from '../components/UserCard/UserCard';
import { PetsData } from '../components/PetsData/PetsData';
import { UserPageContainer, PetsDataWrapper } from './UserPage.styled';
const UserPage = () => {
  return (
    <UserPageContainer>
      {/* <h1>User page</h1> */}
      <UserCard />
      <PetsDataWrapper>
        <PetsData />
      </PetsDataWrapper>
    </UserPageContainer>
  );
};

export default UserPage;
