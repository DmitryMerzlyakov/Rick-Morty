import { Button, Title } from '/src/components/ui';
import styles from '../styles.module.scss';
import { SubTitle } from '/src/components/ui/subtitle';
import { useCurrentData } from '/src/hooks/useCurrentData';
import { IHero } from '/src/models/interfaces';
import classNames from 'classnames';
import { CircleImage } from '/src/assets/icons';
import { useRouteDetail } from '/src/hooks/useRouteDetail';

interface IEpisodesByIdProps {
  episodeId: number[];
  data: IHero;
}

export const EpisodesById = ({ episodeId, data }: IEpisodesByIdProps) => {
  const { currentData } = useCurrentData();
  const { handleClickDetail } = useRouteDetail();

  const dataById = currentData('episode', episodeId);

  return (
    <div className={styles.detail__episode}>
      <div className={styles.detail__episode_info}>
        <Title fontWeight='600'>Informations:</Title>
        <div className={styles.detail__episode_info_fields}>
          <Title fontWeight='300'>Gender</Title>
          {'gender' in data && data.gender && (
            <SubTitle>{data.gender}</SubTitle>
          )}
        </div>
        <div className={styles.detail__episode_info_fields}>
          <Title fontWeight='300'>Status</Title>
          {'status' in data && data.status && (
            <div className={styles.detail__episode_info_fields_img}>
              <SubTitle>{data.status}</SubTitle>
              <CircleImage
                className={classNames(styles[`img__${data.status}`])}
              />
            </div>
          )}
        </div>
        <div className={styles.detail__episode_info_fields}>
          <Title fontWeight='300'>Specie</Title>
          {'species' in data && data.species && (
            <SubTitle>{data.species}</SubTitle>
          )}
        </div>
        <div className={styles.detail__episode_info_fields}>
          <Title fontWeight='300'>Origin</Title>
          {'origin' in data && data.origin && (
            <SubTitle>{data.origin.name}</SubTitle>
          )}
        </div>
        {'type' in data && data.type && (
          <div className={styles.detail__episode_info_fields}>
            <Title fontWeight='300'>Type</Title>
            <SubTitle>{data.type}</SubTitle>
          </div>
        )}
      </div>
      <div className={styles.detail__episode_info}>
        <Title fontWeight='600'>Episode:</Title>
        <div className={styles.detail__episode_info_wrapper}>
          <div className={styles.detail__episode_subinfo}>
            {Array.isArray(dataById) &&
              dataById.map((item) => (
                <Button
                  key={item.id}
                  variant='text'
                  className={styles.detail__episode_info_fields}
                  onClick={() => handleClickDetail(item.id, 'episode')}
                >
                  <Title>{item.name}</Title>
                  <SubTitle>{item.air_date}</SubTitle>
                </Button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
