import React from 'react';

import { Grid, GridTile } from './SolutionGrid.css';

export default ({ totalSquares, gcd, currentStepIndex, totalSteps }) => {
  const hidden = currentStepIndex < totalSteps + 1;
  const children = new Array(totalSquares);
  children.fill({});
  return (
    <Grid hidden={hidden}>
      {children.slice(0, 100).map((child, i) => (
        <GridTile key={i} size={gcd} />
      ))}{' '}
    </Grid>
  );
};
