import actions from 'reduxUtils/actions';

const commonActions = actions.COMMON;

const initialState = {
  counter: '100',
  data: [],
  isLoading: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case commonActions.SET_COUNTER_REQUEST_SUCCESS.type:
      return { ...state, counter: action.payload };
    case commonActions.GET_DATA_REQUEST_SUCCESS.type:
      return { ...state, data: action.payload.data, error: false };
    case commonActions.GET_DATA_REQUEST_ERROR.type:
      return { ...state, error: true };
    case commonActions.START_LOADER.type:
      return { ...state, isLoading: true };
    case commonActions.STOP_LOADER.type:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
