import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'router';

class App extends React.PureComponent {
  componentDidMount() {
    this.props.bootstrap();
  }
  render() {
    return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  bootstrap: PropTypes.func.isRequired,
};

export default App;
