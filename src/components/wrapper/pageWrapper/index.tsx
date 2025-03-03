import classNames from 'classnames';
import styles from './styles.module.scss';

type TPageWrapperProps = React.PropsWithChildren<{
  type: 'flex' | 'grid';
}>;

export const PageWrapper = ({ type = 'flex', children }: TPageWrapperProps) => {
  return (
    <div className={classNames(styles[`wrapper__${type}`])}>{children}</div>
  );
};
