import { InfoCard } from '@/components/dummies';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '@/components/wrapper';
import { links } from '@/app/config';
import { useAxios } from '@/hooks/useAxios';

export const EpisodesPage = () => {
  const navigate = useNavigate();
  const { useAxiosGet } = useAxios();
  const { data } = useAxiosGet('episode');

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
