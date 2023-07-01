import {
  all,
  call,
  put,
  takeEvery,
  select,
  takeLatest,
} from "redux-saga/effects";
import {
  EDIT_PROFILE,
  EDIT_PROFILE_PIC,
  GET_RATING_TOUR,
  GET_RESERVA,
  GET_RESERVAS,
  GET_TOUR,
  LIST_ARTISTS,
  LIST_LOCATIONS,
  LIST_OBRAS,
  LIST_OBRAS_TOUR,
  LIST_TOURS,
  RESERVE,
  SEND_FEEDBACK,
} from "../constants";
import { db, auth, googleProvider, store } from "../../firebase";
import {
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  getRatingsSuccess,
  getReservas,
  getReservasSuccess,
  getReservaSuccess,
  getTourSuccess,
  listArtistsSuccess,
  listLocationsSuccess,
  listObrasSuccess,
  listObrasTourSuccess,
  listToursSuccess,
  reserveSuccess,
} from "../actions/actions";

const listLocationsRequest = async () => {
  const q = query(collection(db, "location"));

  let count = localStorage.getItem("count");
  if (count) {
    count = Number(count) + 1;
  } else {
    count = 1;
  }
  localStorage.setItem("count", count.toString());

  const querySnapshot = await getDocs(q);
  let locations = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    locations.push({ ...doc.data(), id: doc.id });
  });

  return locations;
};

const getTourRequest = async (uid) => {
  let count = localStorage.getItem("count");
  if (count) {
    count = Number(count) + 1;
  } else {
    count = 1;
  }
  localStorage.setItem("count", count.toString());
  const docuRef = await doc(db, `tour/${uid}`);
  const data = await getDoc(docuRef);
  const dataFiltered = data.data();

  return dataFiltered;
};

const getReservaRequest = async (uid) => {
  let count = localStorage.getItem("count");
  if (count) {
    count = Number(count) + 1;
  } else {
    count = 1;
  }
  localStorage.setItem("count", count.toString());
  const docuRef = await doc(db, `reserva/${uid}`);
  const data = await getDoc(docuRef);
  const dataFiltered = data.data();

  return dataFiltered;
};

const reserveRequest = async (data) => {
  console.log(data);
  const docRef = await addDoc(collection(db, "reserva"), data.data);
  console.log("Document written with ID: ", docRef.id);
  return docRef.id;
};

const addFeedbackRequest = async (data) => {
  const data1 = {
    ID_tour: data.data.ID_tour,
    ID_user: data.data.ID_user,
    feedback: data.data.feedback,
    rating: data.data.rating,
  };

  const docRef = await addDoc(collection(db, "rating"), data1).then(
    async (docc) => {
      const docuRef = await doc(db, `reserva/${data.data.reserva}`);
      updateDoc(docuRef, { feedback: true });
      return docuRef;
    }
  );
  console.log("kmjnhbgvfvhbjnkml", docRef.id);
  return docRef.id;
};

const editProfilePicRequest = async (data) => {
  console.log("kmkm", data.data);

  const storageRef = ref(store, `/profilePics/${data.data.file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, data.data.file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const percent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );

      // // update progress
      // setPercent(percent);
    },
    (err) => console.log(err),
    async () => {
      // download url
      getDownloadURL(uploadTask.snapshot.ref).then(async(url) => {
        console.log(url);
        const docuRef = await doc(db, `users/${data.data.user}`);
        updateDoc(docuRef, { avatar: url });
        return docuRef;
      });

   
    }
  );
};

const editProfileRequest = async (data) => {
  console.log("kmkm", data.data);
  const docuRef = await doc(db, `users/${data.data.user}`);
        updateDoc(docuRef, data.data.data);
        return docuRef;

};

const listArtistsRequest = async () => {
  let count = localStorage.getItem("count");
  if (count) {
    count = Number(count) + 1;
  } else {
    count = 1;
  }
  localStorage.setItem("count", count.toString());
  const q = query(collection(db, "artista"));

  const querySnapshot = await getDocs(q);
  let artists = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    artists.push({ ...doc.data(), id: doc.id });
  });

  return artists;
};

const listObrasRequest = async () => {
  let count = localStorage.getItem("count");
  if (count) {
    count = Number(count) + 1;
  } else {
    count = 1;
  }
  localStorage.setItem("count", count.toString());
  const q = query(collection(db, "obras"));

  const querySnapshot = await getDocs(q);
  let obras = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    obras.push({ ...doc.data(), id: doc.id });
  });
  return obras;
};

const listObrasTourRequest = async (payload) => {
  let count = localStorage.getItem("count");
  if (count) {
    count = Number(count) + 1;
  } else {
    count = 1;
  }
  localStorage.setItem("count", count.toString());
  const q = query(collection(db, "obras"), where("ID_tour", "==", payload));

  const querySnapshot = await getDocs(q);
  let obras = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    obras.push({ ...doc.data(), id: doc.id });
  });

  return obras;
};

const getReservasRequest = async (payload) => {
  let count = localStorage.getItem("count");
  if (count) {
    count = Number(count) + 1;
  } else {
    count = 1;
  }

  localStorage.setItem("count", count.toString());
  const q = query(
    collection(db, "reserva"),
    where("ID_user", "==", payload.data)
  );

  const querySnapshot = await getDocs(q);
  let obras = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    obras.push({ ...doc.data(), id: doc.id });
  });

  return obras;
};

const getRatingsRequest = async (payload) => {
  let count = localStorage.getItem("count");
  if (count) {
    count = Number(count) + 1;
  } else {
    count = 1;
  }
  localStorage.setItem("count", count.toString());
  const q = query(collection(db, "rating"), where("ID_tour", "==", payload));

  const querySnapshot = await getDocs(q);
  let ratings = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    ratings.push({ ...doc.data(), id: doc.id });
  });

  return ratings;
};

const listToursRequest = async () => {
  let count = localStorage.getItem("count");
  console.log(count);
  if (count) {
    count = Number(count) + 1;
  } else {
    count = 1;
  }
  localStorage.setItem("count", count.toString());
  const q = query(collection(db, "tour"));

  const querySnapshot = await getDocs(q);
  let tours = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    tours.push({ ...doc.data(), id: doc.id });
  });

  return tours;
};

function* listTours(payload) {
  try {
    const res = yield call(listToursRequest, payload);
    yield put(listToursSuccess(res));
  } catch (error) {}
}

function* getTour(payload) {
  try {
    const res = yield call(getTourRequest, payload.data);
    yield put(getTourSuccess(res));
  } catch (error) {}
}
function* getReserva(payload) {
  try {
    const res = yield call(getReservaRequest, payload.data);
    yield put(getReservaSuccess(res));
  } catch (error) {}
}

function* listLocations(payload) {
  try {
    const res = yield call(listLocationsRequest, payload);
    yield put(listLocationsSuccess(res));
  } catch (error) {}
}

function* getReservas1(payload) {
  try {
    const res = yield call(getReservasRequest, payload);
    yield put(getReservasSuccess(res));
  } catch (error) {}
}

function* listObras(payload) {
  try {
    const res = yield call(listObrasRequest, payload);
    yield put(listObrasSuccess(res));
  } catch (error) {}
}

function* listObrasTour(payload) {
  try {
    const res = yield call(listObrasTourRequest, payload.data);
    yield put(listObrasTourSuccess(res));
  } catch (error) {}
}

function* getRatings(payload) {
  try {
    const res = yield call(getRatingsRequest, payload.data);
    yield put(getRatingsSuccess(res));
  } catch (error) {}
}
function* listArtists(payload) {
  try {
    const res = yield call(listArtistsRequest, payload);
    yield put(listArtistsSuccess(res));
  } catch (error) {}
}

function* reserve(payload) {
  try {
    const res = yield call(reserveRequest, payload);
    yield put(reserveSuccess(res));
  } catch (error) {}
}

function* addFeedback(payload) {
  try {
    const res = yield call(addFeedbackRequest, payload);
    if (res) {
      yield put(getReservas(payload.data.ID_user));
    }
  } catch (error) {}
}

function* editProfilePic(payload) {
  try {
    const res = yield call(editProfilePicRequest, payload);
  } catch (error) {}
}

function* editProfile(payload) {
  try {
    const res = yield call(editProfileRequest, payload);
  } catch (error) {}
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
    takeLatest(RESERVE, reserve),
    takeLatest(GET_RESERVA, getReserva),
    takeLatest(GET_RESERVAS, getReservas1),
    takeLatest(SEND_FEEDBACK, addFeedback),
    takeLatest(EDIT_PROFILE_PIC, editProfilePic),
    takeLatest(EDIT_PROFILE, editProfile),
  ]);
}
