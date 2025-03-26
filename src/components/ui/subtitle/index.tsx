import classNames from 'classnames';
import styles from './styles.module.scss';

interface ISubTitleProps {
  /**
   * Subtitle content
   * */
  children: React.ReactNode;
  /**
  * Subtitle font weight 
  * */
  fontWeight?: string;
  /**
  * Additional class names
  */
  className?: string;
}

export const SubTitle = ({ children, fontWeight = '400', className }: ISubTitleProps) => {
  return (
    <p className={classNames(styles.subtitle, className)} style={{ fontWeight: fontWeight }}>
      {children}
    </p>
  );
};
