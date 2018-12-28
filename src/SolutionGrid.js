import React from 'react';

import { Grid, GridTile } from './SolutionGrid.css';

const getTilePosition = ({
  dimensions: { width, height },
  size,
  index,
  xCount,
  yCount,
}) => {
  const leftX = 0;
  const rightX = width - size;
  const topY = 0;
  const bottomY = height - size;

  const turnIndex1 = xCount; // 5
  const turnIndex2 = turnIndex1 + yCount - 1; // 8
  const turnIndex3 = turnIndex2 + xCount - 1; // 12

  let xPos;
  let yPos;

  switch (true) {
    case index >= turnIndex3:
      xPos = leftX;
      yPos = bottomY - ((index % turnIndex3) + 1) * size;
      break;
    case index >= turnIndex2:
      xPos = rightX - ((index % turnIndex2) + 1) * size;
      yPos = bottomY;
      break;
    case index >= turnIndex1:
      xPos = rightX;
      yPos = ((index % turnIndex1) + 1) * size;
      break;
    default:
      xPos = index * size;
      yPos = topY;
  }

  return {
    xPos,
    yPos,
  };
};

export default ({
  dimensions,
  dimensions: { width, height },
  totalSquares,
  gcd: size,
  currentStepIndex,
  totalSteps,
}) => {
  const hidden = currentStepIndex < totalSteps + 1;
  const children = new Array(totalSquares);
  children.fill({});

  const xCount = width / size;
  const yCount = height / size;
  const borderTileCount = xCount * 2 + (yCount - 2) * 2;

  const childrenWithPosition = children
    .slice(0, borderTileCount)
    .map((_, index) => {
      return {
        key: index,
        size,
        ...getTilePosition({ dimensions, size, index, xCount, yCount }),
      };
    });

  return (
    <Grid hidden={hidden}>
      {childrenWithPosition.map(tileProps => (
        <GridTile {...tileProps} />
      ))}{' '}
    </Grid>
  );
};
