import { Person } from '@/components/dummies';
import styles from './styles.module.scss';
import characters from '@/data/characters.json';

export const CategoryPage = () => {
  return (
    <div className={styles.category}>
      {characters.map((item) => (
        <Person key={item.id} name={item.name} image={item.image} />
      ))}
    </div>
  );
};
