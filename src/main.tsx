import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Remove SEO fallback content once React is ready to mount
const fallback = document.getElementById('seo-fallback');
if (fallback) {
  fallback.remove();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
