import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { WizardContextProvider } from './contexts/WizardContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WizardContextProvider>
        <App />
      </WizardContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

