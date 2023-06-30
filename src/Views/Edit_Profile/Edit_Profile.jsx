import React, { useState } from 'react'
import './Edit_Profile.css'

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
  const [active, setActive]=useState(false)


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

  }

  return (
    <div className='perfil'>
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
  {reservas.map((reserva)=>{
    return  <tr>
    <td>Tour</td>
       <td>{reserva.fecha}</td>
       <td>{getHour(reserva.horario)}</td>
       <td>{reserva.cantidad_persona}</td>
       <td>Contribución</td>
       {reserva.feedback ?
       <td onClick={()=>{console.log("feedback")}} className="feedback-button">Hacer</td>
       :<td >Realizado</td>}
    </tr>
  })}
 
</tbody>
  </table>:
  null}
    </div>
  )
}
