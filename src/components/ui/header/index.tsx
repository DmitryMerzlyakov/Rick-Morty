import classNames from "classnames";

import styles from './style.module.scss';

interface IHeaderProps {
  className?: string
}

export const Header = ({className}: IHeaderProps) => {
  return (
    <header className={classNames(styles.header, className)}>
      <button>Главная страница.</button>
      <button>Страница категории.</button>
      <button>Детальная страница элемента.</button>
    </header>
  );
};
