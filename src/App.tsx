import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './providers/LoginProvider';
import { router } from './router';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
