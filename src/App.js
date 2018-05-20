import React, { Component } from 'react';

import './index.css';

import Step from './Step';
import descending from './utils/descending';
import { gcd, gcdSteps } from './utils/gcd';

const calcGCDSteps = descending(gcdSteps);

// Functional setState for input values.
const setInputs = inputs => () => ({ inputs });

const VISIBLE_CHILD_MAX = 1000;
const LANDSCAPE = 'row';
const PORTRAIT = 'column';

class App extends Component {
  constructor(props) {
    super(props);
    const { width, height } = props;
    const inputs = [];
    if (width && height) {
      inputs.push(width);
      inputs.push(height);
    }

    const steps = this.getSteps(inputs);
    this.state = {
      inputs,
      steps,
      currentStepIndex: 0,
    };
  }

  onInputChange = event => {
    const index = parseInt(event.target.id, 10);
    const value = parseInt(event.target.value, 10);

    const { inputs } = this.state;
    const newInputs = [...inputs];
    newInputs[index] = value || 0;

    this.setState(setInputs(newInputs));
    const steps = this.getSteps(newInputs);
    this.setState({ steps });
    this.setState({ currentStepIndex: 0 });
  };

  getSteps = inputs =>
    this.hasBothInputs(inputs) ? calcGCDSteps(...inputs) : [];

  inputsToStyle = inputs => {
    return {
      width: inputs[0],
      height: inputs[1],
    };
  };

  hasBothInputs = inputs => inputs && inputs[0] && inputs[1];

  onClick = () => {
    this.setState(({ steps, currentStepIndex }) => {
      const newCurrentStepIndex =
        steps.length && currentStepIndex <= steps.length - 1
          ? currentStepIndex + 1
          : 0;

      return {
        currentStepIndex: newCurrentStepIndex,
      };
    });
  };

  flipOrientation = orientation =>
    orientation === LANDSCAPE ? PORTRAIT : LANDSCAPE;

  renderStep = (steps = [], index, orientation, currentStepIndex) => {
    if (index > steps.length - 1) {
      return null;
    }

    if (currentStepIndex <= index) {
      return null;
    }

    const step = steps[index];
    const { lg, size } = step;
    const height = orientation === LANDSCAPE ? size : lg;
    const width = orientation === LANDSCAPE ? lg : size;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: orientation,
          boxSizing: 'border-box',
          width,
          height,
        }}
      >
        <Step step={step} orientation={orientation} style={{}} />
        {this.renderStep(
          steps,
          index + 1,
          this.flipOrientation(orientation),
          currentStepIndex
        )}
      </div>
    );
  };

  render() {
    const { inputs, steps, currentStepIndex } = this.state;
    const width = inputs[0];
    const height = inputs[1];
    const orientation = width > height ? LANDSCAPE : PORTRAIT;
    let gcd = 0;
    let totalSquares = 0;
    if (steps.length) {
      gcd = steps[steps.length - 1].gcd;
      totalSquares = inputs[0] * inputs[1] / gcd;
    }
    return (
      <div>
        <h1>Euclidean Algorithm</h1>
        <p>Enter 2 numbers to find the greatest common divisor</p>

        <div>
          <label>Width</label>
          <input id="0" onChange={this.onInputChange} value={inputs[0]} />
          <label>Height</label>
          <input id="1" onChange={this.onInputChange} value={inputs[1]} />
        </div>
        <div>
          The GCD is {gcd} ({totalSquares} squares) The current step is{' '}
          {currentStepIndex}/{steps.length}
        </div>
        <div
          style={{
            width: inputs[0],
            height: inputs[1],
            border: '1px solid gray',
            display: 'flex',
            flexDirection: orientation,
            boxSizing: 'border-box',
            cursor: 'pointer',
          }}
          onClick={this.onClick}
        >
          {steps.length &&
            this.renderStep(steps, 0, orientation, currentStepIndex)}
        </div>
      </div>
    );
  }
}

export default App;
