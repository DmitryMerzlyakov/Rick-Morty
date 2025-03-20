import { Button, Title } from '/src/components/ui';
import styles from './styles.module.scss';
import { SubTitle } from '/src/components/ui/subtitle';

interface IInfoCardProps {
  name: string;
  type?: string;
  image?: string;
  species?: string;
  air_date?: string;
  onClick?: () => void;
}

export const InfoCard = ({
  name,
  image,
  onClick,
  species,
  air_date,
  type,
}: IInfoCardProps) => {
  return (
    <div className={styles.hero} onClick={onClick}>
      {image && <img className={styles.hero__image} src={image} alt={name} />}
      <Button variant="text">
        <div className={styles.hero__name}>
          <Title>Name: {name}</Title>
          {species && <SubTitle>{species}</SubTitle>}
          {type && <SubTitle>Type: {type}</SubTitle>}
          {air_date && <SubTitle>Air date: {air_date}</SubTitle>}
        </div>
      </Button>
    </div>
  );
};
