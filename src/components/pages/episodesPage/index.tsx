import { InfoCard } from '@/components/dummies';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '@/components/wrapper';
import { links } from '@/app/config';
import { useAxiosGet } from '@/hooks/useAxiosGet';
import { IEpisode } from '@/models/interfaces';
// import { useSearchQueryParams } from '@/hooks/useSearch';

export const EpisodesPage = () => {
  const navigate = useNavigate();
  // const { createSearch } = useSearchQueryParams();
  const { data } = useAxiosGet<IEpisode[]>('episode');

  const handleClickItem = (id: number) => {
    navigate(`${links.episodesDetail}/${id}`)
    // createSearch({
    //   resource: resource,
    //   id: String(id),
    // })
  }
  
  return (
    <PageWrapper display="grid">
      {data?.map((episode) => (
        <InfoCard
          key={episode.id}
          name={episode.name}
          air_date={episode.air_date}
          onClick={() => handleClickItem(episode.id)}
        />
      ))}
    </PageWrapper>
  );
};
