import { InfoCard } from '@/components/dummies';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '@/components/wrapper';
import { links } from '@/app/config';
import { useAxios } from '@/hooks/useAxios';
import { PortalImage } from '@/assets/icons';

export const LocationsPage = () => {
  const navigate = useNavigate();
  const { useAxiosGet } = useAxios();
  const { data } = useAxiosGet('location');

  return (
    <>
      <PortalImage />
      <PageWrapper display="grid">
        {data?.map((location) => (
          <InfoCard
            key={location.id}
            name={location.name}
            type={'type' in location ? location.type : ''}
            onClick={() => navigate(links.detail)}
          />
        ))}
      </PageWrapper>
    </>
  );
};
