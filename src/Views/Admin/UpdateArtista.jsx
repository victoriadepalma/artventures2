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
} from "../../Redux/actions/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMultiply } from '@fortawesome/free-solid-svg-icons'


export const AgregarArtista = ({show,setShow}) => {
  const dispatch = useDispatch();
  const [values, setvalues] = useState({ name: "",last_name:""});
  const [errorMsg, setErrorMsg] = useState([]);

  const navigate = useNavigate();
  const agregar = async(e) => {
    e.preventDefault();
       if (!values.name ||  !values.last_name) {
      setErrorMsg("Llene todos los campos");
      return;
    }
    setErrorMsg("");
dispatch(addArtist(values))
setvalues({ name: "",last_name:""})
setShow()
  };



  return (
    <>
      <div className={!show ? styles.modal : styles.modalActive}>
      <FontAwesomeIcon icon={faMultiply} className={styles.closeModal} onClick={()=>{setShow()}} />
      <div className={styles.modalContent}>
        <h1>Nuevo Artista</h1>
        <div className={styles.input}>
        <input placeholder="Nombre"  value={values.name} onChange={(e)=>{ setvalues((prev) => ({ ...prev, name: e.target.value }))}}/>
        </div>
    <div className={styles.input}>
        <input placeholder="Apellido" value={values.last_name} onChange={(e)=>{ setvalues((prev) => ({ ...prev, last_name: e.target.value }))}}/>
        </div>
        <button onClick={(e)=>{agregar(e)}}>Agregar</button>

      </div>
      </div>
    </>
  );
};
