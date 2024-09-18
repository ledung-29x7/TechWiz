import React from 'react';
import ReactDOM from 'react-dom/client';
import { StoreProvider } from './Store/contexts';
import './index.css';
import App from './App';
import "./fontawesome"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
