import { links } from '/src/app/config';
import { ErrorImage } from '/src/assets/icons';
import { Button } from '/src/components/ui';
import { ErrorWrapper } from '/src/components/wrapper';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const ErrorPage = () => {
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

export default ErrorPage;
