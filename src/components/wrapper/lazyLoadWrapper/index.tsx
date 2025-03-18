import { LazyComponent } from '@/models/constants';
import { TPageKeys } from '@/models/interfaces';

interface IPageProps {
  page: TPageKeys;
}

export const LazyPage = ({ page }: IPageProps) => {
  const Component = LazyComponent(page);
  return (
    <Component />
  );
};
