import React from 'react';

import { StepFragment } from './Step.css';

export default props => {
  const { size, divisor } = props.step;
  const children = new Array(divisor);
  children.fill({});

  return (
    <React.Fragment>
      {children.map((_, i) => (
        <StepFragment
          key={i}
          size={size}
        />
      ))}
    </React.Fragment>
  );
};
