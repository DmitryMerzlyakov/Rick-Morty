import { TitleImage } from '/src/assets/icons';
import styles from './styles.module.scss';

const MainPage = () => {
  return (
    <div className={styles.main}>
      <TitleImage className={styles.main__img} />
      <h1>Welcome</h1>
    </div>
  );
};

export default MainPage;
