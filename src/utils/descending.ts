/**
 * HOC to ensure that args (number) passed to the wrapped function
 * are in descending order.
 */
export const descending =
  (fn: (a: number, b: number) => number) => (a: number, b: number) => {
    // Reverse the args so that they are descending
    const sortedValues = [a, b].sort((a, b) => b - a);
    return fn(sortedValues[0], sortedValues[1]);
  };
