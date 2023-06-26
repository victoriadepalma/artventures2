import { all, call, put, takeEvery, select,takeLatest } from "redux-saga/effects";
import { GET_RATING_TOUR, GET_TOUR, LIST_ARTISTS, LIST_LOCATIONS, LIST_OBRAS, LIST_OBRAS_TOUR, LIST_TOURS } from "../constants";
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
import { getRatingsSuccess, getTourSuccess, listArtistsSuccess, listLocationsSuccess, listObrasSuccess, listObrasTourSuccess, listToursSuccess } from "../actions/actions";

const listLocationsRequest = async () => {

  const q = query(
    collection(db, "location")
  );
  
 let count= localStorage.getItem("count");
  if(count){
    count=Number(count)+1
  }else{
    count=1
  }
  localStorage.setItem("count",count.toString());

  const querySnapshot = await getDocs(q);
let locations=[]
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
   
    locations.push({...doc.data(),id:doc.id})
  });
 
  return locations

};

const getTourRequest = async (uid) => {
 let count= localStorage.getItem("count");
  if(count){
    count=Number(count)+1
  }else{
    count=1
  }
  localStorage.setItem("count",count.toString());
  const docuRef = await doc(db, `tour/${uid}`);
  const data = await getDoc(docuRef);
  const dataFiltered = data.data();

  return dataFiltered

};

const listArtistsRequest = async () => {
 let count= localStorage.getItem("count");
  if(count){
    count=Number(count)+1
  }else{
    count=1
  }
  localStorage.setItem("count",count.toString());
  const q = query(
    collection(db, "artista")
  );
  

  const querySnapshot = await getDocs(q);
let artists=[]
  querySnapshot.forEach((doc) => {

    // doc.data() is never undefined for query doc snapshots
   
    artists.push({...doc.data(),id:doc.id})
  });
 
  return artists

};

const listObrasRequest = async () => {
 let count= localStorage.getItem("count");
  if(count){
    count=Number(count)+1
  }else{
    count=1
  }
  localStorage.setItem("count",count.toString());
  const q = query(
    collection(db, "obras")
  );
  

  const querySnapshot = await getDocs(q);
let obras=[]
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
   
    obras.push({...doc.data(),id:doc.id})
  });
  return obras

};

const listObrasTourRequest = async (payload) => {
 let count= localStorage.getItem("count");
  if(count){
    count=Number(count)+1
  }else{
    count=1
  }
  localStorage.setItem("count",count.toString());
  const q = query(
    collection(db, "obras"),
    where("ID_tour", "==", payload)
  );
  

  const querySnapshot = await getDocs(q);
let obras=[]
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
   
    obras.push({...doc.data(),id:doc.id})
  });


  return obras

};

const getRatingsRequest = async (payload) => {
 let count= localStorage.getItem("count");
  if(count){
    count=Number(count)+1
  }else{
    count=1
  }
  localStorage.setItem("count",count.toString());
  const q = query(
    collection(db, "rating"),
    where("ID_tour", "==", payload)
  );
  

  const querySnapshot = await getDocs(q);
let ratings=[]
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
   
    ratings.push({...doc.data(),id:doc.id})
  });


  return ratings

};

const listToursRequest = async () => {
 let count= localStorage.getItem("count");
  console.log(count)
  if(count){
    count=Number(count)+1
  }else{
    count=1
  }
  localStorage.setItem("count",count.toString());
  const q = query(
    collection(db, "tour")
  );
  

  const querySnapshot = await getDocs(q);
let tours=[]
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    
    tours.push({...doc.data(),id:doc.id})
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

function* getTour(payload) {
  try {
    const res = yield call(getTourRequest, payload.data);
    yield put(getTourSuccess(res))
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

function* listObrasTour(payload) {
  try {
    const res = yield call(listObrasTourRequest, payload.data);
    yield put(listObrasTourSuccess(res))
  } catch (error) {
    
  }
}

function* getRatings(payload) {
  try {
    const res = yield call(getRatingsRequest, payload.data);
    yield put(getRatingsSuccess(res))
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
    takeLatest(LIST_LOCATIONS, listLocations),
    takeLatest(LIST_TOURS, listTours),
    takeLatest(LIST_OBRAS, listObras),
    takeLatest(LIST_OBRAS_TOUR, listObrasTour),
    takeLatest(LIST_ARTISTS, listArtists),
    takeLatest(GET_TOUR, getTour),
    takeLatest(GET_RATING_TOUR, getRatings),
  ]);
}
