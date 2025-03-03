import classNames from 'classnames';

import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { links } from '@/app/config/links';
import { Button } from '..';

interface IHeaderProps {
  /**
   * Additional class names to apply to the button
   */
  className?: string;
}

export const Header = ({ className }: IHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className={classNames(styles.header, className)}>
      <Button
        size="xl"
        variant="text"
        color="text"
        onClick={() => navigate(links.main)}
      >
        Главная
      </Button>
      <Button
        size="xl"
        variant="text"
        color="text"
        onClick={() => navigate(links.heroes)}
      >
        Герои
      </Button>
      <Button
        size="xl"
        variant="text"
        color="text"
        onClick={() => navigate(links.location)}
      >
        Локации
      </Button>
      <Button
        size="xl"
        variant="text"
        color="text"
        onClick={() => navigate(links.episode)}
      >
        Эпизоды
      </Button>
    </header>
  );
};
