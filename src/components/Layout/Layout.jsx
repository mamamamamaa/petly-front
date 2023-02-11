import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
// import { Badge } from '../reusable/reusable';
// import { Card } from '../reusable/reusable';
// import { Button } from '../reusable/reusable';
// import { FriendsCard } from '../reusable/reusable';
// import { AddPet } from '../reusable/reusable';


export const Layout = () => {
  return (
    <>
      {/* <AddPet></AddPet>
      <Button>sd</Button>
      <Badge>kj</Badge>
      <Card />
      <FriendsCard /> */}
      Layout
      <header>
        <AppBar />
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
