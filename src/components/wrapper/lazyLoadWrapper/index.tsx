import { LazyComponent } from '@/models/constants';
import { TPageKeys } from '@/models/interfaces';
import { Suspense } from 'react';

interface IPageProps {
  page: TPageKeys;
}

export const LazyPage = ({ page }: IPageProps) => {
  const Component = LazyComponent(page);
  return (
    <Suspense>
      <Component />
    </Suspense>
  );
};
