import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import Login from './pages/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);
root.render(<Router />);
