import React from 'react';

import { StepFragment, Measurement } from './Step.css';

const MEASUREMENT_DISPLAY_MIN = 15;

export default props => {
  const { size, divisor } = props.step;
  const children = new Array(divisor);
  children.fill({});

  return (
    <React.Fragment>
      {children.map((_, i) => (
        <StepFragment key={i} size={size}>
          {size >= MEASUREMENT_DISPLAY_MIN && <Measurement>{size}</Measurement>}
        </StepFragment>
      ))}
    </React.Fragment>
  );
};
