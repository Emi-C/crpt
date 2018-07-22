import { all } from 'redux-saga/effects';
import HomeSaga from 'Home/redux/sagas';
import AppSaga from 'App/redux/sagas';

export default function* sagas() {
  yield all([HomeSaga(), AppSaga()]);
}
