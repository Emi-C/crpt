import { connect } from 'react-redux';
import App from './template';

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(
  mapStateToProps,
  null
)(App);
