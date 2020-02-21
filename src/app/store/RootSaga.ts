import { all, fork } from 'redux-saga/effects';

import mainScreenSaga from '@pages/MainScreen/store/saga';

export default function* rootSaga() {
  yield all([fork(mainScreenSaga)]);
}
