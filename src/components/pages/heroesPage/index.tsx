import { Hero } from '@/components/dummies';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '@/components/wrapper';
import { links } from '@/app/config';
import { useAxiosGet } from '@/hooks/useAxiosGet';

export const HeroesPage = () => {
  const navigate = useNavigate();
  const { data } = useAxiosGet('character');

  return (
    <PageWrapper>
      {data?.map((hero) => (
        <Hero
          key={hero.id}
          name={hero.name}
          image={hero.image}
          species={hero.species}
          onClick={() =>
            navigate(`${links.heroesDetail}/${hero.id}`, {
              state: links.heroes,
            })
          }
        />
      ))}
    </PageWrapper>
  );
};
