import styled, { css } from 'react-emotion';

const fade = props => css`
  transition: opacity 0.7s ease-in;
  opacity: ${props.hidden ? 0 : 1};
`;

export const List = styled('div')`
  padding: 0;
  margin-top: 20px;
`;

export const ListItem = styled('div')`
  ${fade};
  display: block;
  position: relative;
  margin-bottom: 3px;
  color: #333;
`;

export const GCD = styled('span')`
  display: inline-block;
  font-family: Montserrat Black;
  font-size: 18px;
  font-weight: 100;
  letter-spacing: 2px;
`;
