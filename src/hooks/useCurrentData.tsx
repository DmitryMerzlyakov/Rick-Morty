import { IEpisode, IHero, ILocation, ResourceType } from '@/models/interfaces';
import { useAxios } from './useAxios';

export const useCurrentData = () => {
  const {
    useAxiosGetHeroesById,
    useAxiosGetEpisodeById,
    useAxiosGetLocationById,
  } = useAxios();

  const resourceHooks = {
    hero: useAxiosGetHeroesById,
    episode: useAxiosGetEpisodeById,
    location: useAxiosGetLocationById,
  };
  const currentData = (type: ResourceType, id: number | number[]) => {
    const hook = resourceHooks[type];
    if (!hook) {
      return null;
    }

    const result = hook(id);

    switch (type) {
      case 'hero':
        return (result as { heroById: IHero | null }).heroById;
      case 'episode':
        return (result as { episodeById: IEpisode | null }).episodeById;
      case 'location':
        return (result as { locationById: ILocation | null }).locationById;
    }
  };

  return { currentData };
};
