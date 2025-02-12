import styles from './styles.module.scss';
import { Input } from '/src/shared/ui';
import { LogoIcon } from '/src/shared/ui/svg';

export const AuthPage = () => {
  return (
    <div className={styles.auth}>
      <h1>Welcome to Starlight Gymnasium</h1>
      <LogoIcon/>
      <Input label="First Name *" />
      <Input label="Last Name *" />
      <Input label="Phone *" />
      <Input label="Email *" />
    </div>
  );
};
