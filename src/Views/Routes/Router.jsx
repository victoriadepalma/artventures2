import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../Login/Login";

import { Events } from "../Events/Events";
import { Book } from "../Book/Book";
import { Signup } from "../Signup/Signup";
import { Tours } from "../Tours/Tours";
import { Home } from "../Home/Home";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

import { Edit_Profile } from "../Edit_Profile/Edit_Profile";
import { Pinceladas } from "../Book/Pinceladas/Pinceladas";
import { Rutas } from "../Book/Rutas/Rutas";
import { Caminando } from "../Book/Caminando/Caminando";
import { Events_Pinceladas } from "../Events/Events_Pinceladas";
import { Message } from "../../components/Message/Message";
import ProtectedAdminRoute from "../Routes/ProtectedAdminRoute";
import ProtectedRoute from "../Routes/ProtectedRoute";
import AuthRoute from "../Routes/AuthRoute";
import { UserAuth } from "../../context/AuthContext";
import { EventConfirmation } from "../EventConfirmation/Events";
import { PendingFeedback } from "../../components/PendingFeedback/PedingFeedback";
import { getReservas } from "../../Redux/actions/actions";

export const Router = () => {
  const dispatch = useDispatch();
  const [showFeedback, setShowFeedback] = useState(false);
  const { loading, user } = UserAuth();
  const { tours, misReservas } = useSelector((state) => ({
    ...state.tours,
  }));

  useEffect(() => {
    if (!loading && user != null) {
      dispatch(getReservas(user.uid));
    }
  }, [loading, user]);

  useEffect(() => {
    if (misReservas.length > 0) {
      getFeedbacks();
    }
  }, [misReservas]);

  const getFeedbacks = () => {

    const aux = misReservas.filter(
      (reserva) => new Date(reserva.fecha) < new Date() && !reserva.feedback
    );
 
    if (aux.length == 0) {
      setShowFeedback(false);
    } else {
      setShowFeedback(true);
    }
  };
  return (
    <>
      {!loading ? (
        <div className="main-container">
          <Navbar />
          <PendingFeedback
            show={showFeedback}
            setShow={() => {
              setShowFeedback(false);
            }}
          />
          {/* <Message/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route
              path="/events/:id"
              element={
                <ProtectedRoute>
                  <Events />
                </ProtectedRoute>
              }
            />
            <Route
              path="/events/:id/confirmation/:reservaId"
              element={
                <ProtectedRoute>
                  <EventConfirmation />
                </ProtectedRoute>
              }
            />
            <Route path="/events" element={<Events />} />
            <Route path="/book/:id" element={<Book />} />
            <Route
              path="/login"
              element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthRoute>
                  <Signup />
                </AuthRoute>
              }
            />
            <Route
              path="/perfil"
              element={
                <ProtectedRoute>
                  <Edit_Profile />
                </ProtectedRoute>
              }
            />
                  <Route path="/pay" element = {<PayPage/>}/>
          </Routes>
          <Footer />
        </div>
      ) : null}
    </>
  );
};
