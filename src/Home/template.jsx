import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

const Home = (props) => (
  <div className="Home">
    <h1>ticker</h1>
    {props.isLoading ? (
      <p className="loading">loading....</p>
    ) : props.error ? (
      <p className="loading">ERROR</p>
    ) : (
      <div className="tbl-container">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead className="tbl-header">
            <tr>
              <th>RANK</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>PRICE CHANGE (24h)</th>
              <th>MARKET CAP</th>
              <th>VOLUME (24h)</th>
            </tr>
          </thead>
          <tbody className="tbl-content">
            {props.data.map((el, i) => <TableRow key={i} data={el} />)}
          </tbody>
        </table>
      </div>
    )}
  </div>
);

Home.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Home;
