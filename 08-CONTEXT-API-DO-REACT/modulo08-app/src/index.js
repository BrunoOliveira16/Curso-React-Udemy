import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CounterContextProvider } from './context/CounterContext';
import { TitleColorContextProvider } from './context/TitleColorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>     
    </CounterContextProvider>
  </React.StrictMode>
);
