import { createContext, lazy } from 'react';
import { IAuthProviderValue, IOption } from './interfaces';

export const BASE_URL = 'https://rickandmortyapi.com/api';

export const AuthContext = createContext<IAuthProviderValue | null>(null);

export const LazyDetailPage = lazy(() => import('../components/pages/detailPage'));
export const LazyEpisodesPage = lazy(() => import('../components/pages/episodesPage'));
export const LazyErrorPage = lazy(() => import('../components/pages/errorPage'));
export const LazyHeroesPage = lazy(() => import('../components/pages/heroesPage'));
export const LazyLocationsPage = lazy(() => import('../components/pages/locationsPage'));
export const LazyLoginPage = lazy(() => import('../components/pages/loginPage'));

export const optionsGender: IOption[] = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'genderless', label: 'Genderless' },
  { value: 'unknown', label: 'Unknown' },
];

export const optionsStatus: IOption[] = [
  { value: 'alive', label: 'Alive' },
  { value: 'dead', label: 'Dead' },
  { value: 'unknown', label: 'Unknown' },
];

export const optionSpecies: IOption[] = [
  { value: 'Human', label: 'Human' },
  { value: 'Alien', label: 'Alien' },
  { value: 'Cronenberg', label: 'Cronenberg' },
  { value: 'Robot', label: 'Robot' },
];

export const optionTypes: IOption[] = [
  { value: 'Planet', label: 'Planet' },
  { value: 'Resort', label: 'Resort' },
  { value: 'Dream', label: 'Dream' },
  { value: 'TV', label: 'TV' },
  { value: 'Space station', label: 'Space station' },
  { value: 'unknown', label: 'Unknown' },
];

export const optionDimension: IOption[] = [
  { value: 'Dimension C-137', label: 'Dimension C-137' },
  { value: 'Post-Apocalyptic Dimension', label: 'Post-Apocalyptic Dimension' },
  { value: 'Replacement Dimension', label: 'Replacement Dimension' },
  { value: 'Cronenberg Dimension', label: 'Cronenberg Dimension' },
  { value: 'Fantasy Dimension', label: 'Fantasy Dimension' },
  { value: 'unknown', label: 'Unknown' },
];
