import { InfoCard } from '/src/components/dummies';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '/src/components/wrapper';
import { links } from '/src/app/config';
import { useAxios } from '/src/hooks/useAxios';
import { TitleImage } from '/src/assets/icons';
import { FilterForm } from '/src/components/widgets/forms';
import styles from './styles.module.scss';
import { useSearchQueryParams } from '/src/hooks/useSearch';
import { useState } from 'react';

const HeroesPage = () => {
  const navigate = useNavigate();
  const { useAxiosGet } = useAxios();
  const { getSearchData } = useSearchQueryParams();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data } = useAxiosGet('character', currentPage, getSearchData());

  return (
    <div className={styles.heroes}>
      <TitleImage />
      <FilterForm />
      <PageWrapper display="grid">
        {data?.map((hero) => (
          <InfoCard
            key={hero.id}
            name={hero.name}
            image={'image' in hero ? hero.image : ''}
            species={'species' in hero ? hero.species : ''}
            onClick={() =>
              navigate(`${links.detail}/${hero.id}`, {
                state: {
                  id: hero.id,
                  type: 'hero',
                },
              })
            }
          />
        ))}
      </PageWrapper>
    </div>
  );
};

export default HeroesPage;
