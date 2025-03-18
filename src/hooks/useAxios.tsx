import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '@/models/constants';
import {
  IEpisode,
  IGeneralQuery,
  IHero,
  ILocation,
  TApiResources,
} from '@/models/interfaces';

interface ResourceMap {
  character: IHero[];
  episode: IEpisode[];
  location: ILocation[];
}

export const useAxios = () => {
  const useAxiosGet = (
    resource: TApiResources,
    currentPage?: number,
    query?: IGeneralQuery
  ) => {
    const [data, setData] = useState<ResourceMap[typeof resource] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      setLoading((prev) => !prev);
      axios({
        method: 'GET',
        url: `${BASE_URL}/${resource}`,
        params: {
          page: currentPage,
          q: query,
        },
      }).then((response) => {
        setData(response.data.results);
        setLoading((prev) => !prev);
      });
    }, [resource, currentPage, query]);

    return { data, loading };
  };

  const useAxiosGetLocationById = (id: number | number[]) => {
    const [locationById, setLocationById] = useState<
      ILocation | ILocation[] | null
    >(null);
    const [loadingById, setLoadingById] = useState<boolean>(true);

    useEffect(() => {
      setLoadingById((prev) => !prev);
      axios({
        method: 'GET',
        url: `${BASE_URL}/location/${id}`,
      }).then((response) => {
        setLocationById(response.data);
        setLoadingById((prev) => !prev);
      });
    }, [id]);

    return { locationById, loadingById };
  };

  const useAxiosGetHeroesById = (id: number | number[]) => {
    const [heroById, setHeroById] = useState<IHero | IHero[] | null>(null);
    const [loadingById, setLoadingById] = useState<boolean>(true);

    useEffect(() => {
      setLoadingById((prev) => !prev);
      axios({
        method: 'GET',
        url: `${BASE_URL}/character/${id}`,
      }).then((response) => {
        setHeroById(response.data);
        setLoadingById((prev) => !prev);
      });
    }, [id]);

    return { heroById, loadingById };
  };

  const useAxiosGetEpisodeById = (id: number | number[]) => {
    const [episodeById, setEpisodeById] = useState<
      IEpisode | IEpisode[] | null
    >(null);
    const [loadingById, setLoadingById] = useState<boolean>(true);

    useEffect(() => {
      setLoadingById((prev) => !prev);
      axios({
        method: 'GET',
        url: `${BASE_URL}/episode/${id}`,
      }).then((response) => {
        setEpisodeById(response.data);
        setLoadingById((prev) => !prev);
      });
    }, [id]);

    return { episodeById, loadingById };
  };

  return {
    useAxiosGet,
    useAxiosGetLocationById,
    useAxiosGetHeroesById,
    useAxiosGetEpisodeById,
  };
};
