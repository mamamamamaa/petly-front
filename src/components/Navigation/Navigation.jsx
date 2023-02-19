import { useLocation } from 'react-router-dom';
import { NavList, NavListItem, NavigLink } from './Navigation.styled';

const Navigation = ({ close }) => {
  const { pathname } = useLocation();
//   console.log(pathname);

  return (
    <NavList>
      <NavListItem>
        <NavigLink to="/news" onClick={close}>
          News
        </NavigLink>
      </NavListItem>
      <NavListItem>
        <NavigLink
          // Specify the route?
          to="/notice/sell"
          onClick={close}
          // isactive={() =>
          //   [
          //     '/notice',
          //     '/good-hands',
          //     '/sell',
          //     '/lost',
          //     '/favorite',
          //     '/my-ads',
          //   ].includes(pathname)
          // }
        >
          Find pet
        </NavigLink>
      </NavListItem>
      <NavListItem>
        <NavigLink to="/friends" onClick={close}>
          Our friends
        </NavigLink>
      </NavListItem>
    </NavList>
  );
};

export default Navigation;
