import styled, { css } from 'react-emotion';

const fade = props => css`
  transition: opacity 0.7s ease-in;
  opacity: ${props.hidden ? 0 : 1};
`;

export const Wrapper = styled('div')`
  padding: 30px;
  min-width: 500px;

`;
export const Title = styled('h1')`
  color: #68677a;
`;

export const Instructions = styled('p')`
  font-size: 14px;
  font-style: italic;
  color: #68677a;
  margin-bottom: 20px;
`;

export const Form = styled('form')`
`;

export const Label = styled('label')`
  font-size: 12px;
  color: #fff;
  margin-right: 4px;
`;

export const Input = styled('input')`
  margin-right: 10px;
  outline: none;
  color: #68677a;
  width: 80px;
`;

export const Message = styled('span')`
  font-size: 14px;
  margin-bottom: 10px;
  display: inline-block;
  color: #68677a;
`;

export const ErrorMsg = styled('span')`
  font-size: 10px;
  width: 100%;
  margin-bottom: 10px;
  color: red;
  display: inline-block;
`;

export const Image = styled('img')`
  position: absolute;
  transform: translate(-380px, -80px);
  opacity: 0.1;
  pointer-events: none;
`;

export const Frame = styled('div')`
  margin: 30px 0 15px 0;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  display: flex;
  flex-direction: ${props => props.orientation};
  cursor: pointer;
  flex-wrap: wrap;
  background: rgba(222, 191, 108, 0.8);
  position: relative;
  box-sizing: content-box;
  box-shadow: 0 2px 6px #b0bac5;
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
  height: ${props => props.size}px;
  border: 1px dotted #68677a;
`;
