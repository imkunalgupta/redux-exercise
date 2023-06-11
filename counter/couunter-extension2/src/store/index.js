import { createStore } from 'redux';

function counterReducer(
  state = { value: 0, step: 1, maxvalue: Infinity },
  action
) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        value:
          state.value + state.step <= state.maxvalue
            ? state.value + state.step
            : state.value,
      };

    case 'decrement':
      return { ...state, value: state.value - state.step };
    case 'changeStep':
      return { ...state, step: action.payload };
    case 'changeValue':
      return { ...state, maxvalue: action.maxvalue };
    case 'reset':
      return { ...state, value: 0 };
    default:
      return state;
  }
}

export let store = createStore(counterReducer);
