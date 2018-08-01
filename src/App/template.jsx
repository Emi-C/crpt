import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'router';

class App extends React.PureComponent {
  componentDidMount() {
    this.props.bootstrap();
  }

  changeCounter = () => {
    const counter = document.getElementById('counter').value;
    this.props.changeCounter(counter);
  };
  render() {
    return (
      <React.Fragment>
        <span>Get first </span>
        <select id="counter" onChange={this.changeCounter} value={this.props.counter}>
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
          {/*<option value="all">all</option>*/}
        </select>
        <span> results</span>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  bootstrap: PropTypes.func.isRequired,
  counter: PropTypes.string.isRequired,
  changeCounter: PropTypes.func.isRequired,
};

export default App;
