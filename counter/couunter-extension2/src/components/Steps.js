import { connect } from 'react-redux';
import { updateStep } from '../store/action';

function Steps(props) {
  function handleClick(step) {
    props.dispatch(updateStep(step));
  }
  return (
    <>
      <h2>Steps</h2>
      <div>
        <button
          onClick={() => handleClick(5)}
          className={props.step === 5 ? 'active' : 'steps'}
        >
          5
        </button>
        <button
          onClick={() => handleClick(10)}
          className={props.step === 10 ? 'active' : 'steps'}
        >
          10
        </button>
        <button
          onClick={() => handleClick(15)}
          className={props.step === 15 ? 'active' : 'steps'}
        >
          15
        </button>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    step: state.step,
  };
}

export default connect(mapStateToProps)(Steps);
