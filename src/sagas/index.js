import { all } from "redux-saga/effects";

const sagas = [ 'Auth', 'Lab01', 'Lab02', 'Lab0301', 'Lab0302', 'Lab04' ];
const Saga = sagas.map((saga) => require(`./${saga}`).default());

export default function* rootSaga() {
  yield all(Saga);
}