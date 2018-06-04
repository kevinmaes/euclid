import { gcd, gcdSteps } from './gcd';

describe('gcd()', () => {
  it('should return the greatest common divisor when a % b is 0', () => {
    const result = gcd(10, 5);

    expect(result).toBe(5);
  });

  it('should return the greatest common divisor when a % b is not 0', () => {
    const result = gcd(10, 4);

    expect(result).toBe(2);

  });

  it('should return the greatest common divisor when a and b have no gcd other than 1', () => {
    const result = gcd(10, 3);

    expect(result).toBe(1);
  });
});

describe('gcdSteps()', () => {
  it('should return the greatest common divisor when a % b is 0', () => {
    const result = gcdSteps(10, 5);

    expect(result.length).toBe(1);
    expect(result[result.length - 1].gcd).toBe(5);
  });

  it('should return the greatest common divisor when a % b is not 0', () => {
    const result = gcdSteps(10, 4);

    expect(result.length).toBe(2);
    expect(result[result.length - 1].gcd).toBe(2);
  });

  it('should return the greatest common divisor when a and b have no gcd other than 1', () => {
    const result = gcdSteps(10, 3);

    expect(result.length).toBe(2);
    expect(result[result.length - 1].gcd).toBe(1);
  });

  it('should return the greatest common divisor within 3 steps', () => {
    const result = gcdSteps(345, 150);

    expect(result.length).toBe(3);
    expect(result[result.length - 1].gcd).toBe(15);
  });

  it('should return the greatest common divisor within 3 steps', () => {
    const result = gcdSteps(690, 300);

    expect(result.length).toBe(3);
    expect(result[result.length - 1].gcd).toBe(30);
  });

  it('should return the greatest common divisor within after many steps', () => {
    const result = gcdSteps(690, 301);

    expect(result.length).toBe(8);
    expect(result[result.length - 1].gcd).toBe(1);
  });
});
