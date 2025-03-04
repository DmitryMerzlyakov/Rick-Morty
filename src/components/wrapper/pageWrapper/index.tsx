import classNames from 'classnames';
import styles from './styles.module.scss';

type TPageWrapperProps = React.PropsWithChildren;

export const PageWrapper = ({ children }: TPageWrapperProps) => {
  return (
    <div className={classNames(styles.wrapper)}>{children}</div>
  );
};
