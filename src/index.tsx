import { createRoot } from 'react-dom/client';
import '../src/app/styles/global.scss';
import { App } from './app';

createRoot(document.getElementById('root')!).render(<App />);
