export const gcd = (a, b) => {
  const rem = a % b;
  return rem === 0 ? b : gcd(b, rem);
};

export const gcdSteps = (a, b, steps = []) => {
  const rem = a % b;

  if (rem === 0) {
    steps.push({
      gcd: b
    });
  }

  return gcdSteps(b, rem, steps);
};
