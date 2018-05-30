import styled from 'react-emotion';

export const StepFragment = styled('div')`
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 1px dotted gray;
  box-sizing: border-box;
  padding-top: ${props => props.size / 2 - 5 > 0 ? props.size / 2 - 5 : 2}px;
`;

export const Measurement = styled('div')`
  display: block;
  text-align: center;
  width: 100%;
  font-size: 8px;
`;
