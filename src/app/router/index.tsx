import { Route, Routes } from 'react-router-dom';
import { MainLayout, SignInLayout } from '/src/components/layouts';
import { links } from '../config';
import MainPage from '/src/components/pages/mainPage';
import { lazy, Suspense } from 'react';

interface ILazyPageProps {
  page: string;
}

interface ILazyComponent {
  [key: string]: () => React.LazyExoticComponent<() => React.ReactNode>;
}

const detailPage = () => lazy(() => import(`/src/components/pages/detailPage`));
const episodesPage = () => lazy(() => import(`/src/components/pages/episodesPage`));
const locationsPage = () => lazy(() => import(`/src/components/pages/locationsPage`));
const errorPage = () => lazy(() => import(`/src/components/pages/errorPage`));
const heroesPage = () => lazy(() => import(`/src/components/pages/heroesPage`));
const loginPage = () => lazy(() => import(`/src/components/pages/loginPage`));

const LazyComponent: ILazyComponent = {
  detail: detailPage,
  episodes: episodesPage,
  locations: locationsPage,
  error: errorPage,
  heroes: heroesPage,
  login: loginPage,
};

export const LazyPage = ({ page }: ILazyPageProps) => {
  const Component = LazyComponent[page]?.();
  if (!Component) {
    return <div>Page not found</div>;
  }

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Component />
    </Suspense>
  );
};

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Главная страница */}
      <Route path={links.main} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path={links.heroes} element={<LazyPage page="heroes" />} />
        <Route path={links.locations} element={<LazyPage page="locations" />} />
        <Route path={links.episodes} element={<LazyPage page="episodes" />} />
        <Route
          path={`:resource/${links.detail}/:id`}
          element={<LazyPage page="detail" />}
        />
      </Route>

      {/* Страница ошибки */}
      <Route path={links.error} element={<LazyPage page="error" />} />

      {/* Авторизация */}
      <Route path={links.login} element={<SignInLayout />}>
        <Route index element={<LazyPage page="login" />} />
      </Route>
    </Routes>
  );
};
