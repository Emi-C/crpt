import { connect } from 'react-redux';
import actions from 'reduxUtils/actions';
import App from './template';

const appActions = actions.APP;
const mapDispatchToProps = (dispatch) => ({
  bootstrap: () => dispatch(appActions.BOOTSTRAP.create()),
});

export default connect(
  null,
  mapDispatchToProps
)(App);
