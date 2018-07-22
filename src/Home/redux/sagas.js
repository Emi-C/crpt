import { call, put, select, takeLatest } from 'redux-saga/effects';
import actions from 'reduxUtils/actions';
import { setCounterRequest, getDataRequest } from 'reduxUtils/commonSagas';

function* changeCounter({ payload }) {
  try {
    yield call(setCounterRequest, payload.counter);
    const newCounter = yield select((state) => state.counter);
    yield call(getDataRequest, newCounter);
    //counter has to be the arg, but this is correct flow, set -> select-> use
    yield put(actions.HOME.CHANGE_COUNTER_SUCCESS.create());
  } catch (err) {
    yield put(actions.HOME.CHANGE_COUNTER_ERROR.create());
    throw err;
  }
}

export default function* HomeSaga() {
  yield takeLatest(actions.HOME.CHANGE_COUNTER.create().type, changeCounter);
}
