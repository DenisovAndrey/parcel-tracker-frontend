import React, { FC, useCallback } from 'react';
import { LoginForm } from '../components/LoginForm';

export const LoginView: FC = () => {
  const handleLoginSubmit = useCallback((e: React.FormEvent<HTMLFormElement>, email: string) => {
    e.preventDefault();
    console.log(email);
  }, []);

  return (<LoginForm handleSubmit={handleLoginSubmit} />);
};
