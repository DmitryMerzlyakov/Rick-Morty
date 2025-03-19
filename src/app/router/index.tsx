import { MainLayout, SignInLayout } from '@/components/layouts';
import { Route, Routes } from 'react-router-dom';
import { links } from '@/app/config';
// import { PrivateRouteWrapper } from '@/components/wrapper';
import { MainPage } from '@/components/pages/mainPage';
import { HeroesPage } from '@/components/pages/heroesPage';
import { LocationsPage } from '@/components/pages/locationsPage';
import { EpisodesPage } from '@/components/pages/episodesPage';
import { DetailPage } from '@/components/pages/detailPage';
import { ErrorPage } from '@/components/pages/errorPage';
import { LoginPage } from '@/components/pages/loginPage';
// import { lazy } from 'react';

// type TPage = "HeroesPage" | "LocationsPage" | "EpisodesPage" | "DetailPage" | "ErrorPage" | "LoginPage";

// interface ILazyPageProps {
//   page: TPage;
//   path: string;
// }

// const LazyComponent = (page: TPage, path: string) => {
//   return lazy(() =>
//     import(`../../components/pages/${path}`).then((module) => ({ default: module[page] }))
//   );
// };

// const LazyPage = ({ page, path }: ILazyPageProps) => {
//   const Component = LazyComponent(page, path);
//   return (
//     <Component />
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
            // <LazyPage page="HeroesPage" path="heroesPage" />
            <HeroesPage />
            // </PrivateRouteWrapper>
          }
        />
        <Route
          path={links.locations}
          element={
            // <PrivateRouteWrapper>
            // <LazyPage page="LocationsPage" path="locationsPage" />
            <LocationsPage />
            // </PrivateRouteWrapper>
          }
        />
        <Route
          path={links.episodes}
          element={
            // <PrivateRouteWrapper>
            // <LazyPage page="EpisodesPage" path="episodesPage" />
            <EpisodesPage />
            // </PrivateRouteWrapper>
          }
        />
        <Route
          path={`:resource/${links.detail}/:id`}
          element={
            // <PrivateRouteWrapper>
            // <LazyPage page="DetailPage" path="detailPage" />
            <DetailPage />
            // </PrivateRouteWrapper>
          }
        />
      </Route>
      <Route path={links.error} element={
        // <LazyPage page="ErrorPage" path="errorPage" />
        <ErrorPage />
      } />
      <Route path={links.login} element={<SignInLayout />}>
        <Route index element={
          // <LazyPage page="LoginPage" path="loginPage" />
          <LoginPage />
        } />
      </Route>
    </Routes>
  );
};
