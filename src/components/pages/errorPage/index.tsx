import { links } from '@/app/config';
import { ErrorImage } from '@/assets/icons';
import { Button } from '@/components/ui';
import { ErrorWrapper } from '@/components/wrapper';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <ErrorWrapper>
      <ErrorImage className={styles.image}>
        <h1>Страница не найдена</h1>
      </ErrorImage>
      <Button onClick={() => navigate(links.main)}>Вернуться на главную</Button>
    </ErrorWrapper>
  );
};
