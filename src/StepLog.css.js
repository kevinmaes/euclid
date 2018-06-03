import styled from 'react-emotion';

import { fade } from './shared.css'

export const List = styled('div')`
  padding: 0;
  margin-top: 20px;
`;

export const ListItem = styled('div')`
  font-family: Montserrat Light;
  ${fade};
  display: block;
  position: relative;
  margin-bottom: 3px;
  color: #333;

  :before {
    content: "\\2713   ";
    color: green;
  }
`;

export const GCD = styled('span')`
  display: inline-block;
  font-family: Montserrat Black;
  font-size: 18px;
  font-weight: 100;
  letter-spacing: 2px;
`;
