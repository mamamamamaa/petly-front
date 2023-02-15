import { Container } from "../utils/reusable";
import UserCard from '../components/UserCard/UserCard';
import { PetsData } from "../components/PetsData/PetsData"

const UserPage = () => {
  return <>
  <Container>
    <UserCard/>
    <PetsData/>
  </Container>
  </>;
};

export default UserPage;
