import styled, { css } from 'react-emotion';

const fade = props => css`
  transition: opacity 0.7s ease-in;
  opacity: ${props.hidden ? 0 : 1};
`;

export const Wrapper = styled('div')`
  padding: 30px;
`;
export const Title = styled('h1')`
  color: green;
`;

export const Form = styled('form')``;
export const Label = styled('label')`
  font-size: 12px;
  color: gray;
  margin-right: 10px;
`;

export const Input = styled('input')`
  margin-right: 20px;
`;

export const Message = styled('span')`
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

export const Frame = styled('div')`
  margin: 30px 0 30px 0;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  display: flex;
  flex-direction: ${props => props.orientation};
  cursor: pointer;
  flex-wrap: wrap;
  background: #debf6c;
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
  height: ${props => props.size};
  border: 1px dotted #68677a;
`;
