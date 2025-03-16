import styles from './styles.module.scss';

interface ITitleProps {
  children: React.ReactNode;
  fontWeight?: string
}

export const Title = ({ children, fontWeight = '500' }: ITitleProps) => {
  return (
    <p className={styles.title} style={{ fontWeight: fontWeight }}>{children}</p>
  )
}
