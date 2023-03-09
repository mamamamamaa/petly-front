import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Container } from '../../utils';

export const Layout = ({ handleLocaleChange }) => {
  return (
    <>
    {/* // <Container> */}
      <header >
        <AppBar handleLocaleChange={handleLocaleChange}/>
        <select>
          <option value="en">en</option>          
          <option value="uk">uk</option>
      </select>
      </header>
      <main>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </main>
    {/* // </Container> */}
    </>
  );
};
