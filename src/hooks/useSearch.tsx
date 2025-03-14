import { useSearchParams } from 'react-router-dom';

export const useSearchQueryParams = () => {
  const [, setSearch] = useSearchParams();

  const createSearch = (data: { [key: string]: string }) => {
    for (const key in data) {
      if (!data[key]) delete data[key];
    }

    setSearch(() => {
      return new URLSearchParams({ ...data });
    });
  };

  const getSearchData = (excludeParams?: string[]) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (excludeParams) {
      excludeParams.forEach((param) => searchParams.delete(param));
    }
    return Object.fromEntries(searchParams.entries());
  };

  const resetSearch = (FieldsNames: { [key: string]: string }) => {
    setSearch((prevParams) => {
      const data = Object.fromEntries(prevParams.entries());

      Object.entries(FieldsNames).forEach(([_, value]) => {
        delete data[value];
      });

      return new URLSearchParams(data);
    });
  };

  return { createSearch, getSearchData, resetSearch };
};
