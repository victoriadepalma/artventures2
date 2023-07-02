import styles from "./Admin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addArtist,
  addLocation,
  listArtists,
  listLocations,
  listObras,
  listReservas,
  listTours,
  listUsers,
} from "../../Redux/actions/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMultiply } from '@fortawesome/free-solid-svg-icons'


export const AgregarLocation = ({show,setShow}) => {
  const dispatch = useDispatch();
  const [values, setvalues] = useState({ nombre: ""});
  const [errorMsg, setErrorMsg] = useState([]);

  const navigate = useNavigate();
  const agregar = async(e) => {
    e.preventDefault();
       if (!values.nombre) {
      setErrorMsg("Llene todos los campos");
      return;
    }
    setErrorMsg("");
dispatch(addLocation(values))
setvalues({ nombre: ""})
setShow()

  };



  return (
    <>
      <div className={!show ? styles.modal : styles.modalActive}>
      <FontAwesomeIcon icon={faMultiply} className={styles.closeModal} onClick={()=>{setShow()}} />
      <div className={styles.modalContent}>
        <h1>Nueva Localidad</h1>
        <div className={styles.input}>
        <input placeholder="Nombre"  value={values.name} onChange={(e)=>{ setvalues((prev) => ({ ...prev, nombre: e.target.value }))}}/>
        </div>
        <button onClick={(e)=>{agregar(e)}}>Agregar</button>

      </div>
      </div>
    </>
  );
};
