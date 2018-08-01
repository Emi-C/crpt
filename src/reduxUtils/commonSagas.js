import { put, call } from 'redux-saga/effects';
import actions from 'reduxUtils/actions';
import api from 'reduxUtils/api';

export function* setCounterRequest(counter) {
  try {
    yield put(actions.COMMON.SET_COUNTER_REQUEST_SUCCESS.create(counter));
  } catch (err) {
    yield put(actions.COMMON.SET_COUNTER_REQUEST_ERROR.create(err));
  }
}

export function* getDataRequest(counter) {
  try {
    yield put(actions.COMMON.START_LOADER.create());
    const data = yield call(api.getData, counter);
    yield put(actions.COMMON.GET_DATA_REQUEST_SUCCESS.create(data.data));
  } catch (err) {
    yield put(actions.COMMON.GET_DATA_REQUEST_ERROR.create(err));
  } finally {
    yield put(actions.COMMON.STOP_LOADER.create());
  }
}
