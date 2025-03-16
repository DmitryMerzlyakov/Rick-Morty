import styles from './styles.module.css';
import { ArrowImage } from '@/assets/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Title } from '@/components/ui';
import { useAxios } from '@/hooks/useAxios';
import { SubTitle } from '@/components/ui/subtitle';
import { useEffect, useState } from 'react';

interface IHeroEpisode {
  date: string;
  name: string;
}

type ResourceType = 'hero' | 'location' | 'episode';

export const DetailInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [test, setTest] = useState<IHeroEpisode[]>([]);
  const { useAxiosGetHeroesById, useAxiosGetEpisodeById, useAxiosGetLocationById } = useAxios();

  const currentData = (type: ResourceType, id: number) => {
    switch (type) {
      case 'hero':
        const heroData = useAxiosGetHeroesById(id);
        return heroData.heroById;
      case 'episode':
        const episodeData = useAxiosGetEpisodeById(id);
        return episodeData.episodeById;
      case 'location':
        const locationData = useAxiosGetLocationById(id);
        return locationData.locationById;
      default:
        return null;
    }
  }

  const data = currentData(location.state.type, location.state.id);

  // const getEpisodesForHeroById = () => {
  //   const acumIdArr: number[] = [];
  //   const heroEpisode: IHeroEpisode[] = [];
  //   if (location.state.type === 'hero' && data && 'episode' in data) {
  //     data.episode.forEach(episod => acumIdArr.push(Number(episod.split('/').at(-1))));
  //   };
  //   const { episodeById } = useAxiosGetEpisodeById(acumIdArr);

  //   Array.isArray(episodeById) && episodeById.map(id =>
  //     heroEpisode.push({ date: id.air_date, name: id.name })
  //   );

  //   return heroEpisode;
  // };

  // getEpisodesForHeroById()

  useEffect(() => {
    const acumIdArr: number[] = [];
    if (location.state.type === 'hero' && data && 'episode' in data) {
      data.episode.forEach(episod => acumIdArr.push(Number(episod.split('/').at(-1))));
    }

    const { episodeById } = useAxiosGetEpisodeById(acumIdArr);

    console.log(episodeById);

    Array.isArray(episodeById) && episodeById.map(id =>
      setTest(prev => [...prev, {
        date: id.air_date,
        name: id.name
      }])
    );
  }, [data])

  return (
    <>
      {
        data &&
        <div className={styles.detail}>
          <div className={styles.detail__info}>
            <Button onClick={() => navigate(-1)} variant='text' className={styles.detail__info_button}>
              <ArrowImage />
              GO BACK
            </Button>
            <div className={styles.detail__info_person}>
              {('image' in data && data.image) &&
                <img src={data.image} alt="Hero Image" className={styles.detail__info_person_image} />
              }
              {('name' in data && data.name) &&
                <Title fontWeight='700'>{data.name}</Title>
              }
            </div>
          </div>
          <div className={styles.detail__more}>
            <div className={styles.detail__more_info}>
              <Title fontWeight='500'>Informations</Title>
              <div className={styles.detail__more_info_fields}>
                <Title fontWeight='300'>Gender</Title>
                {('gender' in data && data.gender) &&
                  <SubTitle>{data.gender}</SubTitle>
                }
              </div>
              <div className={styles.detail__more_info_fields}>
                <Title fontWeight='300'>Status</Title>
                {('status' in data && data.status) &&
                  <SubTitle>{data.status}</SubTitle>
                }
              </div>
              <div className={styles.detail__more_info_fields}>
                <Title fontWeight='300'>Specie</Title>
                {('species' in data && data.species) &&
                  <SubTitle>{data.species}</SubTitle>
                }
              </div>
              <div className={styles.detail__more_info_fields}>
                <Title fontWeight='300'>Origin</Title>
                {('origin' in data && data.origin) &&
                  <SubTitle>{data.origin.name}</SubTitle>
                }
              </div>
              {('type' in data && data.type) &&
                <div className={styles.detail__more_info_fields}>
                  <Title fontWeight='300'>Type</Title>
                  <SubTitle>{data.type}</SubTitle>
                </div>
              }
            </div>
            <div className={styles.detail__more_info}>
              <Title fontWeight='500'>Episode</Title>
            </div>
          </div>
        </div>
      }
    </>
  );
};
