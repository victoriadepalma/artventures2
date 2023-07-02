import styles from "./Admin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addArtist,
  listArtists,
  listLocations,
  listObras,
  listReservas,
  listTours,
  listUsers,
  updateArtist,
  updateLocalidad,
} from "../../Redux/actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";

export const UpdateLocalidad = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const [values, setvalues] = useState({ nombre: ""});
  const [errorMsg, setErrorMsg] = useState([]);

  const navigate = useNavigate();
  const agregar = async (e) => {
    e.preventDefault();
    if (!values.nombre) {
      setErrorMsg("Llene todos los campos");
      return;
    }
    setErrorMsg("");
    dispatch(updateLocalidad({ data: values, location: show.id }));
    setvalues({ nombre: ""});
    setShow();
  };

  useEffect(() => {
    if (show) {
      setvalues({ nombre: show.nombre});
    }
  }, [show]);
  return (
    <>
      <div className={!show ? styles.modal : styles.modalActive}>
        <FontAwesomeIcon
          icon={faMultiply}
          className={styles.closeModal}
          onClick={() => {
            setShow();
          }}
        />
        <div className={styles.modalContent}>
          <h1>Actualizar Localidad</h1>
          <div className={styles.input}>
            <input
              placeholder="Nombre"
              value={values.nombre}
              onChange={(e) => {
                setvalues((prev) => ({ ...prev, nombre: e.target.value }));
              }}
            />
          </div>
          <button
            onClick={(e) => {
              agregar(e);
            }}
          >
            Actualizar
          </button>
        </div>
      </div>
    </>
  );
};
