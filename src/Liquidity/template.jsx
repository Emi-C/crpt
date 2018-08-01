import React from 'react';
import PropTypes from 'prop-types';
import {
  VictoryScatter,
  VictoryChart,
  VictoryTooltip,
  VictoryTheme,
  VictoryZoomContainer,
} from 'victory';

const Liquidity = (props) => {
  const tooltipGenerator = (el) =>
    `${el.name}\nMarket Cap (Billion $): ${(el.quotes.USD.market_cap / 1000000000).toFixed(
      2
    )}\nVolume in last 24h (Billion $): ${(el.quotes.USD.volume_24h / 1000000000).toFixed(
      2
    )}\nChange in last 24h : ${el.quotes.USD.percent_change_24h}%`;

  const dataArray = props.data.map((el) => ({
    name: el.name,
    x: el.quotes.USD.market_cap / 1000000000,
    y: el.quotes.USD.volume_24h / 1000000000,
    z: Math.abs(el.quotes.USD.percent_change_24h),
    label: tooltipGenerator(el),
  }));

  return (
    <div className="Liquidity">
      <h1>Liquidity</h1>
      <div className="chartContainer">
        <span className="legend yaxis">Volume (24h) in Billion $</span>
        <span className="legend xaxis">Market Cap in Billion $</span>
        <VictoryChart
          theme={VictoryTheme.material}
          containerComponent={<VictoryZoomContainer />}
          scale={{ x: 'log', y: 'log' }}
        >
          <VictoryScatter
            maxBubbleSize={10}
            minBubbleSize={1}
            bubbleProperty="z"
            scale={{ x: 'log', y: 'log' }}
            labelComponent={
              <VictoryTooltip
                flyoutStyle={{
                  stroke: 'white',
                  fill: 'rgb(69, 90, 100)',
                }}
              />
            }
            style={{ data: { fill: '#fff', cursor: 'pointer' }, labels: { fill: '#fff' } }}
            data={dataArray}
          />
        </VictoryChart>
      </div>
    </div>
  );
};

Liquidity.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Liquidity;
