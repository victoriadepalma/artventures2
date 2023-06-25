import { all, call, put, takeEvery, select } from "redux-saga/effects";
import { LOGIN } from "../constants";

const signInUserRequest = async (payload) => {
console.log('hola saga')

};


function* signInUser(payload) {
  try {
    const res = yield call(signInUserRequest, payload);
  } catch (error) {
    
  }
}








export default function* rootSaga() {
  yield all([
    takeEvery(LOGIN, signInUser),
  ]);
}
