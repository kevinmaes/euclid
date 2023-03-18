export const gcd = (lg: number, sm: number): number => {
  const rem = lg % sm;
  return rem === 0 ? sm : gcd(sm, rem);
};

const modulo = (
  lg: number,
  sm: number
): { divisor: number; remainder: number } => {
  const divisor = Math.floor(lg / sm);
  const remainder = lg % sm;
  return {
    divisor,
    remainder,
  };
};

export const gcdSteps = (lg: number, sm: number, steps: number[] = []) => {
  const { divisor, remainder } = modulo(lg, sm);

  const step = {
    lg,
    sm,
    size: sm,
    divisor,
    remainder,
    gcd: null,
  };
  steps.push(step);

  if (remainder === 0) {
    step.gcd = sm;
    return steps;
  }

  return gcdSteps(sm, remainder, steps);
};

export const calcGCDSquares = (steps, inputs) => {
  const retObj = { gcd: 0, totalSquares: 0 };
  if (!steps.length) {
    return retObj;
  }
  const gcd = steps[steps.length - 1].gcd;
  retObj.gcd = gcd;
  retObj.totalSquares = ((inputs[0] / gcd) * inputs[1]) / gcd;

  return retObj;
};
