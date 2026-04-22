import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const Loader = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: '"Cinzel Decorative", serif', fontSize: 16, letterSpacing: '0.15em', color: '#C9A84C', marginBottom: 12 }}>WHITE STONE</div>
      <div style={{ width: 40, height: 2, background: 'linear-gradient(to right, #C9A84C, #E8C96A)', margin: '0 auto' }} />
    </div>
  </div>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
