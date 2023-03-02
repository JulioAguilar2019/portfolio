import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from './i18n/es/global.json';
import global_en from './i18n/en/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
)
