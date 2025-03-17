import { InfoCard } from '@/components/dummies';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '@/components/wrapper';
import { links } from '@/app/config';
import { useAxios } from '@/hooks/useAxios';
import { TitleImage } from '@/assets/icons';

export const HeroesPage = () => {
  const { useAxiosGet } = useAxios();
  const navigate = useNavigate();
  const { data } = useAxiosGet('character');

  return (
    <>
      <TitleImage />
      <PageWrapper display='grid'>
        {data?.map((hero) => (
          <InfoCard
            key={hero.id}
            name={hero.name}
            image={'image' in hero ? hero.image : ''}
            species={'species' in hero ? hero.species : ''}
            onClick={() => navigate(`${links.detail}/${hero.id}`, {
              state: {
                id: hero.id,
                type: 'hero'
              }
            })}
          />
        ))}
      </PageWrapper>
    </>
  );
};
