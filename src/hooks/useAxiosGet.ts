import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '@/models/constants';
import { IGeneralQuery, IHero, TApiResources } from '@/models/interfaces';

export const useAxiosGet = (
  resource: TApiResources,
  currentPage?: number,
  query?: IGeneralQuery
) => {
  const [data, setData] = useState<IHero[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(prev => !prev)
    axios({
      method: 'GET',
      url: `${BASE_URL}/${resource}`,
      params: {
        page: currentPage,
        q: query,
      },
    }).then((response) => {
      setData(response.data.results);
      setLoading(prev => !prev)
    });
  }, [resource, currentPage, query]);

  return { data, loading };
};
