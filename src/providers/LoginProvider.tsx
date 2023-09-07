import React, {
  createContext, FC, ReactNode, useCallback, useContext, useMemo, useState,
} from 'react';

interface AuthContextType {
  email: null | string;
  isLoggedIn: boolean;
  login: (v: string) => Promise<void>
}
const AuthContext = createContext<AuthContextType>({
  email: null,
  isLoggedIn: false,
  // eslint-disable-next-line @typescript-eslint/require-await
  login: async () => undefined,
});

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [email, setEmail] = useState<string | null>(null);

  // eslint-disable-next-line @typescript-eslint/require-await
  const login = useCallback(async (emailValue: string) => {
    // There is async function intentionally for mock reasons.
    // In real app there would be a service call
    setEmail(emailValue);
  }, []);

  const isLoggedIn = useMemo(() => !!email, [email]);

  const contextValue = useMemo<AuthContextType>(
    () => ({ email, isLoggedIn, login }),
    [email, isLoggedIn, login],
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}
