import React, { Component } from 'react';

import {
  Wrapper,
  Title,
  Form,
  Label,
  Message,
  Frame,
  StepWrapper,
  GridTile,
  Grid,
  ErrorMsg,
} from './App.css';

import Step from './Step';

import descending from './utils/descending';
import { gcd, gcdSteps, calcGCDSquares } from './utils/gcd';

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
    const index = event.target.id === 'width' ? 0 : 1;
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
    const children = new Array(totalSquares);
    children.fill({});
    return (
      <Grid hidden={hidden}>
        {children.map((child, i) => <GridTile key={i} size={gcd} />)}{' '}
      </Grid>
    );
  };

  renderMsg = (gcd, totalSquares, steps, currentStepIndex) => {
    const currentStep = steps[currentStepIndex - 1];
    if (currentStepIndex === 0) {
      return 'Click the rectangle to start calculating the GCD';
    }
    if (currentStepIndex > steps.length) {
      return `GCD is ${gcd} (${totalSquares} squares)`;
    }
    return `Showing step ${currentStepIndex} of ${steps.length}, size is ${
      currentStep.size
    }`;
  };

  renderInputForm = inputs => (
    <Form>
      <Label htmlFor="width">Width</Label>
      <input id="width" onChange={this.onInputChange} value={inputs[0]} />
      <Label htmlFor="height">Height</Label>
      <input id="height" onChange={this.onInputChange} value={inputs[1]} />
    </Form>
  );

  render() {
    const { inputs, steps, currentStepIndex } = this.state;
    const width = inputs[0];
    const height = inputs[1];
    const orientation = width > height ? LANDSCAPE : PORTRAIT;

    const { gcd, totalSquares } = calcGCDSquares(steps, inputs);

    return (
      <Wrapper>
        <Title>Euclidean Algorithm</Title>
        <p>Enter 2 numbers to find the greatest common divisor</p>
        {this.renderInputForm(inputs)}
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
          <ErrorMsg>Width and Height are required!</ErrorMsg>
        )}
        <Message>
          {this.renderMsg(gcd, totalSquares, steps, currentStepIndex)}
        </Message>
      </Wrapper>
    );
  }
}

export default App;
