import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

const Home = (props) => {
  const changeCounter = () => {
    const counter = document.getElementById('counter').value;
    props.changeCounter(counter);
  };
  return (
    <div className="Home">
      <h1>ticker</h1>
      <span>Get first </span>
      <select id="counter" onChange={changeCounter} value={props.counter}>
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="all">all</option>
      </select>
      <span> results</span>
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            <tr>
              <th>RANK</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>PRICE CHANGE (24h)</th>
              <th>MARKET CAP</th>
              <th>VOLUME (24h)</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table cellPadding="0" cellSpacing="0" border="0">
          <tbody>{props.data.map((el, i) => <TableRow key={i} data={el} />)}</tbody>
        </table>
      </div>
    </div>
  );
};

Home.propTypes = {
  counter: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  changeCounter: PropTypes.func.isRequired,
};

export default Home;
