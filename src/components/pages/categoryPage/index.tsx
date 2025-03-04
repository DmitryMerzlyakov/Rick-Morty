import { Hero } from '@/components/dummies';
import heroesData from '@/data/characters.json';
import episodesData from '@/data/episode.json';
import locationsData from '@/data/location.json';
import { useLocation, useNavigate } from 'react-router-dom';
import { PageWrapper } from '@/components/wrapper';
import { List } from '@/components/ui';
import { links } from '@/app/config';
import { useEffect, useState } from 'react';
import { PagesName } from '@/models/enums';

export const CategoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<string>('');

  useEffect(() => {
    setCurrentPage(location.pathname.split('/').join(''));
  }, [location]);

  return (
    <PageWrapper>
      {currentPage === PagesName.heroes &&
        heroesData.map((hero) => (
          <Hero
            key={hero.id}
            name={hero.name}
            image={hero.image}
            onClick={() =>
              navigate(`${links.heroesDetail}/${hero.id}`, {
                state: links.heroes,
              })
            }
          />
        ))}
      {currentPage === PagesName.location && (
        <List
          data={locationsData}
          onClick={(id) =>
            navigate(`${links.locationDetail}/${id}`, { state: links.location })
          }
        />
      )}
      {currentPage === PagesName.episodes && (
        <List
          data={episodesData}
          onClick={(id) =>
            navigate(`${links.episodeDetail}/${id}`, { state: links.episode })
          }
        />
      )}
    </PageWrapper>
  );
};
