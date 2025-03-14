import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '@/models/constants';
import { IGeneralQuery, TApiResources } from '@/models/interfaces';

export const useAxiosGet = <T>(
  resource: TApiResources,
  currentPage?: number,
  query?: IGeneralQuery
) => {
  const [data, setData] = useState<T | null>(null);
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
