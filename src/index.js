import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import CardData from './CardData';
ReactDOM.render(
  <> 
  <BrowserRouter>
  <App></App>
  </BrowserRouter>
  
  </>,
  document.getElementById('root')
);  