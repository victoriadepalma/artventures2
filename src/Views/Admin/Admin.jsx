import styles from "./Admin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listArtists,
  listLocations,
  listObras,
  listReservas,
  listTours,
  listUsers,
} from "../../Redux/actions/actions";
import { AgregarArtista } from "./AgregarArtista";
import { AgregarLocation } from "./AgregarLocation";
import { AgregarObra } from "./AgregarObra";
import { AgregarTour } from "./AgregarTour";
import { UpdateArtista } from "./UpdateArtista";
import { UpdateLocalidad } from "./UpdateLocalidad";
import { UpdateObra } from "./UpdateObra";
import { UpdateTour } from "./UpdateTour";

const fields = [
  ["Nombre", "Apellido", "Telefono", "Email"],
  ["Nombre", "Horario", "Días", "Duración", "Disponibilidad"],
  ["Tour", "Usuario", "Cant. Personas","Fecha", "Horario", "Contribución"],
  ["Nombre", "Apellido"],
  ["Localidad"],
  ["Nombre", "Artista", "Técnica", "Tipo", "Año", "Tour", "Localidad"],
];

const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

export const Admin = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const [addArtist, setAddArtist] = useState(false);
  const [addLocation, setAddLocation] = useState(false);
  const [addObra, setAddObra] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedLocalidad, setSelectedLocalidad] = useState(null);
  const [selectedObra, setSelectedObra] = useState(null);
  const [selectedTour, setSelectedTour] = useState(null);
  const [addTour, setAddTour] = useState(false);
  const navigate = useNavigate();

  const { locations, tours, artists, obras,reservas } = useSelector((state) => ({
    ...state.tours,
  }));
  const { users } = useSelector((state) => ({
    ...state.user,
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

  useEffect(() => {
    if (
      tours.length == 0 ||
      artists.length == 0 ||
      obras.length == 0 ||
      locations.length == 0 || users.length==0
    ) {
      dispatch(listTours());
      dispatch(listArtists());
      dispatch(listObras());
      dispatch(listLocations());
      dispatch(listUsers())
      dispatch(listReservas())
    }
  }, []);

  const getHorario = (horario) => {
    let aux = "| ";
    for (let i = 0; i < horario.length; i++) {
      aux += getHour(horario[i]) + " | ";
    }
    return aux;
  };

  const getDias = (dias) => {
    let aux = " ";
    for (let i = 0; i < dias.length; i++) {
      if (i < dias.length - 1) {
        aux += days[dias[i]] + ", ";
      } else {
        aux += days[dias[i]];
      }
    }
    return aux;
  };

  const getArtista = (id) => {
    let aux = artists.filter((artist) => artist.id == id);
    if (aux.length == 0) {
      return "Sin Artista";
    } else {
      return aux[0].name + " " + aux[0].last_name;
    }
  };

  const getTour = (id) => {
    let aux = tours.filter((tour) => tour.id == id);
    if (aux.length == 0) {
      return "Sin Tour";
    } else {
      return aux[0].name_tour;
    }
  };

  const getLocalidad = (id) => {
    let aux = locations.filter((location) => location.id == id);
    if (aux.length == 0) {
      return "Sin Localidad";
    } else {
      return aux[0].nombre;
    }
  };

  const getUser = (id) => {
    let aux = users.filter((user) => user.id == id);
    if (aux.length == 0) {
      return "Sin Usuario";
    } else {
      return aux[0].lastName ?  aux[0].name + " "+ aux[0].lastName : aux[0].name;
    }
  };
  return (
    <>
    <AgregarArtista setShow={()=>{setAddArtist(!addArtist)}} show={addArtist}/>
    <AgregarLocation setShow={()=>{setAddLocation(!addLocation)}} show={addLocation}/>
    <AgregarObra setShow={()=>{setAddObra(!addObra)}} show={addObra}/>
    <AgregarTour setShow={()=>{setAddTour(!addTour)}} show={addTour}/>
    <UpdateArtista setShow={()=>{setSelectedArtist(null)}} show={selectedArtist}/>
    <UpdateLocalidad setShow={()=>{setSelectedLocalidad(null)}} show={selectedLocalidad}/>
    <UpdateObra setShow={()=>{setSelectedObra(null)}} show={selectedObra}/>
    <UpdateTour setShow={()=>{setSelectedTour(null)}} show={selectedTour}/>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.topbar}>
          <button onClick={()=>{setAddTour(true)}}>Agregar Tour</button>
          <button onClick={()=>{setAddArtist(true)}}>Agregar Artista</button>
          <button onClick={()=>{setAddLocation(true)}}>Agregar Localidad</button>
          <button onClick={()=>{setAddObra(true)}}>Agregar Obra</button>
          <select
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            <option value={0}>Usuarios</option>
            <option value={1}>Tours</option>
            <option value={2}>Reservas</option>
            <option value={3}>Artistas</option>
            <option value={4}>Localidades</option>
            <option value={5}>Obras</option>
          </select>
          </div>
          <table className={styles.dashboardTable}>
            <thead>
              <tr>
                {fields[value].map((field) => {
                  return <th>{field}</th>;
                })}
              </tr>
            </thead>
            <tbody>
            {value == 0 ? (
                <>
                  {users.map((user) => {
                    return (
                      <tr>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.telefono}</td>
                        <td>{user.email}</td>
                      </tr>
                    );
                  })}
                </>
              ) : null}
              {value == 1 ? (
                <>
                  {tours.map((tour) => {
                    return (
                      <tr className={styles.rowHover} onClick={()=>{setSelectedTour(tour)}}>
                        <td>{tour.name_tour}</td>
                        <td>{getHorario(tour.horario)}</td>
                        <td>{getDias(tour.fecha)}</td>
                        <td>{tour.duracion}</td>
                        <td>
                          {tour.disponibilidad==true ? "Disponible" : "No Disponible"}
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : null}
                           {value == 2 ? (
                <>
                  {reservas.map((reserva) => {
                    return (
                      <tr>
                        <td>{getTour(reserva.ID_tour)}</td>
                        <td>{getUser(reserva.ID_user)}</td>
                        <td>{reserva.cantidad_persona}</td>
                        <td>{reserva.fecha}</td>
                        <td>{getHour(reserva.horario)}</td>
                        <td>{reserva.contribucion ? "Si":"No"}</td>
                      </tr>
                    );
                  })}
                </>
              ) : null}
              {value == 3 ? (
                <>
                  {artists.map((artist) => {
                    return (
                      <tr className={styles.rowHover} onClick={()=>{setSelectedArtist(artist)}}>
                        <td>{artist.name}</td>
                        <td>{artist.last_name}</td>
                      </tr>
                    );
                  })}
                </>
              ) : null}
              {value == 4 ? (
                <>
                  {locations.map((location) => {
                    return (
                      <tr className={styles.rowHover} onClick={()=>{setSelectedLocalidad(location)}}>
                        <td>{location.nombre}</td>
                      </tr>
                    );
                  })}
                </>
              ) : null}
              {value == 5 ? (
                <>
                  {obras.map((obra) => {
                    return (
                      <tr className={styles.rowHover} onClick={()=>{setSelectedObra(obra)}}>
                        <td>{obra.tittle}</td>
                        <td>{getArtista(obra.ID_artista)}</td>
                        <td>{obra.tecnica}</td>
                        <td>{obra.type}</td>
                        <td>{obra.year}</td>
                        <td>{getTour(obra.ID_tour)}</td>
                        <td>{getLocalidad(obra.ID_ubicacion)}</td>
                      </tr>
                    );
                  })}
                </>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
