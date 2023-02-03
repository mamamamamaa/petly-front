import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from '../helpers/RestrictedRoute';
import { PrivateRoute } from '../helpers/PrivateRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<>Layout</>}>
        <Route index element={<>Home page</>} />
        <Route path="/news" element={<>News page</>} />
        <Route path="/notices" element={<>Find pet page</>} />
        <Route path="/friends" element={<>Our friends page</>} />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<>Login page</>} redirectTo="/user" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<>Register page</>}
              redirectTo="/user"
            />
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute component={<>User page</>} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
};
