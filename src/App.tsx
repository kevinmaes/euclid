import { useState } from 'react';
import { useMachine } from '@xstate/react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {
  Instructions,
  // Form, Input, Instructions, Label,
  Title,
  Wrapper,
} from './App.css';
import { StepLog } from './StepLog';
import { descending } from './utils/descending';
import { gcdSteps, calcGCDSquares } from './utils/gcd';
import { machine } from './machine';

function App() {
  const [state, send] = useMachine(machine);

  const calcGCDSteps = descending(gcdSteps);

  const hasBothInputs = (inputs: number[]) => inputs[0] && inputs[1];

  const getSteps = (inputs: number[]) =>
    hasBothInputs(inputs) ? calcGCDSteps(inputs[0], inputs[1]) : [];

  const inputs = [20, 50];
  const steps = getSteps(inputs);
  const { gcd, totalSquares } = calcGCDSquares(steps, inputs);

  const renderInputForm = (inputs: number[]) => (
    <form>
      <label htmlFor="width">W</label>
      <input
        id="width"
        //  onChange={onInputChange}
        value={inputs[0]}
      />
      <label htmlFor="height">H</label>
      <input
        id="height"
        // onChange={onInputChange}
        value={inputs[1]}
      />
    </form>
  );

  return (
    <div className="App">
      <h1>Euclidean Algorithm</h1>
      <p>Enter 2 numbers to find the greatest common divisor</p>
      {renderInputForm(inputs)}
      {/* 
        {this.hasBothInputs(inputs) ? (
          <StyledResizableBox
            className="box"
            width={inputs[0]}
            height={inputs[1]}
            minConstraints={[100, 100]}
            maxConstraints={[1000, 1000]}
            onResizeStart={this.reset}
            onResizeStop={(_, { size }) => {
              this.resize(size);
            }}
            onClick={this.onClick}
          >
            <StepFrame style={{ position: 'absolute', top: 0, left: 0 }}>
              {this.renderStep(steps, 0, orientation, currentStepIndex)}
              <SolutionGrid
                dimensions={{ width: inputs[0], height: inputs[1] }}
                totalSquares={totalSquares}
                gcd={gcd}
                currentStepIndex={currentStepIndex}
                totalSteps={steps.length}
              />
            </StepFrame>
          </StyledResizableBox>
        ) : (
          <ErrorMsg>Width and Height are required!</ErrorMsg>
        )}
        <div>
          <Message width={inputs[0]}>
            Step through the algorithm by clicking above.
          </Message>
        </div>
        <StepLog
          items={steps}
          currentStepIndex={currentStepIndex}
          totalSquares={totalSquares}
        /> */}

      {/* <StepLog items={steps} currentStepIndex={0} totalSquares={totalSquares} /> */}
    </div>
  );
}

export default App;
