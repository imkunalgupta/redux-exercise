import { connect } from 'react-redux';
import { updateMaxValue } from '../store/action';

function MaxValue(props) {
  function handleClick(maxvalue) {
    props.dispatch(updateMaxValue(maxvalue));
  }
  return (
    <>
      <h2>Max Value</h2>
      <div>
        <button
          onClick={() => handleClick(15)}
          className={props.maxvalue === 15 ? 'active' : 'steps'}
        >
          15
        </button>
        <button
          onClick={() => handleClick(100)}
          className={props.maxvalue === 100 ? 'active' : 'steps'}
        >
          100
        </button>
        <button
          onClick={() => handleClick(200)}
          className={props.maxvalue === 200 ? 'active' : 'steps'}
        >
          200
        </button>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    maxvalue: state.maxvalue,
  };
}

export default connect(mapStateToProps)(MaxValue);
