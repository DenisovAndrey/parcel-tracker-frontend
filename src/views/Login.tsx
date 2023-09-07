import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import { useAuthContext } from '../providers/LoginProvider';
import { RouterPaths } from '../router/routerPaths';

export const LoginView: FC = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleLoginSubmit = useCallback((e: React.FormEvent<HTMLFormElement>, email: string) => {
    e.preventDefault();
    login(email).then(() => {
      navigate(RouterPaths.ROOT);
    });
  }, [login, navigate]);

  return (<LoginForm handleSubmit={handleLoginSubmit} />);
};
