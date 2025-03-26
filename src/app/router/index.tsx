import { MainLayout, SignInLayout } from '@/components/layouts';
import {
  CategoryPage,
  DetailPage,
  MainPage,
  LoginPage,
  ErrorPage,
} from '@/components/pages';
import { Route, Routes } from 'react-router-dom';
import { links } from '@/app/config';
import { PrivateRouteWrapper } from '@/components/wrapper';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={links.main} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route
          path=":category"
          element={
            <PrivateRouteWrapper>
              <CategoryPage />
            </PrivateRouteWrapper>
          }
        />
        <Route
          path=":category/detail/:id"
          element={
            <PrivateRouteWrapper>
              <DetailPage />
            </PrivateRouteWrapper>
          }
        />
      </Route>
      <Route path={links.error} element={<ErrorPage />} />
      <Route path={links.login} element={<SignInLayout />}>
        <Route index element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
