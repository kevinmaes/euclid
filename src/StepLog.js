import React from 'react';

import { List, ListItem, GCD } from './StepLog.css';

const StepLog = ({ items, currentStepIndex, totalSquares }) => {
  const finalHidden = currentStepIndex <= items.length;
  console.log('currentIndex', currentStepIndex);
  return (
    <List>
      <ListItem key="start">
        Rectangle is {items[0].lg} x {items[0].sm}
      </ListItem>
      {items.map(
        (item, i) =>
          !console.log(currentStepIndex, i, currentStepIndex <= i) && (
            <ListItem key={item.sm} hidden={currentStepIndex <= i}>
              Divided {item.divisor}x by {item.sm}
            </ListItem>
          )
      )}
      <ListItem key="final" hidden={finalHidden}>
        Calculated GCD is <GCD>{items[items.length - 1].gcd}</GCD> ({
          totalSquares
        }{' '}
        squares)
      </ListItem>
    </List>
  );
};

export default StepLog;
