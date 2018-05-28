import React, { Component } from 'react';

import { Title, Frame } from './App.css';

import Step from './Step';
import './index.css';

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
      gridView: false,
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

  toggleGridView = event => {
    this.setState(({ gridView }) => ({ gridView: !gridView }));
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

  renderGrid = (totalSquares, gcd) => {
    const children = new Array(totalSquares);
    children.fill({});
    return children.map((child, i) => (
      <div
        key={i}
        style={{
          width: gcd,
          height: gcd,
          border: '1px dotted green',
          boxSizing: 'border-box',
        }}
      />
    ));
  };

  render() {
    const { inputs, steps, currentStepIndex, gridView } = this.state;
    const width = inputs[0];
    const height = inputs[1];
    const orientation = width > height ? LANDSCAPE : PORTRAIT;
    let gcd = 0;
    let totalSquares = 0;
    if (steps.length) {
      gcd = steps[steps.length - 1].gcd;
      totalSquares = inputs[0] / gcd * inputs[1] / gcd;
    }

    return (
      <div>
        <Title>Euclidean Algorithm</Title>
        <p>Enter 2 numbers to find the greatest common divisor</p>

        <div>
          <label>Width</label>
          <input id="0" onChange={this.onInputChange} value={inputs[0]} />
          <label>Height</label>
          <input id="1" onChange={this.onInputChange} value={inputs[1]} />
        </div>
        <div>
    The GCD is {gcd} ({totalSquares} squares). Showing step {' '}
          {currentStepIndex}/{steps.length}
        </div>
        {this.hasBothInputs(inputs) ? (
          <Frame
            width={inputs[0]}
            height={inputs[1]}
            flexDirection={orientation}
            onClick={this.onClick}
          >
            {gridView
              ? this.renderGrid(totalSquares, gcd)
              : this.renderStep(steps, 0, orientation, currentStepIndex)}
          </Frame>
        ) : (
          <div>Both width and height are required!</div>
        )}
        <button onClick={this.toggleGridView}>
          {gridView ? 'Step View' : 'Grid View'}{' '}
        </button>
      </div>
    );
  }
}

export default App;
