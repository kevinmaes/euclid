import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';

import Step from './Step';

const desc = fn => (...args) => {
  if (args[0] < args[1]) {
    args.reverse();
  }
  return fn(...args);
}

const gcd = (a, b) => {
  const rem = a % b;
  return rem === 0 ? b : gcd(b, rem);
}

const calcGCD = desc(gcd);

// Functional setState for input values.
const setInputs = inputs => () => ({ inputs });

// Functional setState for result.
const setResult = result => () => ({ result });

const VISIBLE_CHILD_MAX = 1000;

const PROBLEM = 'renderProblem';
const MEASUREMENT = 'renderMeasurement';
const SOLUTION = 'renderSolution';
const renderers = [PROBLEM, MEASUREMENT, SOLUTION];

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputs: [345, 150],
      result: 0,
      mode: 0,
    };
  }

  componentDidMount() {
    const { inputs } = this.state;
    const result = this.calculateResult(inputs);
    this.setState(setResult(result));
  }

  onInputChange = (event) => {
    const index = parseInt(event.target.id, 10);
    const value = parseInt(event.target.value, 10);

    const { inputs } = this.state;
    const newInputs = [...inputs]
    newInputs[index] = value || 0;
    const result = this.calculateResult(newInputs);

    this.setState(setInputs(newInputs));
    this.setState(setResult(result));
  }

  calculateResult = inputs => (
    this.hasBothInputs(inputs) ? calcGCD(...inputs) : 0
  );

  inputsToStyle = inputs => {
    return {
      width: inputs[0],
      height: inputs[1],
    };
  };

  hasBothInputs = inputs =>
    inputs && inputs[0] && inputs[1];

  onClick = () => {
    const { mode } = this.state;
    if ( mode < renderers.length - 1) {
      return this.setState({ mode: mode + 1 });
    }
    return this.setState({ mode: 0 });
  }

  renderProblem = (inputs) => (
    <Step inputs={inputs} />
  );

  renderMeasurement = (inputs) => (
    <Step inputs={inputs} showChildren />
  );

  renderSolution = (inputs, children) => {
    const { result } = this.state;

    return (
      <div
        className="rectangle"
        style={{
          width: inputs[0],
          height: inputs[1],
        }}
      >
        {children.length <= VISIBLE_CHILD_MAX &&
          children.map((child, i) => (
            <div
              className="child"
              key={i}
              style={{ width: result, height: result }}>
            </div>
          ))}
      </div>
    );
  };

  render() {
    const { inputs, result, mode } = this.state;

    const numChildren = (inputs[0] / result) * (inputs[1] / result);
    const children = [];
    if (this.hasBothInputs(inputs) && Number.isFinite(numChildren)) {
      children.length = numChildren;
      children.fill();
    }

    const renderFn = this[renderers[mode]];

    return (
      <div>
        <h1>Euclidean Algorithm</h1>
        <p>
          Enter 2 numbers to find the greatest common divisor
        </p>

        <div>
          <label>Width</label>
          <input id="0" onChange={this.onInputChange} value={inputs[0]}/>
          <label>Height</label>
          <input id="1" onChange={this.onInputChange} value={inputs[1]}/>
        </div>
        <div>The GCD is {result} ({children.length} squares)</div>
        <div onClick={this.onClick}>
        {renderFn(inputs, children)}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

