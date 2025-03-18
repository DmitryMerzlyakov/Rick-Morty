import { MainLayout, SignInLayout } from '@/components/layouts';
import { Route, Routes } from 'react-router-dom';
import { links } from '@/app/config';
import { LazyPage } from '@/components/wrapper/lazyLoadWrapper';
import { MainPage } from '@/components/pages';
import { PrivateRouteWrapper } from '@/components/wrapper';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={links.main} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route
          path={links.heroes}
          element={
            <PrivateRouteWrapper>
            <LazyPage page="HeroesPage" />
            </PrivateRouteWrapper>
          }
        />
        <Route
          path={links.locations}
          element={
            <PrivateRouteWrapper>
            <LazyPage page="LocationsPage" />
            </PrivateRouteWrapper>
          }
        />
        <Route
          path={links.episodes}
          element={
            <PrivateRouteWrapper>
            <LazyPage page="EpisodesPage" />
            </PrivateRouteWrapper>
          }
        />
        <Route
          path={`:resource/${links.detail}/:id`}
          element={
            <PrivateRouteWrapper>
            <LazyPage page="DetailPage" />
            </PrivateRouteWrapper>
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
