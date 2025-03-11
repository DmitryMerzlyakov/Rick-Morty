import { AuthContext } from '@/models/constants';
import { IUser } from '@/models/interfaces';
import { useState } from 'react';

interface IAuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const signIn = (user: IUser, callback: () => void) => {
    setUser(user);
    callback();
  };

  const signOut = (callback: () => void) => {
    setUser(null);
    callback();
  };

  const providerValue = {
    user,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};
