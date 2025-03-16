export interface IHero {
  id: number;
  name: string;
  status: THeroStatus;
  species: string;
  type: string;
  gender: THeroGender;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string[];
  created: string;
}

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  characters: string[];
  url: string;
  created: string;
}

export type TData = {
  [key: string]: string | number;
};

export interface IUser {
  name: string;
  nickName: string;
}

export interface IAuthProviderValue {
  user: IUser | null;
  signIn: (user: IUser, callback: () => void) => void;
  signOut: (callback: () => void) => void;
}

export type TPageKeys =
  | 'CategoryPage'
  | 'DetailPage'
  | 'MainPage'
  | 'LoginPage'
  | 'ErrorPage';

export type TApiResources = 'character' | 'location' | 'episode';

export type THeroStatus = 'alive' | 'dead' | 'unknown';

export type THeroGender = 'female' | 'male' | 'genderless' | 'unknown';

export interface IGeneralQuery {
  name?: string;
  status?: THeroStatus;
  species?: string;
  type?: string;
  gender?: THeroGender;
  dimension?: string;
  episode?: number | number[];
}

export interface IAxiosGetByIdParams {
  resource: TApiResources;
  id?: number;
  // type: IHero | ILocation | IEpisode;
}
