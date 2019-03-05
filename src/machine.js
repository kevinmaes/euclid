const { Machine, actions } = require('xstate');
const { assign } = actions;

const initialContext = {
  width: 400,
  height: 350,
  totalSteps: undefined,
  currentStepIndex: undefined,
};

function validateDimensions(ctx) {
  return true;
}

function checkSolved(ctx) {
  return false;
}

const euclidMachine = Machine(
  {
    initial: 'dimensionsSelected',
    states: {
      dimensionsSelected: {},
      solving: {
        '': [{ target: 'winner', cond: 'checkSolved' }],
        SOLVE: [
          {
            target: 'solving',
            actions: 'updateSolutionStep',
          },
        ],
        RESIZE: [{ target: 'dimensionsSelected', cond: 'validateDimensions' }],
      },
      solved: {
        onEntry: 'setSolution',
        on: {
          RESET: {
            target: 'solving',
            actions: 'reset',
          },
        },
      },
    },
  },
  {
    actions: {
      updateSolutionStep: assign({
        // board: (ctx, e) => {
        //   const updatedBoard = [...ctx.board];
        //   updatedBoard[e.value] = ctx.player;
        //   return updatedBoard;
        // },
        // moves: ctx => ctx.moves + 1,
        // player: ctx => (ctx.player === 'x' ? 'o' : 'x'),
      }),
      reset: assign(initialContext),
      setSolution: assign({
        // winner: ctx => (ctx.player === 'x' ? 'o' : 'x'),
      }),
    },
    guards: {
      validateDimensions,
      checkSolved,
    },
  },
  initialContext
);

export { euclidMachine };
