import { Route, Routes } from 'react-router-dom';
import { MainLayout, SignInLayout } from '/src/components/layouts';
import { links } from '../config';
import MainPage from '/src/components/pages/mainPage';
import { LazyPage } from '/src/components/wrapper/lazyLoadWrapper';
import { PrivateRouteWrapper } from '/src/components/wrapper';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={links.main} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route
          path={links.heroes}
          element={
            <PrivateRouteWrapper>
              <LazyPage route='heroesPage' />
            </PrivateRouteWrapper>
          }
        />
        <Route
          path={links.locations}
          element={
            <PrivateRouteWrapper>
              <LazyPage route='locationsPage' />
            </PrivateRouteWrapper>
          }
        />
        <Route
          path={links.episodes}
          element={
            <PrivateRouteWrapper>
              <LazyPage route='episodesPage' />
            </PrivateRouteWrapper>
          }
        />
        <Route
          path={`:resource/${links.detail}/:id`}
          element={
            <PrivateRouteWrapper>
              <LazyPage route='detailPage' />
            </PrivateRouteWrapper>
          }
        />
      </Route>
      <Route path={links.error} element={<LazyPage route='errorPage' />} />
      <Route path={links.login} element={<SignInLayout />}>
        <Route index element={<LazyPage route='loginPage' />} />
      </Route>
    </Routes>
  );
};
