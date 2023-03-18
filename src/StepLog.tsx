import React from 'react';

// import { List, ListItem, GCD } from './StepLog.css';

const displayLogItem = ({ divisor, sm, remainder }, index) => {
  let logTxt = `Divided ${divisor}x by ${sm}`;

  if (remainder) {
    logTxt = `${logTxt} (${remainder} left)`;
  }
  return `Step ${index + 1}: ${logTxt}`;
};

export const StepLog = ({ items, currentStepIndex, totalSquares }) => {
  const finalHidden = currentStepIndex <= items.length;
  return (
    <ul>
      <li key="start">
        Problem: Rectangle is {items[0].lg} x {items[0].sm}
      </li>
      {items.map((item, i) => (
        <li key={item.sm} hidden={currentStepIndex <= i}>
          {displayLogItem(item, i)}
        </li>
      ))}
      <li key="final" hidden={finalHidden}>
        Solution: Calculated GCD is <GCD>{items[items.length - 1].gcd}</GCD> (
        {totalSquares} squares)
      </li>
    </ul>
  );
};
