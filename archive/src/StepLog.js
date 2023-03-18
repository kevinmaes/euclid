import React from 'react';

import { List, ListItem, GCD } from './StepLog.css';

const displayLogItem = ({ divisor, sm, remainder }, index) => {
  let logTxt = `Divided ${divisor}x by ${sm}`;

  if (remainder) {
    logTxt = `${logTxt} (${remainder} left)`;
  }
  return `Step ${index + 1}: ${logTxt}`;
};

const StepLog = ({ items, currentStepIndex, totalSquares }) => {
  const finalHidden = currentStepIndex <= items.length;
  return (
    <List>
      <ListItem key="start">
        Problem: Rectangle is {items[0].lg} x {items[0].sm}
      </ListItem>
      {items.map((item, i) => (
        <ListItem key={item.sm} hidden={currentStepIndex <= i}>
          {displayLogItem(item, i)}
        </ListItem>
      ))}
      <ListItem key="final" hidden={finalHidden}>
        Solution: Calculated GCD is <GCD>{items[items.length - 1].gcd}</GCD> (
        {totalSquares} squares)
      </ListItem>
    </List>
  );
};

export default StepLog;
