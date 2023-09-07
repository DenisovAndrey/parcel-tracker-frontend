import React, { FC, ReactElement } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoginView } from '../views/Login';
import { RouterPaths } from './routerPaths';
import { OrdersView } from '../views/Orders';
import { RootState } from '../redux';

const PrivateRoute: FC<{ children: ReactElement }> = ({ children }) => {
  const isLoggedIn = useSelector<RootState>((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={RouterPaths.LOGIN} />;
  }

  return children;
};

export const router = createBrowserRouter([
  {
    path: RouterPaths.LOGIN,
    element: <LoginView />,
  },
  {
    path: RouterPaths.ROOT,
    element: <PrivateRoute><OrdersView /></PrivateRoute>,
  },
]);
