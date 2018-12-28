import React from 'react';
import { render } from 'react-dom';

import './styles/global.css';
import App from './App';

render(
  <App width={345} height={150} maxWidth={500} maxHeight={500} />,
  document.getElementById('root')
);
