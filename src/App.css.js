import styled, { css } from 'react-emotion';

const fade = props => css`
  transition: opacity 0.7s ease-in;
  opacity: ${props.hidden ? 0 : 1};
`;

export const Title = styled('h1')`
  color: green;
`;

export const Frame = styled('div')`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border: 1px solid gray;
  display: flex;
  flex-direction: ${props => props.orientation};
  cursor: pointer;
  flex-wrap: wrap;
  background: yellow;
  position: relative;
  box-sizing: content-box;
`;

export const StepWrapper = styled('div')`
  ${fade};

  display: flex;
  flex-direction: ${props => props.orientation};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

export const Grid = styled('div')`
  ${fade};

  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const GridTile = styled('div')`
  width: ${props => props.size}px;
  height: ${props => props.size};
  border: 1px dotted gray;
`;
