import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ModoDarkContextProvider from './context/ModoDarkContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModoDarkContextProvider>
      <App />
    </ModoDarkContextProvider>
  </React.StrictMode>
);


