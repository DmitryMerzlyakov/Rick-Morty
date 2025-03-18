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
}

export const SubTitle = ({ children, fontWeight = '400' }: ISubTitleProps) => {
  return (
    <p className={styles.subtitle} style={{ fontWeight: fontWeight }}>
      {children}
    </p>
  );
};
