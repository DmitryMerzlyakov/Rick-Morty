import { Button } from '@/components/ui';
import styles from './styles.module.scss';

interface IInfoCardProps {
  name: string;
  type?: string;
  image?: string;
  species?: string;
  dimension?: string;
  air_date?: string;
  onClick?: () => void;
}

export const InfoCard = ({
  name,
  image,
  onClick,
  species,
  air_date,
  dimension,
  type,
}: IInfoCardProps) => {
  return (
    <div className={styles.hero} onClick={onClick}>
      {image && <img className={styles.hero__image} src={image} alt={name} />}
      <Button variant="text">
        <div className={styles.hero__name}>
          <p>Name: {name}</p>
          {species && <p className={styles.hero__name_info}>{species}</p>}
          {type && <p className={styles.hero__name_info}>Type: {type}</p>}
          {dimension && (
            <p className={styles.hero__name_info}>Dimension: {dimension}</p>
          )}
          {air_date && (
            <p className={styles.hero__name_info}>Air date: {air_date}</p>
          )}
        </div>
      </Button>
    </div>
  );
};
