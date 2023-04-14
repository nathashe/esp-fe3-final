import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ModoDarkContextProvider from './context/ModoDarkContext';
import FavsContextProvider from './context/FavContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModoDarkContextProvider>
      
      <FavsContextProvider>
        <App />
      </FavsContextProvider>
    </ModoDarkContextProvider>
  </React.StrictMode>
);


