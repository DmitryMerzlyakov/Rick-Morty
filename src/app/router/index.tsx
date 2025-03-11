import { MainLayout } from '@/components/layouts';
import { CategoryPage, DetailPage, MainPage } from '@/components/pages';
import { Route, Routes } from 'react-router-dom';
import { links } from '../config';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={links.main} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path=":category" element={<CategoryPage />} />
        <Route path=":category/detail/:id" element={<DetailPage />} />
      </Route>
    </Routes>
  );
};
