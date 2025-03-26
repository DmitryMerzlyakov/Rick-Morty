import { Outlet } from 'react-router-dom';

import styles from './styles.module.scss';
import { HeroImage } from '/src/assets/icons';

export const SignInLayout = () => {
  return (
    <div className={styles.signinLayout}>
      <HeroImage size='xl' className={styles.signinLayout__logo} />
      <Outlet />
    </div>
  );
};
