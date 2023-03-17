import { useAuth } from 'redux/hooks';
import { Spinner } from 'components/Spinner/Spinner';
import { Container } from '../utils';
import { UserCard } from '../components/UserCard/UserCard';
import { PetsData } from '../components/PetsData/PetsData';
import { UserPageContainer, PetsDataWrapper } from './UserPage.styled';

const UserPage = () => {
  const { isRefreshing } = useAuth();

  return (
    <>
      {isRefreshing ? (
        <Spinner />
      ) : (
        <Container>
          <UserPageContainer>
            <UserCard />
            <PetsDataWrapper>
              <PetsData />
            </PetsDataWrapper>
          </UserPageContainer>
        </Container>
      )}
    </>
  );
};

export default UserPage;
