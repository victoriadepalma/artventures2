import { all, call, put, takeEvery, select } from "redux-saga/effects";
import { LIST_ARTISTS, LIST_LOCATIONS, LIST_OBRAS, LIST_TOURS } from "../constants";
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
import { listArtistsSuccess, listLocationsSuccess, listObrasSuccess, listToursSuccess } from "../actions/actions";

const listLocationsRequest = async () => {

  const q = query(
    collection(db, "location")
  );
  

  const querySnapshot = await getDocs(q);
let locations=[]
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
   
   locations.push(doc.data())
  });
 
  return locations

};

const listArtistsRequest = async () => {

  const q = query(
    collection(db, "artista")
  );
  

  const querySnapshot = await getDocs(q);
let artists=[]
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
   
    artists.push(doc.data())
  });
 
  return artists

};

const listObrasRequest = async () => {

  const q = query(
    collection(db, "location")
  );
  

  const querySnapshot = await getDocs(q);
let obras=[]
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
   
    obras.push(doc.data())
  });
 
  return obras

};

const listToursRequest = async () => {

  const q = query(
    collection(db, "location")
  );
  

  const querySnapshot = await getDocs(q);
let tours=[]
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
   
    tours.push(doc.data())
  });
 
  return tours

};

function* listTours(payload) {
  try {
    const res = yield call(listToursRequest, payload);
    yield put(listToursSuccess(res))
  } catch (error) {
    
  }
}

function* listLocations(payload) {
  try {
    const res = yield call(listLocationsRequest, payload);
    yield put(listLocationsSuccess(res))
  } catch (error) {
    
  }
}

function* listObras(payload) {
  try {
    const res = yield call(listObrasRequest, payload);
    yield put(listObrasSuccess(res))
  } catch (error) {
    
  }
}
function* listArtists(payload) {
  try {
    const res = yield call(listArtistsRequest, payload);
    yield put(listArtistsSuccess(res))
  } catch (error) {
    
  }
}








export default function* rootSaga() {
  yield all([
    takeEvery(LIST_LOCATIONS, listLocations),
    takeEvery(LIST_TOURS, listTours),
    takeEvery(LIST_OBRAS, listObras),
    takeEvery(LIST_ARTISTS, listArtists),
  ]);
}
