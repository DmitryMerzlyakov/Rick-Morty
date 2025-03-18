import classNames from 'classnames';
import styles from './styles.module.scss';

type TPageWrapperProps = {
  display?: 'flex' | 'grid';
  children: React.ReactNode;
};

export const PageWrapper = ({
  children,
  display = 'flex',
}: TPageWrapperProps) => {
  return (
    <div className={classNames(styles[`wrapper__${display}`])}>{children}</div>
  );
};
