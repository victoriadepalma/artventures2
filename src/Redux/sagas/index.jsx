import { all } from "redux-saga/effects";
import user from "./user";
import tours from './tours'

export default function* rootSaga(getState) {
  yield all([user(),tours()]);
}