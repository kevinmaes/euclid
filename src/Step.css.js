import styled from 'react-emotion';

export const StepFragment = styled('div')`
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 1px dotted gray;
  box-sizing: border-box;
`