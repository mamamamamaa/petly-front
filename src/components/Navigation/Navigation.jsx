import { useLocation } from 'react-router-dom';
import { NavList, NavListItem, NavigLink } from './Navigation.styled';
import { FormattedMessage } from 'react-intl';

const Navigation = ({ close }) => {
  const { pathname } = useLocation();

  return (
    <NavList>
      <NavListItem>
        <NavigLink to="/news" onClick={close}>
          <FormattedMessage id="news" />
        </NavigLink>
      </NavListItem>
      <NavListItem>
        <NavigLink
          to="/notice/sell"
          onClick={close}
          className={pathname.includes('/notice') ? 'active' : 'inActive'}
        >
          <FormattedMessage id="findPet"/>
        </NavigLink>
      </NavListItem>
      <NavListItem>
        <NavigLink to="/friends" onClick={close}>
          <FormattedMessage id="ourFriends"/>
        </NavigLink>
      </NavListItem>
    </NavList>
  );
};

export default Navigation;
