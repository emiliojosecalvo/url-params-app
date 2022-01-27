import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Swith is been replace for Routes (all Route needs to be wrapped on Routes)
// exact, component, render dont work anymore. element needs to be use instead
// Redirect not longer exist, use either Navigate or useNavigate
// no more match available, now use useParams() to get the url params 

//Check this.props.history, redirect, withRouter
