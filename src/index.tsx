import { createRoot } from 'react-dom/client';
import '../src/app/styles/global.scss';
import { App } from './app';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {navigator.serviceWorker.register('/public/service-worker.js')});
}

createRoot(document.getElementById('root')!).render(<App />);
