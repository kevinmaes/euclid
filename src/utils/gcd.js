export const gcd = (a, b) => {
  const rem = a % b;
  return rem === 0 ? b : gcd(b, rem);
};

export const gcdSteps = (a, b, steps = []) => {
  const rem = a % b;

  const step = { a, b, rem, gcd: null };
  steps.push(step);

  if (rem === 0) {
    step.gcd = b;
    // console.log('steps final', steps);
    return steps;
  }

  // console.log('steps', steps);
  return gcdSteps(b, rem, steps);
};
