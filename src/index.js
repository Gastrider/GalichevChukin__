import React from 'react';
import ReactDOM from 'react-dom/client'; // Используем новый метод из React 18
import App from './App';
import './styles/GlobalStyles.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Создаем root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
