import { Suspense } from 'react';
import { LazyComponent } from '/src/models/constants';

interface ILazyPageProps {
  route: string
}

export const LazyPage = ({ route }: ILazyPageProps) => {
  const Component = LazyComponent(route);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Component />
    </Suspense>
  )
}
