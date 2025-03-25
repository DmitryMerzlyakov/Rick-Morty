import { Route, Routes } from 'react-router-dom';
import { MainLayout, SignInLayout } from '/src/components/layouts';
import { links } from '../config';
import MainPage from '/src/components/pages/mainPage';
import { LazyPage } from '/src/components/wrapper/lazyLoadWrapper';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={links.main} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path={links.heroes} element={<LazyPage route="heroesPage" />} />
        <Route path={links.locations} element={<LazyPage route="locationsPage" />} />
        <Route path={links.episodes} element={<LazyPage route="episodesPage" />} />
        <Route
          path={`:resource/${links.detail}/:id`}
          element={<LazyPage route="detailPage" />}
        />
      </Route>
      <Route path={links.error} element={<LazyPage route="errorPage" />} />
      <Route path={links.login} element={<SignInLayout />}>
        <Route index element={<LazyPage route="loginPage" />} />
      </Route>
    </Routes>
  );
};
