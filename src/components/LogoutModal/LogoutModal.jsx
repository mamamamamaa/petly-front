import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { LogoutContainer, Paragraph } from './LogoutModal.styled';
import { Button } from '../../utils';
import { FormattedMessage } from 'react-intl';

export const LogoutModal = () => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <LogoutContainer>
      <Paragraph><FormattedMessage id="leaveAccount"/></Paragraph>
      <Button type="button" onClick={handleLogout}>
        <FormattedMessage id="logOut"/>
      </Button>
    </LogoutContainer>
  );
};
