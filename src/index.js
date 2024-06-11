import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, RouterProvider } from 'react-router-dom';

import './index.scss';
import 'aos/dist/aos.css';
import RouterApp from './Router';

import store from "./store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>        
      <RouterApp />
    </Provider>
  // </React.StrictMode>

);

  // <React.StrictMode> (嚴格模式檢查，可以不用)
    
  //     <RouterApp />
    
  // </React.StrictMode>