import { Button } from '@/components/ui';
import styles from './styles.module.scss';

interface IHeroProps {
  name: string;
  image: string;
  onClick: () => void;
}

export const Hero = ({ name, image, onClick }: IHeroProps) => {
  return (
    <div className={styles.hero}>
      <img className={styles.person__image} src={image} alt={name} />
      <Button className={styles.person__name} variant="full" onClick={onClick}>
        {name}
      </Button>
    </div>
  );
};
