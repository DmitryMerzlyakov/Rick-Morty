import { MainLayout, SignInLayout } from '@/components/layouts';
import { Route, Routes } from 'react-router-dom';
import { links } from '@/app/config';
import { LazyPage } from '@/components/wrapper/lazyLoadWrapper';
import { DetailPage, EpisodesPage, HeroesPage, LocationsPage, MainPage } from '@/components/pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={links.main} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route
          path={links.heroes}
          element={
            // <PrivateRouteWrapper>
            <HeroesPage />
            // </PrivateRouteWrapper>
          }
        />
        <Route
          path={links.locations}
          element={
            // <PrivateRouteWrapper>
            <LocationsPage />
            // </PrivateRouteWrapper>
          }
        />
        <Route
          path={links.episodes}
          element={
            // <PrivateRouteWrapper>
            <EpisodesPage />
            // </PrivateRouteWrapper>
          }
        />
        <Route
          path={`:resource/${links.detail}/:id`}
          element={
            // <PrivateRouteWrapper>
            <DetailPage />
            // </PrivateRouteWrapper>
          }
        />
      </Route>
      <Route path={links.error} element={<LazyPage page="ErrorPage" />} />
      <Route path={links.login} element={<SignInLayout />}>
        <Route index element={<LazyPage page="LoginPage" />} />
      </Route>
    </Routes>
  );
};
