import { put, delay, takeEvery } from 'redux-saga/effects';

import * as actions from '../redux/actionType';

function* asyncDemoIncrease() {
  yield delay(2000);
  yield put({
    type: actions.ASYNC_DEMO_INCREASE_AFTER,
    num: 10,
  });
}

function* asyncDemoDecrease() {
  yield delay(1000);
  yield put({
    type: actions.ASYNC_DEMO_DECREASE_AFTER,
    num: 10,
  });
}

export default function* asyncSaga() {
  yield takeEvery(actions.ASYNC_DEMO_INCREASE, asyncDemoIncrease);
  yield takeEvery(actions.ASYNC_DEMO_DECREASE, asyncDemoDecrease);
}
