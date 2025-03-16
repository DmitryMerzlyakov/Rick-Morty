import { InfoCard } from '@/components/dummies';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '@/components/wrapper';
import { links } from '@/app/config';
import { useAxios } from '@/hooks/useAxios';
import { IEpisode } from '@/models/interfaces';
// import { useSearchQueryParams } from '@/hooks/useSearch';

export const EpisodesPage = () => {
  const navigate = useNavigate();
  const { useAxiosGet } = useAxios();
  // const { createSearch } = useSearchQueryParams();
  const { data } = useAxiosGet('episode');

  const handleClickItem = (id: number) => {

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
          air_date={'air_date' in episode ? episode.air_date : ''}
          onClick={() => navigate(`${links.detail}/${episode.id}`)}
        />
      ))}
    </PageWrapper>
  );
};
