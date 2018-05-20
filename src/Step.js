import React from 'react';

const LANDSCAPE = 'row';
const PORTRAIT = 'column';

export default props => {
  const { lg, sm, size, divisor, remainder, gcd } = props.step;
  const children = new Array(divisor);
  children.fill({});

  return (
    <React.Fragment>
      {children.map((_, i) => (
        <div
          key={i}
          style={{
            position: 'relative',
            width: size,
            height: size,
            border: '1px solid gray',
            boxSizing: 'border-box',
          }}
        />
      ))}
    </React.Fragment>
  );
};
