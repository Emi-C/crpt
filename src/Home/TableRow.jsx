import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => (
  <tr>
    <td>{props.data.rank}</td>
    <td>{props.data.name}</td>
    <td>{props.data.quotes.USD.price.toLocaleString('us-US')}</td>
    <td>{`${props.data.quotes.USD.percent_change_24h}%`}</td>
    <td>
      {props.data.quotes.USD.market_cap.toLocaleString('us-US', {
        style: 'currency',
        currency: 'USD',
      })}
    </td>
    <td>
      {props.data.quotes.USD.volume_24h.toLocaleString('us-US', {
        style: 'currency',
        currency: 'USD',
      })}
    </td>
  </tr>
);

TableRow.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TableRow;
