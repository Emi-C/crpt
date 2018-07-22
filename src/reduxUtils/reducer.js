import actions from 'reduxUtils/actions';

const commonActions = actions.COMMON;

const initialState = {
  counter: '100',
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case commonActions.SET_COUNTER_REQUEST_SUCCESS.type:
      return { ...state, counter: action.payload };
    case commonActions.GET_DATA_REQUEST_SUCCESS.type:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
};
