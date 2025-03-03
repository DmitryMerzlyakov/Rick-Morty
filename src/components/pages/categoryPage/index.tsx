import { Person } from '@/components/dummies';
import heroesData from '@/data/characters.json';
import episodesData from '@/data/episode.json';
import locationsData from '@/data/location.json';
import { useLocation } from 'react-router-dom';
import { PageWrapper } from '@/components/wrapper';
import { List } from '@/components/ui';

enum PagesName {
  heroes = 'heroes',
  episodes = 'episodes',
  location = 'locations',
}

export const CategoryPage = () => {
  const location = useLocation();

  return (
    <PageWrapper
      type={`${
        location.pathname.split('/').join('') === PagesName.heroes
          ? 'grid'
          : 'flex'
      }`}
    >
      {location.pathname.split('/').join('') === PagesName.heroes &&
        heroesData.map((hero) => (
          <Person key={hero.id} name={hero.name} image={hero.image} />
        ))}
      {location.pathname.split('/').join('') === PagesName.location && (
        <List data={locationsData} />
      )}
      {location.pathname.split('/').join('') === PagesName.episodes && (
        <List data={episodesData} />
      )}
    </PageWrapper>
  );
};
