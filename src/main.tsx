import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import { PokedexProvider } from './context/PokedexContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PokedexProvider>
      <App />
    </PokedexProvider>
  </React.StrictMode>,
);
