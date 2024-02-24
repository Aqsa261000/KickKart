import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/auth/authContext';
import defaultRoutes from './routes';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import RequireAuth from './RequireAuth';

const AppRouter = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, getUser, user, role } = authContext;
  const { protectedRoutes, publicRoutes } = defaultRoutes;
  useEffect(() => {
    getUser();
  }, []);

  const publicPageRoutes = publicRoutes.map(({ label, path, component }) => {
    return <Route key={label} path={`/${path}`} element={component} />;
  });

  const protectedPageRoutes = protectedRoutes.map(
    ({ label, path, component }) => {
      return <Route key={label} path={`/${path}`} element={component} />;
    }
  );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        {!isAuthenticated && <>{publicPageRoutes}</>}

        {/* protected route */}
        <Route element={<RequireAuth />}>{protectedPageRoutes}</Route>

        <Route
          path="*"
          element={
            <Navigate
              to={
                isAuthenticated
                  ? role === '2'
                    ? '/vendorhome'
                    : role === '1'
                    ? '/adminhome'
                    : '/'
                  : '/login'
              }
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
