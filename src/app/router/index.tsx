import { MainLayout, SignInLayout } from '@/components/layouts';
import { CategoryPage, DetailPage, MainPage } from '@/components/pages';
import { Route, Routes } from 'react-router-dom';
import { links } from '../config';
import { ErrorPage } from '@/components/pages/errorPage';
import { LogitnPage } from '@/components/pages/loginPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={links.main} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path=":category" element={<CategoryPage />} />
        <Route path=":category/detail/:id" element={<DetailPage />} />
      </Route>
      <Route path={links.error} element={<ErrorPage />} />
      <Route path={links.login} element={<SignInLayout />}>
        <Route index element={<LogitnPage />} />
      </Route>
    </Routes>
  );
};
