import axios from 'axios';

const api = {
  getData: (payload) =>
    axios.get('https://api.coinmarketcap.com/v2/ticker/', {
      params: {
        limit: payload,
        structure: 'array',
      },
    }),
};

export default api;
