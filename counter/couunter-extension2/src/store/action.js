export function increment() {
  return {
    type: 'increment',
  };
}

export function decrement() {
  return {
    type: 'decrement',
  };
}

export function reset() {
  return {
    type: 'reset',
  };
}

export function updateStep(step) {
  return {
    type: 'changeStep',
    payload: step,
  };
}

export function updateMaxValue(value) {
  return {
    type: 'changeValue',
    maxvalue: value,
  };
}
