import heroesData from '@/data/characters.json';
import episodesData from '@/data/episode.json';
import locationsData from '@/data/location.json';
import { DetailHero, DetailList } from '@/components/dummies';
import { PageWrapper } from '@/components/wrapper';
import { PagesName } from '@/models/enums';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { IHero, TData } from '@/models/interfaces';

export const DetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState<string>('');

  useEffect(() => {
    setCurrentPage(location.state);
  }, [location]);

  const currentDetail = (page: PagesName.episodes | PagesName.heroes | PagesName.location) => {
    switch (page) {
      case PagesName.heroes:
        return heroesData.find(hero => hero.id === Number(id));
      case PagesName.location:
        return locationsData.find(location => location.id === Number(id));
      case PagesName.episodes:
        return episodesData.find(episode => episode.id === Number(id))
      default:
        break;
    }
  }

  return (
    <PageWrapper>
      {currentPage === PagesName.heroes && <DetailHero data={currentDetail(PagesName.heroes) as IHero} />}
      {currentPage === PagesName.location && <DetailList data={currentDetail(PagesName.location) as TData} />}
      {currentPage === PagesName.episodes && <DetailList data={currentDetail(PagesName.episodes) as TData} />}
    </PageWrapper>
  );
};
