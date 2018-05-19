import { gcd, gcdSteps } from './gcd';

describe('gcd()', () => {
  it('it should return the greatest common divisor when a % b is 0', () => {
    const result = gcd(10, 5);

    expect(result).toBe(5);
  });

  it('it should return the greatest common divisor when a % b is not 0', () => {
    const result = gcd(10, 4);

    expect(result).toBe(2);
  });

  it('it should return the greatest common divisor when a and b have no gcd other than 1', () => {
    const result = gcd(10, 3);

    expect(result).toBe(1);
  });
});
