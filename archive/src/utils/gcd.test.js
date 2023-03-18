import { gcd, gcdSteps, calcGCDSquares } from './gcd';

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

describe('calcGCDSquares()', () => {
  it('should return a default object if there are no steps passed in', () => {
    const steps = [];
    const inputs = [];

    const result = calcGCDSquares(steps, inputs);

    expect(result).toEqual({ gcd: 0, totalSquares: 0 });
  });

  it('should return an object with gcd and totalSquares if there is 1 step', () => {
    const steps = [
      {
        gcd: 1,
      },
    ];
    const inputs = [1, 5];

    const result = calcGCDSquares(steps, inputs);

    expect(result).toEqual({ gcd: 1, totalSquares: 5 });
  });

  it('should return an object with gcd and totalSquares if there are 2 steps', () => {
    const steps = [
      {
        gcd: null,
      },
      {
        gcd: 1,
      },
    ];
    const inputs = [5, 2];

    const result = calcGCDSquares(steps, inputs);

    expect(result).toEqual({ gcd: 1, totalSquares: 10 });
  });

  it('should return an object with gcd and totalSquares if there are 3 or more steps', () => {
    const steps = [
      {
        gcd: null,
      },
      {
        gcd: null,
      },
      {
        gcd: 15,
      },
    ];
    const inputs = [345, 150];

    const result = calcGCDSquares(steps, inputs);

    expect(result).toEqual({ gcd: 15, totalSquares: 230 });
  });
});
