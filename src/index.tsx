// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure App.tsx exists in the src directory

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);