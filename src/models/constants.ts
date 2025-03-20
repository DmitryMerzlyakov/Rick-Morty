import { createContext } from 'react';
import { IAuthProviderValue } from './interfaces';

export const BASE_URL = 'https://rickandmortyapi.com/api';

export const AuthContext = createContext<IAuthProviderValue | null>(null);

// export const LazyComponent = <T extends React.FC>(route: string, page: string): React.LazyExoticComponent<T> => {
//   return lazy(() => import(`/src/components/pages/${route}`).then((module) => ({ default: module[page]})))
// }
