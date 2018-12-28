import React, { Component } from 'react';
import { number } from 'prop-types';

import {
  Wrapper,
  Title,
  Instructions,
  Form,
  Label,
  Input,
  Message,
  Frame,
  StepWrapper,
  GridTile,
  Grid,
  ErrorMsg,
  Image,
} from './App.css';
import Step from './Step';
import StepLog from './StepLog';
import descending from './utils/descending';
import { gcdSteps, calcGCDSquares } from './utils/gcd';
import Pattern from './assets/images/pattern.png';
const calcGCDSteps = descending(gcdSteps);

// Functional setState for input values.
const setInputs = inputs => () => ({ inputs });

const LANDSCAPE = 'row';
const PORTRAIT = 'column';

class App extends Component {
  static propTypes = {
    maxWidth: number,
    maxHeight: number,
  };

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
        {children.map((child, i) => (
          <GridTile key={i} size={gcd} />
        ))}{' '}
      </Grid>
    );
  };

  renderInputForm = inputs => (
    <Form>
      <Label htmlFor="width">W</Label>
      <Input id="width" onChange={this.onInputChange} value={inputs[0]} />
      <Label htmlFor="height">H</Label>
      <Input id="height" onChange={this.onInputChange} value={inputs[1]} />
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
        <Image src={Pattern} />
        <Title>Euclidean Algorithm</Title>
        <Instructions>
          Enter 2 numbers to find the greatest common divisor
        </Instructions>
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
        <Message width={inputs[0]}>
          Step through the algorithm by clicking above.
        </Message>
        <StepLog
          items={steps}
          currentStepIndex={currentStepIndex}
          totalSquares={totalSquares}
        />
      </Wrapper>
    );
  }
}

export default App;
