import { MainLayout } from '@/components/layouts';
import { CategoryPage, MainPage } from '@/components/pages';
import { Route, Routes } from 'react-router-dom';
import { links } from '../config/links';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={links.main} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path={links.episode} element={<CategoryPage />} />
        <Route path={links.heroes} element={<CategoryPage />} />
        <Route path={links.location} element={<CategoryPage />} />
      </Route>
    </Routes>
  );
};
