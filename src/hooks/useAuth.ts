import { IAuthProviderValue } from '@/models/interfaces';
import { Context, useContext } from 'react';

interface IUseAuth {
  context: Context<IAuthProviderValue | null>;
}

export const useAuth = ({ context }: IUseAuth): IAuthProviderValue => {
  const currentContext = useContext(context);
  if (!currentContext) {
    throw new Error('useAuth необходимо использовать внутри AuthProvider');
  }
  return currentContext;
};
