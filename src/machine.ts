import { createMachine, assign } from 'xstate';

export const machine = createMachine(
  {
    id: "Euclid's Algorithm (copy)",
    initial: 'Idle',
    states: {
      Idle: {
        description: 'Values: [A, B].',
        on: {
          Start: {
            target: 'Validating',
            actions: 'setNewValues',
          },
        },
      },
      Done: {
        entry: 'displayGCD',
      },
      Calculating: {
        description: 'Divide A/B.',
        entry: 'divideValues',
        always: [
          {
            target: 'Done',
            cond: 'remainder is 0',
            actions: 'setGCDToB',
          },
          {
            target: 'Calculating',
            actions: 'refreshValues',
            description: 'New value pair should be [B, remainder].',
            internal: false,
          },
        ],
      },
      Error: {},
      Sorting: {
        description: 'Set sorted A, B values: [larger, smaller]',
        entry: 'setSortedValues',
        always: {
          target: 'Calculating',
        },
      },
      Validating: {
        initial: 'Unknown',
        states: {
          Unknown: {
            always: [
              {
                target: "#Euclid's Algorithm (copy).Error",
                cond: 'A or B are negative',
                actions: 'setGCDToZero',
              },
              {
                target: 'Validating B',
                cond: 'A is 0',
              },
              {
                target: "#Euclid's Algorithm (copy).Done",
                cond: 'B is 0',
                actions: 'setGCDToA',
              },
              {
                target: "#Euclid's Algorithm (copy).Sorting",
              },
            ],
          },
          'Validating B': {
            always: [
              {
                target: "#Euclid's Algorithm (copy).Done",
                cond: 'B is 0',
                actions: 'setGCDToZero',
              },
              {
                target: "#Euclid's Algorithm (copy).Done",
                actions: 'setGCDToB',
              },
            ],
          },
        },
      },
    },
    tsTypes: {} as import('./machine.typegen').Typegen0,
    schema: {
      context: {} as {
        gcd: unknown;
        values: any[];
        remainder: number;
      },
      events: {} as { type: 'Start'; values: [number, number] },
    },
    context: { gcd: null, values: [], remainder: 0 },
    predictableActionArguments: true,
    preserveActionOrder: true,
  },
  {
    guards: {
      'A or B are negative': (ctx, event) =>
        ctx.values[0] < 0 || ctx.values[1] < 0,
      'A is 0': (ctx) => ctx.values[0] === 0,
      'B is 0': (ctx) => ctx.values[1] === 0,
      'remainder is 0': (ctx) => ctx.remainder === 0,
    },
    actions: {
      setNewValues: assign({
        values: (_, event) => event.values,
      }),
      setGCDToZero: assign({
        gcd: () => 0,
      }),
      setGCDToA: assign({
        gcd: (ctx) => ctx.values[0],
      }),
      setGCDToB: assign({
        gcd: (ctx) => ctx.values[1],
      }),
      setSortedValues: assign({
        values: (ctx) => ctx.values.sort((a, b) => b - a),
      }),
      divideValues: assign({
        remainder: (ctx) => ctx.values[0] % ctx.values[1],
      }),
      refreshValues: assign({
        values: (ctx) => [ctx.values[1], ctx.remainder],
      }),
      displayGCD: (ctx) => {
        console.log(`GCD is ${ctx.gcd}.`);
      },
    },
  }
);
