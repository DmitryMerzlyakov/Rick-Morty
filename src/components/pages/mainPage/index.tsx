import { TitleImage } from '@/assets/icons';
import styles from './styles.module.scss';

export const MainPage = () => {
  return (
    <div className={styles.main}>
      <TitleImage className={styles.main__img} />
      <h1>Welcome</h1>
    </div>
  );
};
