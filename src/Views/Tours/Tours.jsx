import React, { useEffect, useState } from "react";
import { Carousel } from "../../components/Carousel/Carousel";
import { Tour } from "./Tour";
import { useNavigate, useParams } from "react-router-dom";
import "./Tours.css";
import { useDispatch, useSelector } from "react-redux";
import {
  listArtists,
  listLocations,
  listTours,
  listObras,
} from "../../Redux/actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faMultiply } from "@fortawesome/free-solid-svg-icons";

export const Tours = () => {
  const [filters, setFilters] = useState([]);
  const [filterOptions, setFilterOptions] = useState([
    { name: "Nombre", used: false, value: "" },
    { name: "Artista", used: false, value: "" },
    { name: "Ubicación", used: false, value: "" },
    { name: "Obra", used: false, value: "" },
  ]);
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState("Filtro");
  const [search, setSearch] = useState("");
  const { tours, obras, artists, locations } = useSelector((state) => ({
    ...state.tours,
  }));
  const [filteredTours, setFilteredTours] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
 
    if (
      tours.length == 0 ||
      obras.length ==0 ||
      artists.length == 0 ||
      locations.length == 0
    ) {
      dispatch(listTours());
      dispatch(listObras());
      dispatch(listArtists());
      dispatch(listLocations());
    }
  }, []);

  useEffect(() => {
    setFilteredTours(tours);
  }, [tours]);

  const filtrar = () => {
    let aux = tours;
    let obrasAux = obras;
    let artistasAux = artists;
    let locationsAux=locations;
    let filtered = [];

    if (filters.includes("Nombre")) {
      filtered = aux.filter((tour) =>
        tour.name_tour
          .toLowerCase()
          .includes(filterOptions[0].value.toLowerCase())
      );
    }

    if (filters.includes("Artista")) {
      artistasAux = artistasAux.filter((artista) =>
        (artista.name + " " + artista.last_name)
          .toLowerCase()
          .includes(filterOptions[1].value.toLowerCase())
      );
   
      artistasAux = artistasAux.map((artista) => {
        return artista.id;
      });
      obrasAux = obrasAux.filter((obra) =>
        artistasAux.includes(obra.ID_artista)
      );
 
      obrasAux = obrasAux.map((obra) => {
        return obra.ID_tour;
      });
  
      filtered = aux.filter((tour) => obrasAux.includes(tour.id));
   
    }


    if (filters.includes("Ubicación")) {
      locationsAux = locationsAux.filter((l) =>
      l.nombre?.toLowerCase()
          .includes(filterOptions[2].value.toLowerCase())
      );
   
      locationsAux = locationsAux.map((location) => {
        return location.id;
      });
      obrasAux = obrasAux.filter((obra) =>
      locationsAux.includes(obra.ID_ubicacion)
      );

      obrasAux = obrasAux.map((obra) => {
        return obra.ID_tour;
      });
      filtered = aux.filter((tour) => obrasAux.includes(tour.id));

    }
    if (filters.includes("Obra")) {
      if (artistasAux.length != artists.length || locationsAux.length != locations.length) {
        if(artistasAux.length != artists.length && locationsAux.length == locations.length){
          obrasAux = obras.filter((obra) =>
          artistasAux.includes(obra.ID_artista)
        );
        }
        if(artistasAux.length == artists.length && locationsAux.length != locations.length ){
          obrasAux = obras.filter((obra) =>
          locationsAux.includes(obra.ID_ubicacion)
        );
        }
        if(artistasAux.length != artists.length && locationsAux.length != locations.length ){
          obrasAux = obras.filter((obra) =>
          artistasAux.includes(obra.ID_artista) && locationsAux.includes(obra.ID_ubicacion)
        );
        }
     
      } else {
        obrasAux = obras;
      }

      obrasAux = obrasAux.filter((obra) =>
        obra.tittle.toLowerCase().includes(filterOptions[3].value.toLowerCase())
      );

      obrasAux = obrasAux.map((obra) => {
        return obra.ID_tour;
      });
 

      filtered = aux.filter((tour) => obrasAux.includes(tour.id));
    }

    if(filters.length==0){
      setFilteredTours(tours)
    }else{
      setFilteredTours(filtered);
    }


  };

  const agregarFiltro = () => {
    let auxFilterOptions = filterOptions;
    setFilterOptions(
      auxFilterOptions.map((element) => {
        if (element.name == filter) {
          let aux = element;
          aux.used = true;
          aux.value = search;
          element = aux;
          return element;
        } else {
          return element;
        }
      })
    );
    

    let aux = filters;
    aux.push(filter);
    console.log(aux);
    setShow(false)
    filtrar(aux);
    setFilter('Filtro')
    setSearch('')
  };

  const removeFilter = (index) => {
    let aux = filters;
    let removed = [];
    if (index > -1) {
      removed = aux.splice(index, 1);
    }

    let auxFilterOptions = filterOptions;
    console.log('filteeers',)
    setFilterOptions(
      auxFilterOptions.map((element,i) => {
        if (i == index) {
          let aux = element;
          aux.used = false;
          aux.value = '';
          element = aux;
          return element;
        } else {
          return element;
        }
      })
    );
auxFilterOptions=auxFilterOptions.map((element,i) => {
  if (i == index) {
    let aux = element;
    aux.used = false;
    aux.value = '';
    element = aux;
    return element;
  } else {
    return element;
  }
})
console.log('mmm',removed)
    setFilters(aux);
    filtrar(auxFilterOptions);
  };

  return (
    <>
      <div className="filters">
        <button
          className={"add-filter"}
          onClick={() => {
            setShow(!show);
          }}
        >
          <FontAwesomeIcon icon={faAdd} className="add-filter-icon" />
          Filtros
        </button>
        {filterOptions.map((filter, index) => {
          if(filter.used){
          return (
            <button
              className="add-filter filter-item"
              onClick={() => {
                removeFilter(index);
              }}
            >
              {filter.value}
              <FontAwesomeIcon icon={faMultiply} className="filter-delete" />
            </button>
          );}
        })}
      </div>
      <div className={show ? "filter-container" : "filter-container no-show"}>
        <select
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          defaultValue={filter}
        >
          <option value="Filtro">Filtro</option>
          {filterOptions.map((option) => {
            if (!option.used) {
              return <option value={option.name}>{option.name}</option>;
            }
          })}
        </select>
        <input
          placeholder={filter}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className={filter != "Filtro" ? "active" : ""}
        ></input>
        {search != "" && filter != "Filtro" &&
        <button
        className="add-filter-button"
          onClick={() => {
            agregarFiltro();
          }}
        >
          Agregar
        </button>}
      </div>
      <div className="tour-containers">
      {filteredTours
        .filter((tour) => tour.disponibilidad)
        .map((tour) => {
          return <Tour tour={tour} obras={obras} />;
        })}
        </div>
    </>
  );
};
