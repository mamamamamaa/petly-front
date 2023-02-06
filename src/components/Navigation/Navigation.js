import { Link } from 'react-router-dom';
// import { Link, NavLink } from 'react-router-dom';
// ===== styled ========
// import Logo from '../../';
// =====================
// import { useAuth } from 'hooks';
// =====================

export const Navigation = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <nav>
      <div to="/">
        {/* <Logo src={Logo} alt="logo" /> */}
        <div>Logo</div>
      </div>
      <div>
        <Link to="/">Home Page</Link>
      </div>
      <div>
        <Link to="/news">News Page</Link>
      </div>
      <div>
        <Link to="/notice">Notices Page</Link>
      </div>
      <div>
        <Link to="/friends">OurFriends Page</Link>
      </div>
      <div>
        <Link to="/login">Login Page</Link>
      </div>
      <div>
        <Link to="/register">Register Page</Link>
      </div>
      <div>
        <Link to="/user">User Page</Link>
      </div>
      <div>
        {/* {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>} */}
      </div>
    </nav>
  );
};
