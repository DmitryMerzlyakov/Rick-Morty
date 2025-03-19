import { Outlet } from 'react-router-dom';

import styles from './styles.module.scss';
import { HeroImage } from '@/assets/icons';
import { Suspense } from 'react';

export const SignInLayout = () => {
  return (
    <div className={styles.signinLayout}>
      <HeroImage size="xl" className={styles.signinLayout__logo} />
      <Suspense fallback={<div>123213213</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
