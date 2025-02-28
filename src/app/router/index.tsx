import { MainLayout } from '@/components/layouts';
import { CategoryPage, MainPage } from '@/components/pages';
import { Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path='/category' element={<CategoryPage/>}/>
      </Route>
    </Routes>
  );
};
