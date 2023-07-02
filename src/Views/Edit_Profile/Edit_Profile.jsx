import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { InputControl } from '../../components/InputControl/InputControl';
import { UserAuth } from '../../context/AuthContext';
import { editProfile, editProfilePic, getReservas, listTours } from '../../Redux/actions/actions';
import './Edit_Profile.css'
import { Message } from './Feedback/Message';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL 
} from "firebase/storage";
import { store } from '../../firebase';

const reservas= [{
  ID_tour:'2ssHeCkRnkHISHKBV0Ir',
  ID_user:'XRCDH9yiegS84Ohy2xFjNiaGYMs1',
  cantidad_persona:1,
  contribucion:false,
  fecha:'7/5/2023',
  horario:'12',
  feedback:false

},
{
  ID_tour:'2ssHeCkRnkHISHKBV0Ir',
  ID_user:'XRCDH9yiegS84Ohy2xFjNiaGYMs1',
  cantidad_persona:1,
  contribucion:false,
  fecha:'7/5/2023',
  horario:'12',
  feedback:false

},
{
  ID_tour:'2ssHeCkRnkHISHKBV0Ir',
  ID_user:'XRCDH9yiegS84Ohy2xFjNiaGYMs1',
  cantidad_persona:1,
  contribucion:false,
  fecha:'7/5/2023',
  horario:'12',
  feedback:false

},
{
  ID_tour:'2ssHeCkRnkHISHKBV0Ir',
  ID_user:'XRCDH9yiegS84Ohy2xFjNiaGYMs1',
  cantidad_persona:1,
  contribucion:false,
  fecha:'7/5/2023',
  horario:'12',
  feedback:false

},
{
  ID_tour:'2ssHeCkRnkHISHKBV0Ir',
  ID_user:'XRCDH9yiegS84Ohy2xFjNiaGYMs1',
  cantidad_persona:1,
  contribucion:false,
  fecha:'7/5/2023',
  horario:'12',
  feedback:true

},
{
  ID_tour:'2ssHeCkRnkHISHKBV0Ir',
  ID_user:'XRCDH9yiegS84Ohy2xFjNiaGYMs1',
  cantidad_persona:1,
  contribucion:true,
  fecha:'7/5/2023',
  horario:'12',
  feedback:false

},]

export const Edit_Profile = () => {
  const dispatch=useDispatch()
  const { loading, user } = UserAuth()
  const [active, setActive]=useState(false)
  const [values, setvalues] = useState({ name: user.name,lastName: user.lastName, email: user.email,telefono:user.telefono });
  const [errorMsg, setErrorMsg] = useState([]);
  const [showFeedback, setShowFeedback]=useState(false)
  const [selectedReserva,setSelectedReserva]=useState(null)
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
console.log('useeer',user)
  const { tours,misReservas} = useSelector((state) => ({
    ...state.tours,
  }));

  const getHour = (hour) => {
    if (hour < 12) {
      return `${hour}:00 AM`;
    } else if (hour == 12) {
      return `${12}:00 PM`;
    } else {
      return `${hour - 12}:00 PM`;
    }
  };

  const getTourName=(id)=>{
let aux=tours.filter((tour)=>tour.id==id)
return aux[0].name_tour
  }

  useEffect(() => {

    if(tours.length ==0 || misReservas.length==0){
     dispatch(getReservas(user.uid))
     dispatch(listTours())
    }
  

  }, []);
  const handleChange=(event)=> {
    console.log(event.target.files[0])
    setFile(event.target.files[0]);
}

const handleUpload=()=> {
  if (!file) {
      alert("Please choose a file first!")
  }else{
    dispatch(editProfilePic({file:file,user:user.uid}))
  }

}

const edit = ()=>{
  dispatch(editProfile({user:user.uid,data:values}))
}

  return (
    <div className='perfil'>
      {selectedReserva != null &&
      <Message show={showFeedback} setShow={()=>{setShowFeedback(!showFeedback);setSelectedReserva(null)}} reserva={selectedReserva}/>}
      <div className='tabs'>
        <div className={active ?'tab active':'tab'} onClick={()=>{setActive(true)}}>Mis Reservas</div>
        <div className={!active ?'tab active':'tab'} onClick={()=>{setActive(false)}}>Perfil</div>
      </div>
  {active ?
      <table className="dashboard-table">
<thead>
  <tr>
     <th>Tour</th>
     <th>Fecha</th>
     <th>Hora</th>
     <th>Cant. Personas</th>
     <th>Contribución</th>
     <th>Feedback</th>

  </tr>
</thead>
<tbody>
  {misReservas.map((reserva)=>{
    return  <tr>
    <td>{getTourName(reserva.ID_tour)}</td>
       <td>{reserva.fecha}</td>
       <td>{getHour(reserva.horario)}</td>
       <td>{reserva.cantidad_persona}</td>
       <td>Contribución</td>
       {!reserva.feedback ?
       <td onClick={()=>{setSelectedReserva(reserva);setShowFeedback(true)}} className="feedback-button">Hacer</td>
       :<td >Realizado</td>}
    </tr>
  })}
 
</tbody>
  </table>:   <div className={"innerBox"}>
    <div className='pic-container'>
      {file ?
      <img src={URL.createObjectURL(file)}/>
    :<>{user.avatar ?
    <img src={user.avatar}/>:<img/>}</>}
    <input type="file" onChange={handleChange} accept="image/png, image/gif, image/jpeg" />
            <button onClick={handleUpload}>Upload to Firebase</button>
    </div>
        <InputControl
          label=""
          placeholder="NOMBRE"
          value={values.name}
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, name: event.target.value }))
          }
          />
              <InputControl
          label=""
          placeholder="APELLIDO"
          value={values.lastName}
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, lastName: event.target.value }))
          }
          />
   
        <InputControl
          label=""
          value={values.telefono}
          placeholder="TELEFONO"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, telefono: event.target.value }))
          }
        />
             <InputControl
             disabled
          label=""
          value={values.email}
          placeholder="EMAIL"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, email: event.target.value }))
          }
          />
          <button onClick={()=>{edit()}}>Guardar Cambios</button>
       
      </div>}
    </div>
  )
}
