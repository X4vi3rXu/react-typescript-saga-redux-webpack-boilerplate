import { all } from 'redux-saga/effects';
import async from '#/modules/asyncDemo/saga';

export default function* rootSaga() {
  yield all([
    // add saga generator function here
    // ex: infra()
    async(),
  ]);
  // code after all-effect
}
