import { links } from '@/app/config';
import { Button } from '@/components/ui';
import { PageWrapper } from '@/components/wrapper';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <h1>Страница не найдена</h1>
      <Button onClick={() => navigate(links.main)}>Вернуться на главную</Button>
    </PageWrapper>
  );
};
