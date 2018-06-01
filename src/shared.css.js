import styled, { css } from 'react-emotion';

export const fade = props => css`
  transition: opacity 0.7s ease-in;
  opacity: ${props.hidden ? 0 : 1};
`;

export default {
  fade,
};
