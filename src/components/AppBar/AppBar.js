// import { useAuth } from 'hooks/useAuth';
// import { AuthNav } from 'components/AuthNav/AuthNav';
// import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';

export function AppBar() {
  // const { isLoggedIn } = useAuth();

  return (
    <div as="header">
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </div>
  );
}
