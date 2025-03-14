import { InfoCard } from '@/components/dummies';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '@/components/wrapper';
import { links } from '@/app/config';
import { useAxiosGet } from '@/hooks/useAxiosGet';
import { IHero } from '@/models/interfaces';

export const HeroesPage = () => {
  const navigate = useNavigate();
  const { data } = useAxiosGet<IHero[]>('character');

  return (
    <PageWrapper>
      {data?.map((hero) => (
        <InfoCard
          key={hero.id}
          name={hero.name}
          image={hero.image}
          species={hero.species}
          onClick={() => navigate(links.detail, {state: links.heroes})}
        />
      ))}
    </PageWrapper>
  );
};
