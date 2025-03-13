import { Button } from '@/components/ui';
import styles from './styles.module.scss';

interface IHeroProps {
  name: string;
  image: string;
  species: string;
  onClick: () => void;
}

export const Hero = ({ name, image, onClick, species }: IHeroProps) => {
  return (
    <div className={styles.hero} onClick={onClick}>
      {image && <img className={styles.hero__image} src={image} alt={name} />}
      <Button variant="text">
        <div className={styles.hero__name}>
          <p>{name}</p>
          <p className={styles.hero__name_species}>{species}</p>
        </div> 
      </Button>
    </div>
  );
};
