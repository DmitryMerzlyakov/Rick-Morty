import { MainLayout, SignInLayout } from '@/components/layouts';
import { Route, Routes } from 'react-router-dom';
import { links } from '@/app/config';
// import { LazyPage } from '@/components/wrapper/lazyLoadWrapper';
// import { PrivateRouteWrapper } from '@/components/wrapper';
import { MainPage } from '@/components/pages/mainPage';
import { TPageKeys } from '@/models/interfaces';
import { lazy, Suspense } from 'react';

interface IPageProps {
  page: string;
  path: TPageKeys;
}

// const pagePaths = {
//   detail: '@/components/pages/detailPage',
//   episode: '@/components/pages/episodePage',
//   error: '@/components/pages/errorPage',
//   heroes: '@/components/pages/heroesPage',
//   locations: '@/components/pages/locationsPage',
//   login: '@/components/pages/loginPage'
// };


const LazyComponent = (page: string, path: string) => {
  return lazy(() =>
    import(`@/components/pages/${path}`).then((module) => ({ default: module[page] }))
  );
};

// const LazyComponent = (page: TPageKeys) => {
//   return lazy(() => import(`../../components/pages/${page}`));
// };

const LazyPage = ({ page, path }: IPageProps) => {
  const Component = LazyComponent(page, path);
  return (
    <Suspense fallback={<div>123213213</div>}>
      <Component />
    </Suspense>
  );
};

// const LazyPage = () => {
//   const Component = DetailPage();
//   return (
//     <Suspense fallback={<div>123213213</div>}>
//       <Component />
//     </Suspense>
//   );
// };

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={links.main} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route
          path={links.heroes}
          element={
            // <PrivateRouteWrapper>
            <LazyPage path="heroesPage" page="HeroesPage"/>
            // </PrivateRouteWrapper>
          }
        />
        <Route
          path={links.locations}
          element={
            // <PrivateRouteWrapper>
            <LazyPage path="locationsPage" page="LocationsPage"/>

            // </PrivateRouteWrapper>
          }
        />
        <Route
          path={links.episodes}
          element={
            // <PrivateRouteWrapper>
            <LazyPage path="episodesPage" page="EpisodesPage"/>

            // </PrivateRouteWrapper>
          }
        />
        <Route
          path={`:resource/${links.detail}/:id`}
          element={
            // <PrivateRouteWrapper>
            <LazyPage path="detailPage" page="DetailPage"/>

            // </PrivateRouteWrapper>
          }
        />
      </Route>
      <Route path={links.error} element={<LazyPage path="errorPage" page="ErrorPage"/>} />
      <Route path={links.login} element={<SignInLayout />}>
        <Route index element={<LazyPage path="loginPage" page="LoginPage"/>} />
      </Route>
    </Routes>
  );
};
