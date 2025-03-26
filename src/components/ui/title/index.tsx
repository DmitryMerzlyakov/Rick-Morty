import styles from './styles.module.scss';

interface ITitleProps {
  /**
   * Title content
   * */
  children: React.ReactNode;
  /**
   * Title font weight
   * */
  fontWeight?: string;
}

export const Title = ({ children, fontWeight = '500' }: ITitleProps) => {
  return (
    <p className={styles.title} style={{ fontWeight: fontWeight }}>
      {children}
    </p>
  );
};
