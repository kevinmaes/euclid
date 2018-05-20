import React from 'react';

export default props => {
  const { size, divisor } = props.step;
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
