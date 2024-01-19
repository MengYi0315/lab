import React from 'react';
import ReactDOM from 'react-dom/client';

import { MantineProvider, createTheme } from '@mantine/core';

import './index.css';
import App from './App';

const theme = createTheme({
  fontFamily: '"Noto Sans TC", sans-serif', 
  primaryColor: 'indigo'
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);

