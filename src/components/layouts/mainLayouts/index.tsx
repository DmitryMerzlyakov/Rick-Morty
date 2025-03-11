import { Header } from '@/components/ui';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.scss';
import { MortyImage, RickImage } from '@/assets/icons';

export const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Header className={styles.mainLayout__header} />
      <div className={styles.mainLayout__image}>
        <RickImage className={styles.mainLayout__image_content} />
        <MortyImage className={styles.mainLayout__image_content} />
      </div>
      <div className={styles.mainLayout__body}>
        <Outlet />
      </div>
    </div>
  );
};
