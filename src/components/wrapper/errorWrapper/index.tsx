import classNames from 'classnames';
import styles from './styles.module.scss';

type TErrorWrapperProps = React.PropsWithChildren;

export const ErrorWrapper = ({ children }: TErrorWrapperProps) => {
  return <div className={classNames(styles.wrapper)}>{children}</div>;
};
