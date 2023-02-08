import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import SearchForm from 'components/SearchForm/SearchForm';
import { Container } from '../../utils/reusable';

export const Layout = () => {
  return (
    <Container>
      Layout
      <header>
        <AppBar />
        <SearchForm >
          Find your favorite pet
        </SearchForm>
      </header>
      <Suspense fallback={null} >
        <Outlet />
      </Suspense>
    </Container>
  );
};
