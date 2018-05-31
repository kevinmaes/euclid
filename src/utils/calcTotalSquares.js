export default (steps, inputs) => {
  const retObj = { gcd: 0, totalSquares: 0 };
  if (!steps.length) {
    return retObj;
  }
  const gcd = steps[steps.length - 1].gcd;
  retObj.gcd = gcd;
  retObj.totalSquares = inputs[0] / gcd * inputs[1] / gcd;

  return retObj;
};
