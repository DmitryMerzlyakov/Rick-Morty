import { InfoCard } from '/src/components/dummies';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '/src/components/wrapper';
import { links } from '/src/app/config';
import { useAxios } from '/src/hooks/useAxios';
import { LocationImage } from '/src/assets/icons';
import { useState } from 'react';
import { useSearchQueryParams } from '/src/hooks/useSearch';
import { FilterForm } from '../../widgets/forms';
import styles from './styles.module.scss';
import { Button } from '../../ui';

const EpisodesPage = () => {
  const navigate = useNavigate();
  const { useAxiosGet } = useAxios();
  const { getSearchData } = useSearchQueryParams();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data } = useAxiosGet('episode', currentPage, getSearchData());

  return (
    <div className={styles.episodes}>
      <LocationImage />
      <FilterForm name />
      <PageWrapper display='grid'>
        {data?.map((episode) => (
          <InfoCard
            key={episode.id}
            name={episode.name}
            air_date={'air_date' in episode ? episode.air_date : ''}
            onClick={() =>
              navigate(`${links.detail}/${episode.id}`, {
                state: {
                  id: episode.id,
                  type: 'episode',
                },
              })
            }
          />
        ))}
      </PageWrapper>
      <Button
        size='xl'
        className={styles.episodes__button}
        onClick={() => setCurrentPage((prev: number) => prev + 1)}
      >
        More
      </Button>
    </div>
  );
};

export default EpisodesPage;
