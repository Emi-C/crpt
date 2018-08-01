import { connect } from 'react-redux';
import actions from 'reduxUtils/actions';
import App from './template';

const appActions = actions.APP;
const mapDispatchToProps = (dispatch) => ({
  bootstrap: () => dispatch(appActions.BOOTSTRAP.create()),
  changeCounter: (counter) => dispatch(appActions.CHANGE_COUNTER.create({ counter })),
});
const mapStateToProps = (state) => ({
  counter: state.counter,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
