import { useCurrentData } from '@/hooks/useCurrentData';
import { IHero } from '@/models/interfaces';
import { useRouteDetail } from '@/hooks/useRouteDetail';
import { InfoCard } from '@/components/dummies';
import { PageWrapper } from '@/components/wrapper';
import { SubTitle } from '@/components/ui/subtitle';

interface IHeroesByIdProps {
  heroesId: number[];
  resourse: "episode" | "location";
}

export const HeroesById = ({ heroesId, resourse }: IHeroesByIdProps) => {
  const { currentData } = useCurrentData();
  const { handleClickDetail } = useRouteDetail();

  const dataById = currentData("hero", heroesId);

  return (
    <div>
      <SubTitle fontWeight="600">{resourse === "episode" ? "Cast" : "Residents"}</SubTitle>
      <PageWrapper display="grid">
        {Array.isArray(dataById) &&
          dataById.map((hero: IHero) => (
            <InfoCard
              key={hero.id}
              name={hero.name}
              image={'image' in hero ? hero.image : ''}
              species={'species' in hero ? hero.species : ''}
              onClick={() => handleClickDetail(hero.id, 'character')}
            />
          ))}
      </PageWrapper>
    </div>
  );
};
