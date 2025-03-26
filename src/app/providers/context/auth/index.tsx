import { useState } from 'react';
import { IUser } from '/src/models/interfaces';
import { AuthContext } from '/src/models/constants';

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
