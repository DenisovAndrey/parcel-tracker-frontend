import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginForm } from '../components/LoginForm';
import { RouterPaths } from '../router/routerPaths';
import { login } from '../redux/slices/authSlice';

export const LoginView: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginSubmit = useCallback((e: React.FormEvent<HTMLFormElement>, email: string) => {
    e.preventDefault();
    dispatch(login(email));
    navigate(RouterPaths.ROOT);
  }, [dispatch, navigate]);

  return (<LoginForm handleSubmit={handleLoginSubmit} />);
};
