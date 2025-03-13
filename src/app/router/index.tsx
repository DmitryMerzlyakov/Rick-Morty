import { MainLayout, SignInLayout } from '@/components/layouts';
import { CategoryPage, DetailPage, MainPage } from '@/components/pages';
import { Route, Routes } from 'react-router-dom';
import { links } from '@/app/config';
import { LazyPage } from '@/components/wrapper/lazyLoadWrapper';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={links.main} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route
          path=":category"
          element={
            // <PrivateRouteWrapper>
              <CategoryPage/>
            // </PrivateRouteWrapper>
          }
        />
        <Route
          path=":category/detail/:id"
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
