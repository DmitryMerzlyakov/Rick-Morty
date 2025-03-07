export interface IHero {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: string;
}

export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
}

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

export type TData = {
  [key: string]: string | number;
};

export interface IUser {
  name: string;
  nickName: string;
}
