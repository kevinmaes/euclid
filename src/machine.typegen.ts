// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  internalEvents: {
    '': { type: '' };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    displayGCD: '';
    divideValues: '';
    refreshValues: '';
    setGCDToA: '';
    setGCDToB: '';
    setGCDToZero: '';
    setNewValues: 'Start';
    setSortedValues: '';
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {
    'A is 0': '';
    'A or B are negative': '';
    'B is 0': '';
    'remainder is 0': '';
  };
  eventsCausingServices: {};
  matchesStates:
    | 'Calculating'
    | 'Done'
    | 'Error'
    | 'Idle'
    | 'Sorting'
    | 'Validating'
    | 'Validating.Unknown'
    | 'Validating.Validating B'
    | { Validating?: 'Unknown' | 'Validating B' };
  tags: never;
}
