import React from '../../react-movie-webpage/node_modules/@types/react';
import ReactDOM from '../../react-movie-webpage/node_modules/@types/react-dom/client';
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
