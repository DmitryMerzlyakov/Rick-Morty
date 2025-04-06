import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '/src/models/constants';
import { IEpisode, IGeneralQuery, IHero, ILocation, TApiResources } from '/src/models/interfaces';

interface ResourceMap {
  character: IHero[];
  episode: IEpisode[];
  location: ILocation[];
}

export const useAxios = () => {
  const useAxiosGet = (
    resource: TApiResources,
    currentPage: number,
    query?: IGeneralQuery
  ) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<ResourceMap[typeof resource] | null>(null);

    useEffect(() => {
      setLoading(true);
      axios({
        method: 'GET',
        url: `${BASE_URL}/${resource}`,
        params: {
          page: currentPage,
          name: query?.name,
          gender: query?.gender,
          status: query?.status,
          species: query?.species,
          type: query?.type,
          dimension: query?.dimension
        },
      }).then((response) => {
        setData((prevData) => {
          const existingData = prevData || []
          return [...existingData, ...response.data.results]
        });
      }).finally(() => setLoading(false))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resource, JSON.stringify(query), currentPage]);

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
