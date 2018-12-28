import React from 'react';

import { Grid, GridTile } from './SolutionGrid.css';

// const getTilePosition = ({ { width, height}, size, index }) => {
//   console.log('index', index);

//   // const index0 = 0;
//   // const index1 = width / size - 1;
//   // const turnIndex2 = index1 + height / size - 2;
//   // const turnIndex3 = turnIndex2 + height / size - 2;

//   return {
//     xPos: 0,
//     yPos: 0,
//   };
// };

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

  const horizontalTileCount = width / size;
  const verticalTileCount = height / size;
  const borderTileCount = horizontalTileCount * 2 + (verticalTileCount - 2) * 2;

  const childrenWithPosition = children
    .slice(0, borderTileCount)
    .map((_, index) => {
      const leftX = 0;
      const rightX = width - size;
      const topY = 0;
      const bottomY = height - size;

      const turnIndex1 = horizontalTileCount; // 5
      const turnIndex2 = turnIndex1 + verticalTileCount - 1; // 8
      const turnIndex3 = turnIndex2 + horizontalTileCount - 1; // 12

      let xPos;
      let yPos;
      if (index < turnIndex1) {
        xPos = index * size;
        yPos = topY;
        // console.log('top', xPos, yPos);
      } else if (index >= turnIndex1 && index < turnIndex2) {
        xPos = rightX;
        yPos = ((index % turnIndex1) + 1) * size;
        // console.log('right', xPos, yPos);
      } else if (index >= turnIndex2 && index < turnIndex3) {
        xPos = rightX - ((index % turnIndex2) + 1) * size;
        yPos = bottomY;
        // console.log('bottom', xPos, yPos);
      } else {
        xPos = leftX;
        yPos = bottomY - ((index % turnIndex3) + 1) * size;
        // console.log('left', xPos, yPos);
      }

      return {
        key: index,
        size,
        xPos,
        yPos,
        // ...getTilePosition({ dimensions, size, index, xCount: horizontalTileCount, yCount: verticalTileCount })
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
