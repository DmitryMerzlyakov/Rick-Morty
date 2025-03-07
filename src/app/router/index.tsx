import { Route, Routes } from 'react-router-dom';
import { CategoryPage, MainPage } from '/src/components/pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path='/category' element={<CategoryPage/>}/>
    </Routes>
  );
};
