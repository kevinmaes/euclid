import styled from 'react-emotion';

export const Title = styled('h1')`
  color: green;
`

export const Frame = styled('div')`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border: 1px solid gray;
  display: flex;
  flex-direction: ${props => props.orientation};
  cursor: pointer;
  flex-wrap: wrap;
  background: yellow;
`

export const StepWrapper = styled('div')`
  display: flex;
  box-sizing: border-box;
  flex-direction: ${props => props.orientation};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: lightgreen;
`;
