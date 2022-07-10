import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodoList from './todo';
import CoinTracker from './coin-tracker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TodoList />
    <CoinTracker />
  </React.StrictMode>
);
