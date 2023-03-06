import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { LogoutContainer, Paragraph } from './LogoutModal.styled';
import { Button } from '../../utils';

export const LogoutModal = () => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <LogoutContainer>
      <Paragraph>Are you ready to leave your personal account?</Paragraph>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </LogoutContainer>
  );
};
