import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Notices = () => {
  return (
    <>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Notices;
