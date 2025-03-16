import { createContext, lazy } from 'react';
import { IAuthProviderValue, TPageKeys } from './interfaces';

export const BASE_URL = 'https://rickandmortyapi.com/api';

export const AuthContext = createContext<IAuthProviderValue | null>(null);

export const LazyComponent = (page: TPageKeys) => {
  return lazy(() =>
    import('@/components/pages').then((module) => ({ default: module[page] }))
  );
};
