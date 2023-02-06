import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Badge } from '../reusable/reusable';
import { Card } from '../reusable/reusable';
import { Button } from '../reusable/reusable';

export const Layout = () => {
  return (
    <>
      <Button>sd</Button>
      <Badge>kj</Badge>
      <Card />
      Layout
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
