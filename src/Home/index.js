//connection
import { connect } from 'react-redux';
import Home from './template';

const mapStateToProps = (state) => ({
  counter: state.counter,
  data: state.data,
  isLoading: state.isLoading,
  error: state.error,
});

export default connect(
  mapStateToProps,
  null
)(Home);
