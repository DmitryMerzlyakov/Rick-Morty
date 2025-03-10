import classNames from 'classnames';

import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { links } from '@/app/config/';
import { Button } from '..';
import { HeroImage } from '@/assets/icons';
import { useAuth } from '@/hooks/useAuth';
import { AuthContext } from '@/models/constants';

interface IHeaderProps {
  /**
   * Additional class names to apply to the button
   */
  className?: string;
}

export const Header = ({ className }: IHeaderProps) => {
  const navigate = useNavigate();
  const auth = useAuth({ context: AuthContext });

  return (
    <header className={classNames(styles.header, className)}>
      <HeroImage size="xl" className={styles.header__logo} />
      <div>
        <Button
          size="md"
          variant="text"
          color="purple"
          onClick={() => navigate(links.main)}
        >
          Главная
        </Button>
        <Button
          size="md"
          variant="text"
          color="purple"
          onClick={() => navigate(links.heroes)}
        >
          Герои
        </Button>
        <Button
          size="md"
          variant="text"
          color="purple"
          onClick={() => navigate(links.location)}
        >
          Локации
        </Button>
        <Button
          size="md"
          variant="text"
          color="purple"
          onClick={() => navigate(links.episode)}
        >
          Эпизоды
        </Button>
      </div>
      <div className={styles.header__user}>
        {auth.user?.name && (
          <Button
            variant="text"
            onClick={() => auth.signOut(() => navigate(links.main))}
          >
            {auth.user?.nickName}
          </Button>
        )}
      </div>
    </header>
  );
};
