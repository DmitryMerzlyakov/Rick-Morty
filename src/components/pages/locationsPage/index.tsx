import { InfoCard } from '@/components/dummies';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '@/components/wrapper';
import { links } from '@/app/config';
import { useAxiosGet } from '@/hooks/useAxiosGet';
import { ILocation } from '@/models/interfaces';

export const LocationsPage = () => {
  const navigate = useNavigate();
  const { data } = useAxiosGet<ILocation[]>('location');

  return (
    <PageWrapper display="grid">
      {data?.map((location) => (
        <InfoCard
          key={location.id}
          name={location.name}
          type={location.type}
          dimension={location.dimension}
          onClick={() => navigate(links.detail, {state: links.location})}
        />
      ))}
    </PageWrapper>
  );
};
