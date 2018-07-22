import React from 'react';
import PropTypes from 'prop-types';
import { VictoryScatter, VictoryChart, VictoryTooltip, VictoryTheme } from 'victory';

const Liquidity = (props) => {
  //const radiusArray = props.data.map((el) => Math.abs(el.quotes.USD.percent_change_24h));

  const dataArray = props.data.map((el) => ({
    name: el.name,
    x: el.quotes.USD.market_cap,
    y: el.quotes.USD.volume_24h,
    z: el.quotes.USD.percent_change_24h,
    labels: '',
  }));

  console.log(props.data);

  return (
    <div className="Home">
      <h1>ticker</h1>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryScatter
          bubbleProperty="z"
          labelComponent={<VictoryTooltip />}
          style={{ data: { fill: '#fff' } }}
          data={dataArray}
        />
      </VictoryChart>
    </div>
  );
};

Liquidity.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Liquidity;
