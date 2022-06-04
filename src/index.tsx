import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.scss';
import ThemeContextWrapper from './contexts/ThemeContextWrapper';
import CountryContextWrapper from './contexts/CountryContextWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <CountryContextWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CountryContextWrapper>
    </ThemeContextWrapper>
  </React.StrictMode>,
);
