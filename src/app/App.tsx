import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import { AuthProvider } from '@/app/providers';

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};
