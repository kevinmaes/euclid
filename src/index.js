import React from 'react';
import { render } from 'react-dom';

import './styles/global.css';
import App from './App';

render(
  <App width={350} height={150} maxWidth={1000} maxHeight={1000} />,
  document.getElementById('root')
);
