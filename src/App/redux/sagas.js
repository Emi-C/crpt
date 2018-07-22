import { call, put, takeLatest, select } from 'redux-saga/effects';
import actions from 'reduxUtils/actions';
import { setCounterRequest, getDataRequest } from 'reduxUtils/commonSagas';

function* bootstrap() {
  try {
    yield call(setCounterRequest, '100');
    const counter = yield select((state) => state.counter);
    yield call(getDataRequest, counter);
    //counter has to be 100, but this is correct flow, set -> select-> use
    yield put(actions.APP.BOOTSTRAP_SUCCESS.create());
  } catch (err) {
    yield put(actions.APP.BOOTSTRAP_ERROR.create());
    throw err;
  }
}

export default function* AppSaga() {
  yield takeLatest(actions.APP.BOOTSTRAP.create().type, bootstrap);
}
