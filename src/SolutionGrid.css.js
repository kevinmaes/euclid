import styled from 'react-emotion';

import { fade } from './shared.css';

export const Grid = styled.div`
  ${fade};

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const GridTile = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 1px dotted #68677a;
`;
