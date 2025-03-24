import { InfoCard } from '/src/components/dummies';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '/src/components/wrapper';
import { links } from '/src/app/config';
import { useAxios } from '/src/hooks/useAxios';
import { PortalImage } from '/src/assets/icons';
import { useState } from 'react';
import { useSearchQueryParams } from '/src/hooks/useSearch';
import { FilterForm } from '../../widgets/forms';
import styles from './styles.module.scss';

const LocationsPage = () => {
  const navigate = useNavigate();
  const { useAxiosGet } = useAxios();
  const { getSearchData } = useSearchQueryParams();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data } = useAxiosGet('location', currentPage, getSearchData());

  return (
    <div className={styles.locations}>
      <PortalImage />
      <FilterForm name type dimension />
      <PageWrapper display="grid">
        {data?.map((location) => (
          <InfoCard
            key={location.id}
            name={location.name}
            type={'type' in location ? location.type : ''}
            onClick={() =>
              navigate(`${links.detail}/${location.id}`, {
                state: {
                  id: location.id,
                  type: 'location',
                },
              })
            }
          />
        ))}
      </PageWrapper>
    </div>
  );
};

export default LocationsPage;
