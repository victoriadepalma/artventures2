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
    { name: "Nombre", used: false },
    { name: "Obra", used: false },
    { name: "Artista", used: false },
    { name: "Ubicación", used: false },
  ]);
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState("Filtro");
  const [search, setSearch] = useState("");
  const { tours, obras } = useSelector((state) => ({
    ...state.tours,
  }));
  const [filteredTours, setFilteredTours] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listTours());
    dispatch(listObras());
  }, []);

  useEffect(() => {
    setFilteredTours(tours);
  }, [tours]);



  const filtrar = () => {
    let aux = filteredTours;
    console.log("kjhnbgvbhjnkm", filters);
    for (let i = 0; i < filters.length; i++) {
      if (filters[i] == "Nombre") {
        console.log(
          tour.name_tour.toLowerCase().includes(search.toLowerCase())
        );
        aux.filter((tour) =>
          tour.name_tour.toLowerCase().includes(search.toLowerCase())
        );
      }
    }
    setFilteredTours(aux);
  };

  const agregarFiltro = () => {
   
    let auxFilterOptions = filterOptions;
    setFilterOptions(
      auxFilterOptions.map((element) => {
        if (element.name == filter) {
          let aux = element;
          aux.used = true;
          element = aux;
          return element;
        } else {
          return element;
        }
      })
    );

    let aux = filters;
    aux.push(filter);
    console.log(aux)
    filtrar(aux)
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
        {filters.map((filter) => {
          return (
            <button className="add-filter filter-item">
              Escultura{" "}
              <FontAwesomeIcon icon={faMultiply} className="filter-delete" />
            </button>
          );
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
        <button
          onClick={() => {
            agregarFiltro();
          }}
        >
          Agregar
        </button>
      </div>
      {filteredTours
        .filter((tour) => tour.disponibilidad)
        .map((tour) => {
          return <Tour tour={tour} />;
        })}
    </>
  );
};
