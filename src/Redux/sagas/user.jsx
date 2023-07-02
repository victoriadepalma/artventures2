import { all, call, put, takeEvery, select,takeLatest } from "redux-saga/effects";
import { LIST_USERS, LOGIN } from "../constants";
import { db, auth, googleProvider } from "../../firebase";
import {
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { listUsersSuccess } from "../actions/actions";

const listUsersRequest = async (payload) => {
 let count= localStorage.getItem("count");
  if(count){
    count=Number(count)+1
  }else{
    count=1
  }
  localStorage.setItem("count",count.toString());
  const q = query(
    collection(db, "users")
  );
  

  const querySnapshot = await getDocs(q);
let users=[]
  querySnapshot.forEach((doc) => {

    // doc.data() is never undefined for query doc snapshots
   
    users.push({...doc.data(),id:doc.id})
  });
 
  return users

};


function* listUsers(payload) {
  try {
    const res = yield call(listUsersRequest, payload);
    yield put(listUsersSuccess(res))
  } catch (error) {
    
  }
}








export default function* rootSaga() {
  yield all([
    takeLatest(LIST_USERS, listUsers),
  ]);
}
