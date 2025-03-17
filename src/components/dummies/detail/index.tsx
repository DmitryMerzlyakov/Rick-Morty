import styles from './styles.module.css';
import { ArrowImage, CircleImage } from '@/assets/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Title } from '@/components/ui';
import { useAxios } from '@/hooks/useAxios';
import { SubTitle } from '@/components/ui/subtitle';
import { useEffect, useState } from 'react';
import { IEpisode, IHero, ILocation } from '@/models/interfaces';
import classNames from 'classnames';
import { links } from '@/app/config';

// interface IHeroEpisode {
//   date: string;
//   name: string;
// }

type ResourceType = 'hero' | 'location' | 'episode';

export const DetailInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [detailArrId, setDetailArrId] = useState<number[]>([]);
  const {
    useAxiosGetHeroesById,
    useAxiosGetEpisodeById,
    useAxiosGetLocationById,
  } = useAxios();

  const resourceHooks = {
    hero: useAxiosGetHeroesById,
    episode: useAxiosGetEpisodeById,
    location: useAxiosGetLocationById,
  };

  const currentData = (type: ResourceType, id: number | number[]) => {
    const hook = resourceHooks[type];
    if (!hook) {
      return null;
    }

    const result = hook(id);

    switch (type) {
      case 'hero':
        return (result as { heroById: IHero | null }).heroById;
      case 'episode':
        return (result as { episodeById: IEpisode | null }).episodeById;
      case 'location':
        return (result as { locationById: ILocation | null }).locationById;
      default:
        return null;
    }
  };

  const data = currentData(location.state.type, location.state.id);

  useEffect(() => {
    const acumIdArr: number[] = [];
    if (location.state.type === 'hero' && data && 'episode' in data) {
      data.episode.forEach((episod) =>
        acumIdArr.push(Number(episod.split('/').at(-1)))
      );
    }

    setDetailArrId(acumIdArr);
  }, [data, location.state.type]);

  const dataDetail = currentData('episode', detailArrId);

  const handleClickDetail = (id: number) => {
    navigate(`/episode/${links.detail}/${id}`, {
      state: {
        id: id,
        type: 'episode',
      }, 
      replace: true
    })
  }

  return (
    <>
      {data && (
        <div className={styles.detail}>
          <div className={styles.detail__info}>
            <Button
              onClick={() => navigate(-1)}
              variant="text"
              className={styles.detail__info_button}
            >
              <ArrowImage />
              GO BACK
            </Button>
            <div className={styles.detail__info_person}>
              {'image' in data && data.image && (
                <img
                  src={data.image}
                  alt="Hero Image"
                  className={styles.detail__info_person_image}
                />
              )}
              {'name' in data && data.name && (
                <Title fontWeight="700">{data.name}</Title>
              )}
            </div>
          </div>
          <div className={styles.detail__more}>
            <div className={styles.detail__more_info}>
              <Title fontWeight="600">Informations:</Title>
              <div className={styles.detail__more_info_fields}>
                <Title fontWeight="300">Gender</Title>
                {'gender' in data && data.gender && (
                  <SubTitle>{data.gender}</SubTitle>
                )}
              </div>
              <div className={styles.detail__more_info_fields}>
                <Title fontWeight="300">Status</Title>
                {'status' in data && data.status && (
                  <div className={styles.detail__more_info_fields_img}>
                    <SubTitle>{data.status}</SubTitle>
                    <CircleImage
                      className={classNames(styles[`img__${data.status}`])}
                    />
                  </div>
                )}
              </div>
              <div className={styles.detail__more_info_fields}>
                <Title fontWeight="300">Specie</Title>
                {'species' in data && data.species && (
                  <SubTitle>{data.species}</SubTitle>
                )}
              </div>
              <div className={styles.detail__more_info_fields}>
                <Title fontWeight="300">Origin</Title>
                {'origin' in data && data.origin && (
                  <SubTitle>{data.origin.name}</SubTitle>
                )}
              </div>
              {'type' in data && data.type && (
                <div className={styles.detail__more_info_fields}>
                  <Title fontWeight="300">Type</Title>
                  <SubTitle>{data.type}</SubTitle>
                </div>
              )}
            </div>
            <div className={styles.detail__more_info}>
              <Title fontWeight="600">Episode:</Title>
              <div className={styles.detail__more_subinfo}>
                {Array.isArray(dataDetail) &&
                  dataDetail.map((item) => (
                    <Button
                      key={item.id}
                      variant="text"
                      className={styles.detail__more_info_fields}
                      onClick={() =>  handleClickDetail(item.id)}
                    >
                      <Title>{item.name}</Title>
                      <SubTitle>{item.air_date}</SubTitle>
                    </Button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
