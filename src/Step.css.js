import styled from 'react-emotion';

export const StepFragment = styled.div`
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: ${props => (props.size >= 4 ? '1px dotted #68677A' : 'none')};
  background: ${props => (props.size >= 4 ? 'none' : 'gray')};
  padding-top: ${props => (props.size / 2 - 5 > 0 ? props.size / 2 - 5 : 2)}px;
`;

export const Measurement = styled.div`
  font-family: Montserrat Light;
  letter-spacing: 1px;
  display: block;
  text-align: center;
  width: 100%;
  font-size: 8px;
  color: #222222;
`;
