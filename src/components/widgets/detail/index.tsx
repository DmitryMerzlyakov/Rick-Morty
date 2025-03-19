import styles from './styles.module.scss';
import { ArrowImage, CircleImage } from '@/assets/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Title } from '@/components/ui';
import { useAxios } from '@/hooks/useAxios';
import { SubTitle } from '@/components/ui/subtitle';
import { useEffect, useState } from 'react';
import { IEpisode, IHero, ILocation } from '@/models/interfaces';
import classNames from 'classnames';
import { links } from '@/app/config';
import { InfoCard } from '../../dummies/card';
import { PageWrapper } from '@/components/wrapper';
import { useCurrentData } from '@/hooks/useCurrentData';
import { useRouteDetail } from '@/hooks/useRouteDetail';
import { HeroSubInfo } from './hero';


export const DetailInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentData } = useCurrentData();
  const { handleClickDetail } = useRouteDetail();
  const [detailArrId, setDetailArrId] = useState<number[]>([]);

  const data = currentData(location.state.type, location.state.id);

  useEffect(() => {
    const acumIdArr: number[] = [];
    if (location.state.type === 'hero' && data && 'episode' in data) {
      data.episode.forEach((episod) =>
        acumIdArr.push(Number(episod.split('/').at(-1)))
      );
    }

    // if (location.state.type === 'location' && data && 'residents' in data) {
    //   data.residents.forEach((resident) =>
    //     acumIdArr.push(Number(resident.split('/').at(-1)))
    //   );
    // }

    // if (location.state.type === 'episode' && data && 'characters' in data) {
    //   data.characters.forEach((character) =>
    //     acumIdArr.push(Number(character.split('/').at(-1)))
    //   );
    // }

    setDetailArrId(acumIdArr);
  }, [data, location.state.type]);

  const heroByArrIdDetail = currentData('hero', detailArrId);

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
              <div className={styles.detail__info_person_fields}>
                {'episode' in data && data.episode && (
                  <div className={styles.detail__info_person_fields_wrapper}>
                    <Title fontWeight="600">Episode:</Title>
                    <SubTitle>{data.episode}</SubTitle>
                  </div>
                )}
                {'type' in data && data.type && (
                  <div className={styles.detail__info_person_fields_wrapper}>
                    <Title fontWeight="600">Type:</Title>
                    <SubTitle>{data.type}</SubTitle>
                  </div>
                )}
                {'dimension' in data && data.dimension && (
                  <div className={styles.detail__info_person_fields_wrapper}>
                    <Title fontWeight="600">Dimension:</Title>
                    <SubTitle>{data.dimension}</SubTitle>
                  </div>
                )}
                {'air_date' in data && data.air_date && (
                  <div className={styles.detail__info_person_fields_wrapper}>
                    <Title fontWeight="600">Created:</Title>
                    <SubTitle>{data.air_date}</SubTitle>
                  </div>
                )}
              </div>
            </div>
          </div>
          {location.state.type === 'hero' && (
            // <div className={styles.detail__episode}>
            //   <div className={styles.detail__episode_info}>
            //     <Title fontWeight="600">Informations:</Title>
            //     <div className={styles.detail__episode_info_fields}>
            //       <Title fontWeight="300">Gender</Title>
            //       {'gender' in data && data.gender && (
            //         <SubTitle>{data.gender}</SubTitle>
            //       )}
            //     </div>
            //     <div className={styles.detail__episode_info_fields}>
            //       <Title fontWeight="300">Status</Title>
            //       {'status' in data && data.status && (
            //         <div className={styles.detail__episode_info_fields_img}>
            //           <SubTitle>{data.status}</SubTitle>
            //           <CircleImage
            //             className={classNames(styles[`img__${data.status}`])}
            //           />
            //         </div>
            //       )}
            //     </div>
            //     <div className={styles.detail__episode_info_fields}>
            //       <Title fontWeight="300">Specie</Title>
            //       {'species' in data && data.species && (
            //         <SubTitle>{data.species}</SubTitle>
            //       )}
            //     </div>
            //     <div className={styles.detail__episode_info_fields}>
            //       <Title fontWeight="300">Origin</Title>
            //       {'origin' in data && data.origin && (
            //         <SubTitle>{data.origin.name}</SubTitle>
            //       )}
            //     </div>
            //     {'type' in data && data.type && (
            //       <div className={styles.detail__episode_info_fields}>
            //         <Title fontWeight="300">Type</Title>
            //         <SubTitle>{data.type}</SubTitle>
            //       </div>
            //     )}
            //   </div>
            //   <div className={styles.detail__episode_info}>
            //     <Title fontWeight="600">Episode:</Title>
            //     <div className={styles.detail__episode_info_wrapper}>
            //       <div className={styles.detail__episode_subinfo}>
            //         {Array.isArray(episodeByArrIdDetail) &&
            //           episodeByArrIdDetail.map((item) => (
            //             <Button
            //               key={item.id}
            //               variant="text"
            //               className={styles.detail__episode_info_fields}
            //               onClick={() => handleClickDetail(item.id, 'episode')}
            //             >
            //               <Title>{item.name}</Title>
            //               <SubTitle>{item.air_date}</SubTitle>
            //             </Button>
            //           ))}
            //       </div>
            //     </div>
            //   </div>
            // </div>
            <HeroSubInfo 
              data={data as IHero} 
              episodeId={detailArrId}
            />
          )}
          {location.state.type !== 'hero' && (
            <PageWrapper display="grid">
              {Array.isArray(heroByArrIdDetail) &&
                heroByArrIdDetail.map((hero: IHero) => (
                  <InfoCard
                    key={hero.id}
                    name={hero.name}
                    image={'image' in hero ? hero.image : ''}
                    species={'species' in hero ? hero.species : ''}
                    onClick={() => handleClickDetail(hero.id, 'character')}
                  />
                ))}
            </PageWrapper>
          )}
        </div>
      )}
    </>
  );
};
