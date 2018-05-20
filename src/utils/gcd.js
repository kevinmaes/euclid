export const gcd = (lg, sm) => {
  const rem = lg % sm;
  return rem === 0 ? sm : gcd(sm, rem);
};

const modulo = (lg, sm) => {
  const divisor = Math.floor(lg / sm);
  const remainder = lg % sm;
  return {
    divisor, remainder,
  }
}

export const gcdSteps = (lg, sm, steps = []) => {
  const { divisor, remainder } = modulo(lg, sm)

  const step = {
    lg,
    sm,
    size: sm,
    divisor,
    remainder,
    gcd: null
  };
  steps.push(step);

  if (remainder === 0) {
    step.gcd = sm;
    // console.log('steps final', steps);
    return steps;
  }

  // console.log('steps', steps);
  return gcdSteps(sm, remainder, steps);
};
