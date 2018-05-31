import React, { Component } from 'react';

import { Title, Frame, StepWrapper, GridTile, Grid } from './App.css';

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
        steps.length && currentStepIndex <= steps.length
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
    // There are no steps to be rendered.
    if (index > steps.length - 1) {
      return null;
    }

    const hidden = currentStepIndex <= index || currentStepIndex > steps.length;

    console.log('renderStep', hidden, currentStepIndex, index);
    const step = steps[index];
    const { lg, size } = step;
    const height = orientation === LANDSCAPE ? size : lg;
    const width = orientation === LANDSCAPE ? lg : size;
    return (
      <StepWrapper
        orientation={orientation}
        width={width}
        height={height}
        hidden={hidden}
      >
        <Step step={step} orientation={orientation} style={{}} />
        {this.renderStep(
          steps,
          index + 1,
          this.flipOrientation(orientation),
          currentStepIndex
        )}
      </StepWrapper>
    );
  };

  renderGrid = (totalSquares, gcd, currentStepIndex, totalSteps) => {
    const hidden = currentStepIndex < totalSteps + 1;
    console.log('grid hidden', hidden, currentStepIndex, totalSteps);
    const children = new Array(totalSquares);
    children.fill({});
    return (
      <Grid hidden={hidden}>
        {children.map((child, i) => <GridTile key={i} size={gcd} />)}{' '}
      </Grid>
    );
  };

  renderMsg = (gcd, totalSquares, steps, currentStepIndex) => {
    if (currentStepIndex === 0) {
      return 'Click the rectangle to start calculating the GCD';
    }
    if (currentStepIndex > steps.length) {
      return `GCD is ${gcd} (${totalSquares} squares)`;
    }
    return `Showing step ${currentStepIndex} of ${steps.length}`;
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
        <div>{this.renderMsg(gcd, totalSquares, steps, currentStepIndex)}</div>
        {this.hasBothInputs(inputs) ? (
          <Frame
            width={inputs[0]}
            height={inputs[1]}
            flexDirection={orientation}
            onClick={this.onClick}
          >
            {this.renderStep(steps, 0, orientation, currentStepIndex)}
            {this.renderGrid(totalSquares, gcd, currentStepIndex, steps.length)}
          </Frame>
        ) : (
          <div>Both width and height are required!</div>
        )}
      </div>
    );
  }
}

export default App;
