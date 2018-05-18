import React, { Component } from 'react';

const LANDSCAPE = 'row';
const PORTRAIT = 'column';

const getDimensionsObj = (w, h) => {
  let orientation = LANDSCAPE;
  let childOrientation = PORTRAIT;
  let large = w;
  let small = h;
  if (w < h) {
    orientation = PORTRAIT;
    childOrientation = LANDSCAPE;
    large = h;
    small = w;
  }
  const count = Math.floor(large / small);
  const rem = large % small;
  return {
    size: small,
    orientation,
    childOrientation,
    rem,
    count,
  };
};

class Step extends Component {
  render() {
    const { inputs, showChildren = false } = this.props;
    const { size, count, rem, orientation, childOrientation } = getDimensionsObj(...inputs);
    console.log('step', size, count, rem, orientation, childOrientation);
    return (
      <div style={{
        width: inputs[0],
        height: inputs[1],
        border: '1px solid gray',
        display: 'flex',
        flexDirection: orientation,
        boxSizing: 'border-box',
      }}>

      {showChildren && new Array(count).fill().map((el, i) => (

        <div
          key={i}
          style={{
          width: size,
          height: size,
          border: '1px dotted gray',
          display: 'flex',
          flexDirection: childOrientation,
          boxSizing: 'border-box',
          justifyContent: 'flex-start',
          }}>
          <span style={{ fontSize: 9 }}>{size}</span>
        </div>
      ))}
         {showChildren && <div style={{
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',
          }}>
            {rem > 0 && <Step inputs={[rem, size]} showChildren />}
          </div>}
      </div>
    );
  }
}
export default Step;
