// saga.js
import { takeEvery, put } from 'redux-saga/effects';

function* handleIncrement() {
  yield put({ type: 'INCREMENT_ASYNC' });
}

function* handleDecrement() {
  yield put({ type: 'DECREMENT_ASYNC' });
}

// 監聽 action 並啟動對應的 saga
function* watchCounter() {
  yield takeEvery('INCREMENT', handleIncrement);
  yield takeEvery('DECREMENT', handleDecrement);
}

export default watchCounter;
