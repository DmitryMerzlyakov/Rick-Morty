import { links } from '/src/app/config';
import { useAuth } from '/src/hooks/useAuth';
import { AuthContext } from '/src/models/constants';
import { Navigate } from 'react-router-dom';

interface PrivateRouteWrapperProps {
  children: React.ReactNode;
}

export const PrivateRouteWrapper = ({ children }: PrivateRouteWrapperProps) => {
  const auth = useAuth({ context: AuthContext });

  if (auth.user === null) {
    return <Navigate to={`/${links.login}`} />;
  }

  return children;
};
