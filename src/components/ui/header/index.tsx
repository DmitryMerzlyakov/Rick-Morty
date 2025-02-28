import classNames from 'classnames';

import styles from './style.module.scss';
import { Button } from '../button';

interface IHeaderProps {
  className?: string;
}

export const Header = ({ className }: IHeaderProps) => {
  return (
    <header className={classNames(styles.header, className)}>
      <Button size="lg" variant="text">
        Главная
      </Button>
      <Button size="lg" variant="text">
        Категории
      </Button>
    </header>
  );
};
