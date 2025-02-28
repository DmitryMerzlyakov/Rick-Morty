import { Button } from '@/components/ui';
import styles from './styles.module.scss';

interface IPersonProps {
  name: string;
  image: string;
}

export const Person = ({ name, image }: IPersonProps) => {
  return (
    <div className={styles.person}>
      <img className={styles.person__image} src={image} alt={name} />
      <Button className={styles.person__name} variant="full">
        {name}
      </Button>
    </div>
  );
};
