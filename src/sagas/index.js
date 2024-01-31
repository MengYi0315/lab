import { all } from "redux-saga/effects";

const sagas = ['Lab01'];
const Saga = sagas.map((saga) => require(`./${saga}`).default());

export default function* rootSaga() {
  yield all(Saga);
}