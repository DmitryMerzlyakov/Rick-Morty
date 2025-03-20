// import { Suspense } from 'react';
// import { LazyComponent } from '/src/models/constants';

// interface ILazyPageProps {
//   page: string
//   route: string
// }

// export const LazyPage = ({page, route}: ILazyPageProps) => {
//   const Component = LazyComponent(route, page);
//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <Component />
//     </Suspense>
//   )
// }