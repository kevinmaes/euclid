/**
 * HOC to ensure that args (number) passed to the wrapped function
 * are in descending order.
 */
export default fn => (...args) => {
  // Reverse the args so that they are
  if (args[0] < args[1]) {
    args.reverse();
  }
  return fn(...args);
};
