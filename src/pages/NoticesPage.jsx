import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const NoticesPage = () => {
  return (
    <>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default NoticesPage;
