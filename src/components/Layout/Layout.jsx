import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

export const Layout = ({ handleLocaleChange }) => {
  return (
    <>    
      <header >
        <AppBar handleLocaleChange={handleLocaleChange}/>  
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
