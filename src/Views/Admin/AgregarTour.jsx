import styles from "./Admin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addArtist,
  addObra,
  addTour,
  listArtists,
  listLocations,
  listObras,
  listReservas,
  listTours,
  listUsers,
} from "../../Redux/actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";

export const AgregarTour = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const [values, setvalues] = useState({
    name_tour: "",
    duracion: "",
    description: "",
    disponibilidad: true,
  });
  const [timeSlots, setTimeSlots] = useState({
    eight: false,
    nine: false,
    ten: false,
    eleven: false,
    twelve: false,
    thirteen: false,
    fourteen: false,
    fifteen: false,
    sixteen: false,
    seventeen: false,
  });
  const [days, setDays] = useState({
    domingo: false,
    lunes: false,
    martes: false,
    miercoles: false,
    jueves: false,
    viernes: false,
    sabado: false,
  });
  const [errorMsg, setErrorMsg] = useState([]);
  const [file, setFile] = useState("");
  const { locations, tours, artists, obras, reservas } = useSelector(
    (state) => ({
      ...state.tours,
    })
  );
  const navigate = useNavigate();
  const agregar = async (e) => {
    e.preventDefault();

    if (
      !values.name_tour ||
      !values.duracion ||
      !values.description ||
      getHours().length == 0 ||
      getDays().length == 0
    ) {
      setErrorMsg("Llene todos los campos");
      return;
    }
    const data = {
      name_tour: values.name_tour,
      horario: getHours(),
      fecha: getDays(),
      duracion: values.duracion + " hora(s)",
      disponibilidad: true,
      description: values.description,
    };

    dispatch(addTour(data));
    setDays({
      domingo: false,
      lunes: false,
      martes: false,
      miercoles: false,
      jueves: false,
      viernes: false,
      sabado: false,
    });
    setTimeSlots({
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: false,
      fourteen: false,
      fifteen: false,
      sixteen: false,
      seventeen: false,
    });
    setvalues({
      name_tour: "",
      duracion: "",
      description: "",
      disponibilidad: true,
    });
  };

  const getHours = () => {
    let aux = [];
    if (timeSlots.eight) {
      aux.push("8");
    }
    if (timeSlots.nine) {
      aux.push("9");
    }
    if (timeSlots.ten) {
      aux.push("10");
    }
    if (timeSlots.eleven) {
      aux.push("11");
    }
    if (timeSlots.twelve) {
      aux.push("12");
    }
    if (timeSlots.thirteen) {
      aux.push("13");
    }
    if (timeSlots.fourteen) {
      aux.push("14");
    }
    if (timeSlots.fifteen) {
      aux.push("15");
    }
    if (timeSlots.sixteen) {
      aux.push("16");
    }
    if (timeSlots.seventeen) {
      aux.push("17");
    }

    return aux;
  };

  const getDays = () => {
    let aux = [];
    if (days.domingo) {
      aux.push("0");
    }
    if (days.lunes) {
      aux.push("1");
    }
    if (days.martes) {
      aux.push("2");
    }
    if (days.miercoles) {
      aux.push("3");
    }
    if (days.jueves) {
      aux.push("4");
    }
    if (days.viernes) {
      aux.push("5");
    }
    if (days.sabado) {
      aux.push("6");
    }

    return aux;
  };

  return (
    <>
      <div className={!show ? styles.modal : styles.modalActive}>
        <FontAwesomeIcon
          icon={faMultiply}
          className={styles.closeModal}
          onClick={() => {
            setDays({
              domingo: false,
              lunes: false,
              martes: false,
              miercoles: false,
              jueves: false,
              viernes: false,
              sabado: false,
            });
            setTimeSlots({
              eight: false,
              nine: false,
              ten: false,
              eleven: false,
              twelve: false,
              thirteen: false,
              fourteen: false,
              fifteen: false,
              sixteen: false,
              seventeen: false,
            });
            setvalues({
              name_tour: "",
              duracion: "",
              description: "",
              disponibilidad: true,
            });
            setShow();
          }}
        />
        <div className={styles.modalContent}>
          <h1>Nuevo Tour</h1>
          <div className={styles.input}>
            <input
              placeholder="Título"
              value={values.name_tour}
              onChange={(e) => {
                setvalues((prev) => ({ ...prev, name_tour: e.target.value }));
              }}
            />
          </div>
          <div className={styles.input}>
            <h1>Días</h1>
            <div className={styles.timeSlots}>
              <div
                className={days.domingo ? styles.timeActive : styles.time}
                onClick={() => {
                  setDays((prev) => ({ ...prev, domingo: !timeSlots.domingo }));
                }}
              >
                Domingo
              </div>
              <div
                className={days.lunes ? styles.timeActive : styles.time}
                onClick={() => {
                  setDays((prev) => ({ ...prev, lunes: !timeSlots.lunes }));
                }}
              >
                Lunes
              </div>
              <div
                className={days.martes ? styles.timeActive : styles.time}
                onClick={() => {
                  setDays((prev) => ({ ...prev, martes: !timeSlots.martes }));
                }}
              >
                Martes
              </div>
              <div
                className={days.miercoles ? styles.timeActive : styles.time}
                onClick={() => {
                  setDays((prev) => ({
                    ...prev,
                    miercoles: !timeSlots.miercoles,
                  }));
                }}
              >
                Miercoles
              </div>
              <div
                className={days.jueves ? styles.timeActive : styles.time}
                onClick={() => {
                  setDays((prev) => ({ ...prev, jueves: !timeSlots.jueves }));
                }}
              >
                Jueves
              </div>
              <div
                className={days.viernes ? styles.timeActive : styles.time}
                onClick={() => {
                  setDays((prev) => ({ ...prev, viernes: !timeSlots.viernes }));
                }}
              >
                Viernes
              </div>
              <div
                className={days.sabado ? styles.timeActive : styles.time}
                onClick={() => {
                  setDays((prev) => ({ ...prev, sabado: !timeSlots.sabado }));
                }}
              >
                Sabado
              </div>
            </div>
          </div>
          <div className={styles.input}>
            <h1>Horarios</h1>
            <div className={styles.timeSlots}>
              <div
                className={timeSlots.eight ? styles.timeActive : styles.time}
                onClick={() => {
                  setTimeSlots((prev) => ({
                    ...prev,
                    eight: !timeSlots.eight,
                  }));
                }}
              >
                8:00 AM
              </div>
              <div
                className={timeSlots.nine ? styles.timeActive : styles.time}
                onClick={() => {
                  setTimeSlots((prev) => ({ ...prev, nine: !timeSlots.nine }));
                }}
              >
                9:00 AM
              </div>
              <div
                className={timeSlots.ten ? styles.timeActive : styles.time}
                onClick={() => {
                  setTimeSlots((prev) => ({ ...prev, ten: !timeSlots.ten }));
                }}
              >
                10:00 AM
              </div>
              <div
                className={timeSlots.eleven ? styles.timeActive : styles.time}
                onClick={() => {
                  setTimeSlots((prev) => ({
                    ...prev,
                    eleven: !timeSlots.eleven,
                  }));
                }}
              >
                11:00 AM
              </div>
              <div
                className={timeSlots.twelve ? styles.timeActive : styles.time}
                onClick={() => {
                  setTimeSlots((prev) => ({
                    ...prev,
                    twelve: !timeSlots.twelve,
                  }));
                }}
              >
                12:00 PM
              </div>
              <div
                className={timeSlots.thirteen ? styles.timeActive : styles.time}
                onClick={() => {
                  setTimeSlots((prev) => ({
                    ...prev,
                    thirteen: !timeSlots.thirteen,
                  }));
                }}
              >
                1:00 PM
              </div>
              <div
                className={timeSlots.fourteen ? styles.timeActive : styles.time}
                onClick={() => {
                  setTimeSlots((prev) => ({
                    ...prev,
                    fourteen: !timeSlots.fourteen,
                  }));
                }}
              >
                2:00 PM
              </div>
              <div
                className={timeSlots.fifteen ? styles.timeActive : styles.time}
                onClick={() => {
                  setTimeSlots((prev) => ({
                    ...prev,
                    fifteen: !timeSlots.fifteen,
                  }));
                }}
              >
                3:00 PM
              </div>
              <div
                className={timeSlots.sixteen ? styles.timeActive : styles.time}
                onClick={() => {
                  setTimeSlots((prev) => ({
                    ...prev,
                    sixteen: !timeSlots.sixteen,
                  }));
                }}
              >
                4:00 PM
              </div>
              <div
                className={
                  timeSlots.seventeen ? styles.timeActive : styles.time
                }
                onClick={() => {
                  setTimeSlots((prev) => ({
                    ...prev,
                    seventeen: !timeSlots.seventeen,
                  }));
                }}
              >
                5:00 PM
              </div>
            </div>
          </div>
          <div className={styles.input}>
            <input
              placeholder="Duración en horas"
              type="number"
              value={values.duracion}
              onChange={(e) => {
                setvalues((prev) => ({
                  ...prev,
                  duracion: e.target.value.toString(),
                }));
              }}
            />
          </div>

          <div className={styles.input}>
            <textarea
              placeholder="Descripción"
              value={values.description}
              onChange={(e) => {
                setvalues((prev) => ({ ...prev, description: e.target.value }));
              }}
            />
          </div>

          <button
            onClick={(e) => {
              agregar(e);
            }}
          >
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};
