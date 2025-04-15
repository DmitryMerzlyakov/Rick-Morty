import { Route, Routes } from 'react-router-dom';
import { MainLayout, SignInLayout } from '/src/components/layouts';
import { links } from '../config';
import MainPage from '/src/components/pages/mainPage';
import { PrivateRouteWrapper } from '/src/components/wrapper';
import { Suspense } from 'react';
import { LazyDetailPage, LazyEpisodesPage, LazyErrorPage, LazyHeroesPage, LazyLocationsPage, LazyLoginPage } from '/src/models/constants';

export const AppRoutes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path={links.main} element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route
            path={links.heroes}
            element={
              <PrivateRouteWrapper>
                <LazyHeroesPage />
              </PrivateRouteWrapper>
            }
          />
          <Route
            path={links.locations}
            element={
              <PrivateRouteWrapper>
                <LazyLocationsPage />
              </PrivateRouteWrapper>
            }
          />
          <Route
            path={links.episodes}
            element={
              <PrivateRouteWrapper>
                <LazyEpisodesPage />
              </PrivateRouteWrapper>
            }
          />
          <Route
            path={`:resource/${links.detail}/:id`}
            element={
              <PrivateRouteWrapper>
                <LazyDetailPage />
              </PrivateRouteWrapper>
            }
          />
        </Route>
        <Route path={links.error} element={<LazyErrorPage />} />
        <Route path={links.login} element={<SignInLayout />}>
          <Route index element={<LazyLoginPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
