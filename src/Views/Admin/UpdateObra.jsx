import styles from "./Admin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addArtist,
  addObra,
  listArtists,
  listLocations,
  listObras,
  listReservas,
  listTours,
  listUsers,
  updateObra,
} from "../../Redux/actions/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMultiply } from '@fortawesome/free-solid-svg-icons'


export const UpdateObra= ({show,setShow}) => {
  const dispatch = useDispatch();
  const [values, setvalues] = useState({ tittle: "",type:"",year:"",tecnica:"",img:"",dimensiones:"",description:"",ID_ubicacion:"",ID_tour:"",ID_artista:""});
  const [errorMsg, setErrorMsg] = useState([]);
  const [file, setFile] = useState("");
  const { locations, tours, artists, obras,reservas } = useSelector((state) => ({
    ...state.tours,
  }));
  const navigate = useNavigate();
  const agregar = async(e) => {
    e.preventDefault();
       if ( !values.tittle || !values.type || !values.year || !values.tecnica || !values.dimensiones || !values.description || !values.ID_ubicacion || !values.ID_tour || !values.ID_artista) {
      setErrorMsg("Llene todos los campos");
      return;
    }
    setErrorMsg("");
dispatch(updateObra({data:values,file:file,obra:show.id}))
setvalues({ tittle: "",type:"",year:"",tecnica:"",img:"",dimensiones:"",description:"",ID_ubicacion:"",ID_tour:"",ID_artista:""})
setFile("")
setShow()
  };

  useEffect(() => {
    if (
show
    ) {
      dispatch(listTours());
      dispatch(listArtists());
      dispatch(listLocations());
    }
  }, [show]);
  const handleChange = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please choose a file first!");
    } else {
      dispatch(editProfilePic({ file: file, user: user.uid }));
    }
  };

  useEffect(() => {
    if (show) {
      setvalues({ tittle: show.tittle,type:show.type,year:show.year,tecnica:show.tecnica,img:show.img,dimensiones:show.dimensiones,description:show.description,ID_ubicacion:show.ID_ubicacion,ID_tour:show.ID_tour,ID_artista:show.ID_artista});
    }
  }, [show]);
  return (
    <>
      <div className={!show ? styles.modal : styles.modalActive}>
      <FontAwesomeIcon icon={faMultiply} className={styles.closeModal} onClick={()=>{setvalues({ tittle: "",type:"",year:"",tecnica:"",img:"",dimensiones:"",description:"",ID_ubicacion:"",ID_tour:"",ID_artista:""});
setFile("");setShow()}} />
      <div className={styles.modalContent}>
        <h1>Actualizar Obra</h1>
        <div className={styles.picContainer}>
            {file ? (
              <img src={URL.createObjectURL(file)} />
            ) : (
             <>
             {values.img ?  <img src={values.img} />:null}</>
            )}
            <input
              type="file"
              onChange={handleChange}
              accept="image/png, image/gif, image/jpeg"
            />
          </div>
        <div className={styles.input}>
        <input placeholder="Título"  value={values.tittle} onChange={(e)=>{ setvalues((prev) => ({ ...prev, tittle: e.target.value }))}}/>
        </div>
        <div className={styles.input}>
          <select value={values.type} onChange={(e)=>{ setvalues((prev) => ({ ...prev, type: e.target.value }))}}>
            <option selected>Tipo</option>
            <option value={'Mural'}>Mural</option>
            <option value={'Escultura'}>Escultura</option>
            <option value={'Vitral'}>Vitral</option>
            <option value={'Elemento Plástico'}>Elemento Plástico</option>
            <option value={'Mosaico'}>Mosaico</option>
            <option value={'Pintura'}>Pintura</option>
            <option value={'Fotografía'}>Fotografía</option>
          </select>
        </div>
    <div className={styles.input}>
        <input placeholder="Año" value={values.year} onChange={(e)=>{ setvalues((prev) => ({ ...prev, year: e.target.value }))}}/>
        </div>
        <div className={styles.input}>
        <input placeholder="Técnica" value={values.tecnica} onChange={(e)=>{ setvalues((prev) => ({ ...prev, tecnica: e.target.value }))}}/>
        </div>
        <div className={styles.input}>
        <input placeholder="Dimensiones" value={values.dimensiones} onChange={(e)=>{ setvalues((prev) => ({ ...prev, dimensiones: e.target.value }))}}/>
        </div>
     
        <div className={styles.input}>
        <select value={values.ID_artista} onChange={(e)=>{ setvalues((prev) => ({ ...prev, ID_artista: e.target.value }))}}>
            <option selected>Artista</option>
            {artists.map((artist)=>{
              return  <option value={artist.id}>{artist.name} {artist.last_name}</option>
            })}
           
   
          </select>
          </div>
          <div className={styles.input}>
        <select value={values.ID_ubicacion} onChange={(e)=>{ setvalues((prev) => ({ ...prev, ID_ubicacion: e.target.value }))}}>
            <option selected>Ubicación</option>
            {locations.map((location)=>{
              return  <option value={location.id}>{location.nombre}</option>
            })}
           
   
          </select>
          </div>
          <div className={styles.input}>
        <select value={values.ID_tour} onChange={(e)=>{ setvalues((prev) => ({ ...prev, ID_tour: e.target.value }))}}>
            <option selected>Tour</option>
            {tours.map((tour)=>{
              return  <option value={tour.id}>{tour.name_tour}</option>
            })}
           
   
          </select>
          </div>
          <div className={styles.input}>
        <textarea placeholder="Descripción" value={values.description} onChange={(e)=>{ setvalues((prev) => ({ ...prev, description: e.target.value }))}}/>
        </div>
        <button onClick={(e)=>{agregar(e)}}>Actualizar</button>

      </div>
      </div>
    </>
  );
};
