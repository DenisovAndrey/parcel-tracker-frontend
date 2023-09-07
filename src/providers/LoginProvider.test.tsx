import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { AuthProvider, useAuthContext } from './LoginProvider';

describe('useAuthContext', () => {
  it('should return the initial context value', () => {
    const { result } = renderHook(() => useAuthContext(), {
      wrapper: AuthProvider,
    });

    const { email, isLoggedIn, login } = result.current;

    expect(isLoggedIn).toBe(false);
    expect(email).toBeNull();
    expect(typeof login).toBe('function');
  });

  it('should update the context value when logging in', () => {
    const { result } = renderHook(() => useAuthContext(), {
      wrapper: AuthProvider,
    });

    const { login } = result.current;

    act(() => {
      login('test@example.com');
    });

    const updatedEmail = result.current.email;
    const updatedIsLoggedIn = result.current.isLoggedIn;

    expect(updatedIsLoggedIn).toBe(true);
    expect(updatedEmail).toBe('test@example.com');
  });
});
