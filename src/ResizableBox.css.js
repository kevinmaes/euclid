import { ResizableBox } from 'react-resizable';
import styled from 'react-emotion';

export const StyledResizableBox = styled(ResizableBox)`
  display: inline-block;
  background: #ccc;
  border: 1px solid gray;
  text-align: center;
  box-sizing: border-box;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  margin: 20px 0 20px;
  cursor: pointer;

  position: relative;

  & .react-resizable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0;
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/P…4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=);
    background-position: bottom right;
    padding: 0 3px 3px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: se-resize;
  }
`;
