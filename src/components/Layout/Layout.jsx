import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Badge } from '../reusable/reusable';
import { Card } from '../reusable/reusable';
import { Button } from '../reusable/reusable';
import { FriendsCard } from '../reusable/reusable';
import { AddPet } from '../reusable/reusable';

export const Layout = () => {
  return (
    <>
      <AddPet></AddPet>
      <Button>sd</Button>
      <Badge>kj</Badge>
      <Card />
      <FriendsCard />
      Layout
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
