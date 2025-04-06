import styles from './styles.module.scss';
import { ArrowImage } from '/src/assets/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Title } from '/src/components/ui';
import { SubTitle } from '/src/components/ui/subtitle';
import { useEffect, useState } from 'react';
import { IHero } from '/src/models/interfaces';
import { useCurrentData } from '/src/hooks/useCurrentData';
import { EpisodesById } from './episodesById';
import { HeroesById } from './heroesById';


export const DetailInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentData } = useCurrentData();
  const [detailArrId, setDetailArrId] = useState<number[]>([]);

  const data = currentData(location.state.type, location.state.id);

  const fillingId = (dataArr: string[], returnArr: number[]) => {
    dataArr.forEach((item: string) =>
      returnArr.push(Number(item.split('/').at(-1)))
    );

    return returnArr
  }

  useEffect(() => {
    const acumIdArr: number[] = [];
    if (location.state.type === 'hero' && data && 'episode' in data) fillingId(data.episode, acumIdArr)
    if (location.state.type === 'location' && data && 'residents' in data) fillingId(data.residents, acumIdArr)
    if (location.state.type === 'episode' && data && 'characters' in data) fillingId(data.characters, acumIdArr)

    setDetailArrId(acumIdArr);
  }, [data, location.state.type]);

  return (
    <>
      {data && (
        <div className={styles.detail}>
          <div className={styles.detail__info}>
            <Button
              onClick={() => navigate(-1)}
              variant='text'
              className={styles.detail__info_button}
            >
              <ArrowImage />
              GO BACK
            </Button>
            <div className={styles.detail__info_person}>
              {'image' in data && data.image && (
                <img
                  src={data.image}
                  alt='Hero Image'
                  className={styles.detail__info_person_image}
                />
              )}
              {'name' in data && data.name && (
                <Title fontWeight='700'>{data.name}</Title>
              )}
              {location.state.type !== 'hero' &&
                <div className={styles.detail__info_person_fields}>
                  {'episode' in data && data.episode && (
                    <div className={styles.detail__info_person_fields_wrapper}>
                      <Title fontWeight='600'>Episode:</Title>
                      <SubTitle>{data.episode}</SubTitle>
                    </div>
                  )}
                  {'type' in data && data.type && (
                    <div className={styles.detail__info_person_fields_wrapper}>
                      <Title fontWeight='600'>Type:</Title>
                      <SubTitle>{data.type}</SubTitle>
                    </div>
                  )}
                  {'dimension' in data && data.dimension && (
                    <div className={styles.detail__info_person_fields_wrapper}>
                      <Title fontWeight='600'>Dimension:</Title>
                      <SubTitle>{data.dimension}</SubTitle>
                    </div>
                  )}
                  {'air_date' in data && data.air_date && (
                    <div className={styles.detail__info_person_fields_wrapper}>
                      <Title fontWeight='600'>Created:</Title>
                      <SubTitle>{data.air_date}</SubTitle>
                    </div>
                  )}
                </div>}
            </div>
          </div>
          {location.state.type === 'hero' ?
            <EpisodesById
              data={data as IHero}
              episodeId={detailArrId}
            />
            :
            <HeroesById
              heroesId={detailArrId}
              resourse={location.state.type}
            />
          }
        </div>
      )}
    </>
  );
};
