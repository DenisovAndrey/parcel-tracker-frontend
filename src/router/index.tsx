import React, { FC, ReactElement } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LoginView } from '../views/Login';
import { RouterPaths } from './routerPaths';
import { useAuthContext } from '../providers/LoginProvider';
import { OrdersView } from '../views/Orders';

const PrivateRoute: FC<{ children: ReactElement }> = ({ children }) => {
  const { isLoggedIn } = useAuthContext();

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
