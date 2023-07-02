import {
  all,
  call,
  put,
  takeEvery,
  select,
  takeLatest,
} from "redux-saga/effects";
import {
  ADD_ARTIST,
  ADD_LOCATION,
  ADD_OBRA,
  ADD_TOUR,
  EDIT_PROFILE,
  EDIT_PROFILE_PIC,
  GET_CONTRIBUCION,
  GET_RATING_TOUR,
  GET_RESERVA,
  GET_RESERVAS,
  GET_TOUR,
  LIST_ARTISTS,
  LIST_CONTRIBUCIONES,
  LIST_LOCATIONS,
  LIST_OBRAS,
  LIST_OBRAS_TOUR,
  LIST_RATINGS,
  LIST_RESERVAS,
  LIST_TOURS,
  PAY,
  RESERVE,
  SEND_FEEDBACK,
  UPDATE_ARTIST,
  UPDATE_LOCATION,
  UPDATE_OBRA,
  UPDATE_TOUR,
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
  getContribucionSuccess,
  getRatingsSuccess,
  getReservas,
  getReservasSuccess,
  getReservaSuccess,
  getTourSuccess,
  listArtistsSuccess,
  listContribucionesSuccess,
  listLocationsSuccess,
  listObrasSuccess,
  listObrasTourSuccess,
  listRatingsSuccess,
  listReservasSuccess,
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

const payRequest = async (data) => {
  console.log('hola1',data);
  const docRef = await addDoc(collection(db, "contribucion"), data.data).then(async(res)=>{
    const docuRef1 = await doc(db, `reserva/${data.data.ID_reserva}`);
    updateDoc(docuRef1, {contribucion: res.id});
  });
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

const updateArtistRequest = async (data) => {

  const docuRef = await doc(db, `artista/${data.data.artista}`);
  updateDoc(docuRef, data.data.data);
  return docuRef;
};

const updateTourRequest = async (data) => {

  const docuRef = await doc(db, `tour/${data.data.tour}`);
  updateDoc(docuRef, data.data.data);
  return docuRef;
};

const updateLocalidadRequest = async (data) => {
console.log(data)
  const docuRef = await doc(db, `location/${data.data.location}`);
  updateDoc(docuRef, data.data.data);
  return docuRef;
};

const updateObraRequest = async (data) => {
  console.log(data)
  if(data.data.file){
      const storageRef = ref(store, `/tour/${data.data.data.ID_tour}`);
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
            let data1=data.data.data
            data1.img=url
            const docuRef1 = await doc(db, `obras/${data.data.obra}`);
            updateDoc(docuRef1, data1);
            return docuRef1;
          });
    
       
        }
      );
  }else{
    const docuRef = await doc(db, `obras/${data.data.obra}`);
    updateDoc(docuRef, data.data.data);
    return docuRef;
  }

  };

const addArtistRequest = async (data) => {
  const docRef = await addDoc(collection(db, "artista"), data.data)
  console.log("kmjnhbgvfvhbjnkml", docRef.id);
  return docRef.id;
};

const addLocationRequest = async (data) => {
  const docRef = await addDoc(collection(db, "location"), data.data)
  console.log("kmjnhbgvfvhbjnkml", docRef.id);
  return docRef.id;
};

const addTourRequest = async (data) => {
  const docRef = await addDoc(collection(db, "tour"), data.data)
  console.log("kmjnhbgvfvhbjnkml", docRef.id);
  return docRef.id;
};

const addObraRequest = async (data) => {
  const docRef = await addDoc(collection(db, "obras"), data.data.data).then((doc1)=>{
    console.log('kjjjjj',doc1.id)
    const storageRef = ref(store, `/tour/${data.data.data.ID_tour}`);
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
          console.log(url,doc1.id);
          const docuRef1 = await doc(db, `obras/${doc1.id}`);
          updateDoc(docuRef1, { img: url });
          return docuRef1;
        });
  
     
      }
    );
    
  })
  console.log("kmjnhbgvfvhbjnkml", docRef.id);
  return docRef.id;
};

const editProfilePicRequest = async (data) => {

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

const listRatingsRequest = async () => {
  let count = localStorage.getItem("count");
  if (count) {
    count = Number(count) + 1;
  } else {
    count = 1;
  }
  localStorage.setItem("count", count.toString());
  const q = query(collection(db, "rating"));

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

const listReservasRequest = async (payload) => {
  let count = localStorage.getItem("count");
  if (count) {
    count = Number(count) + 1;
  } else {
    count = 1;
  }

  localStorage.setItem("count", count.toString());
  const q = query(
    collection(db, "reserva")
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

const getContribucionRequest = async (payload) => {
  console.log("kjhbjnkml,kjbh",payload)
  let count = localStorage.getItem("count");
  console.log(count);
  if (count) {
    count = Number(count) + 1;
  } else {
    count = 1;
  }
  localStorage.setItem("count", count.toString());
  const q = query(collection(db, "contribucion"), where("ID_reserva", "==", payload.data));

  const querySnapshot = await getDocs(q);
  let tours = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    tours.push({ ...doc.data(), id: doc.id });
  });
console.log('jhbgvfcvhbjknl',tours)

  return tours;
};

const listContribucionesRequest = async () => {
  let count = localStorage.getItem("count");
  console.log(count);
  if (count) {
    count = Number(count) + 1;
  } else {
    count = 1;
  }
  localStorage.setItem("count", count.toString());
  const q = query(collection(db, "contribucion"));

  const querySnapshot = await getDocs(q);
  let tours = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    tours.push({ ...doc.data(), id: doc.id });
  });
console.log('jhbgvfcdddvhbjknl',tours)
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

function* listReservas(payload) {
  try {
    const res = yield call(listReservasRequest, payload);
    yield put(listReservasSuccess(res));
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

function* listRatings(payload) {
  try {
    const res = yield call(listRatingsRequest, payload);
    yield put(listRatingsSuccess(res));
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

function* addArtist(payload) {
  try {
    const res = yield call(addArtistRequest, payload);
  } catch (error) {}
}

function* addLocation(payload) {
  try {
    const res = yield call(addLocationRequest, payload);
  } catch (error) {}
}

function* addObra(payload) {
  try {
    const res = yield call(addObraRequest, payload);
  } catch (error) {}
}

function* addTour(payload) {
  try {
    const res = yield call(addTourRequest, payload);
  } catch (error) {}
}

function* updateArtist(payload) {
  try {
    const res = yield call(updateArtistRequest, payload);
  } catch (error) {}
}

function* updateLocalidad(payload) {
  try {
    const res = yield call(updateLocalidadRequest, payload);
  } catch (error) {}
}

function* updateObra(payload) {
  try {
    const res = yield call(updateObraRequest, payload);
  } catch (error) {}
}

function* updateTour(payload) {
  try {
    const res = yield call(updateTourRequest, payload);
  } catch (error) {}
}

function* pay(payload) {
  try {
    const res = yield call(payRequest, payload);
  } catch (error) {}
}

function* getContribucion(payload) {
  try {
    const res = yield call(getContribucionRequest, payload);
    yield put(getContribucionSuccess(res));
  } catch (error) {}
}

function* listContribuciones(payload) {
  try {
    const res = yield call(listContribucionesRequest, payload);
    yield put(listContribucionesSuccess(res));
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
    takeLatest(LIST_RESERVAS, listReservas),
    takeLatest(ADD_ARTIST, addArtist),
    takeLatest(ADD_LOCATION, addLocation),
    takeLatest(ADD_OBRA, addObra),
    takeLatest(ADD_TOUR, addTour),
    takeLatest(UPDATE_ARTIST, updateArtist),
    takeLatest(UPDATE_LOCATION, updateLocalidad),
    takeLatest(UPDATE_OBRA, updateObra),
    takeLatest(UPDATE_TOUR, updateTour),
    takeLatest(LIST_RATINGS, listRatings),
    takeLatest(PAY, pay),
    takeLatest(GET_CONTRIBUCION, getContribucion),
    takeLatest(LIST_CONTRIBUCIONES, listContribuciones),
  ]);
}
