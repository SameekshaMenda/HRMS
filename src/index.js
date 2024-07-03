import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Your global styles
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to measure performance etc., reportWebVitals is used
// to interact with other measurement tools that you might integrate
