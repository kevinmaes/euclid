import React, { Component } from "react";

import "./index.css";

import Step from "./Step";
import descending from "./utils/descending";
import { gcd, gcdSteps } from "./utils/gcd";

const calcGCD = descending(gcd);
const calcGCDSteps = descending(gcdSteps);

// Functional setState for input values.
const setInputs = inputs => () => ({ inputs });

const VISIBLE_CHILD_MAX = 1000;

// const PROBLEM = "renderProblem";
// const MEASUREMENT = "renderMeasurement";
// const SOLUTION = "renderSolution";
// const renderers = [PROBLEM, MEASUREMENT, SOLUTION];

class App extends Component {
  constructor(props) {
    super(props);
    const { width, height } = props;
    const inputs = [];
    if (width && height) {
      inputs.push(width);
      inputs.push(height);
    }

    const steps = calcGCDSteps(width, height);
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
    const steps = calcGCDSteps(...newInputs);
    this.setState({ steps });
    this.setState({ currentStepIndex: 0 });
  };

  calculateResult = inputs =>
    this.hasBothInputs(inputs) ? calcGCD(...inputs) : 0;

  inputsToStyle = inputs => {
    return {
      width: inputs[0],
      height: inputs[1]
    };
  };

  hasBothInputs = inputs => inputs && inputs[0] && inputs[1];

  onClick = () => {
    this.setState(({ steps, currentStepIndex }) => {
      const newCurrentStepIndex = currentStepIndex < steps.length - 1
        ? currentStepIndex + 1
        : 0;

      return {
        currentStepIndex: newCurrentStepIndex,
      }
    })
  };

  renderProblem = inputs => <Step inputs={inputs} />;

  renderMeasurement = inputs => <Step inputs={inputs} showChildren />;

  renderSolution = (inputs, children) => {
    const { result } = this.state;

    return (
      <div
        className="rectangle"
        style={{
          width: inputs[0],
          height: inputs[1]
        }}
      >
        {children.length <= VISIBLE_CHILD_MAX &&
          children.map((child, i) => (
            <div
              className="child"
              key={i}
              style={{ width: result, height: result }}
            />
          ))}
      </div>
    );
  };

  render() {
    const { inputs, steps, currentStepIndex } = this.state;

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
          {/* The GCD is {result} ({children.length} squares) */}
          The current step is {currentStepIndex}
        </div>
        <button onClick={this.onClick}></button>
        {/* <div onClick={this.onClick}>{renderFn(inputs, children)}</div> */}
      </div>
    );
  }
}

export default App;
