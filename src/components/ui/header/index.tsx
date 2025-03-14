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
      <div className={styles.header__content}>
        <HeroImage size="xl" className={styles.header__content_logo} />
        {auth.user?.name && (
          <Button
            variant="text"
            onClick={() => auth.signOut(() => navigate(links.main))}
          >
            {auth.user?.nickName}
          </Button>
        )}
      </div>
      <div>
        <Button
          size="md"
          variant="text"
          color="purple"
          onClick={() => navigate(links.main)}
        >
          Home
        </Button>
        <Button
          size="md"
          variant="text"
          color="purple"
          onClick={() => navigate(links.heroes)}
        >
          Characters
        </Button>
        <Button
          size="md"
          variant="text"
          color="purple"
          onClick={() => navigate(links.locations)}
        >
          Locations
        </Button>
        <Button
          size="md"
          variant="text"
          color="purple"
          onClick={() => navigate(links.episodes)}
        >
          Episodes
        </Button>
      </div>
    </header>
  );
};
