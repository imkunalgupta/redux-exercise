import { connect } from 'react-redux';
import Steps from './Steps';
import MaxValue from './MaxValue';
import { increment, decrement, reset } from '../store/action';

function App(props) {
  return (
    <div className="container">
      <h1>{props.count}</h1>
      <div className="flex">
        <Steps />
        <MaxValue />
      </div>
      <div>
        <button onClick={() => props.dispatch(increment())}>Increment</button>
        <button onClick={() => props.dispatch(decrement())}>Decrement</button>
        <button onClick={() => props.dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

function getCount(state) {
  return {
    count: state.value,
  };
}

export default connect(getCount)(App);
