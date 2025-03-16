import styles from './styles.module.scss';

interface ISubTitleProps {
  children: React.ReactNode;
  fontWeight?: string
}

export const SubTitle = ({ children, fontWeight = '400' }: ISubTitleProps) => {
  return (
    <p className={styles.subtitle} style={{ fontWeight: fontWeight }}>{children}</p>
  )
}
