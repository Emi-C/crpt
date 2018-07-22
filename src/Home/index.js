//connection
import { connect } from 'react-redux';
import actions from 'reduxUtils/actions';
import Home from './template';

const homeActions = actions.HOME;
const mapDispatchToProps = (dispatch) => ({
  changeCounter: (counter) => dispatch(homeActions.CHANGE_COUNTER.create({ counter })),
});

const mapStateToProps = (state) => ({
  counter: state.counter,
  data: state.data,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
