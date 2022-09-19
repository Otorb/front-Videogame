import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideoGame,
  getGenres,
  filterGenres,
  filterCreate,
  sortByName,
  orderRating,
  filterByPlatform,
} from "../redux/action/index";
import Navbar from "./Navbar";
import Card from "./Card";
import Paginas from "./Page";
import SearchBar from "./SearchBar";
import "../style/Home.css";
import cargando from "../images/carga.gif";
import Error from "../images/error.webp";

const Home = () => {
  const dispatch = useDispatch();
  const videogame = useSelector((state) => state.videogame);
  const genres = useSelector((state) => state.genres);
  const [orderName, setOrderName] = useState();
  const [orderbyRating, setOrderRating] = useState();

  useEffect(() => {
    dispatch(getVideoGame());
    dispatch(getGenres());
  }, []);

  let Platforms = [
    "PC",
    "PlayStation",
    "Xbox",
    "Nintendo Switch",
    "iOS",
    "Android",
    "Nintendo",
    "PS Vita",
    "PSP",
    "Wii",
    "GameCube",
    "Game Boy",
    "SNES",
    "NES",
    "Commodore",
    "Atari",
    "Genesis",
    "SEGA",
    "Dreamcast",
    "3DO",
    "Jaguar",
    "Game Gear",
    "Neo Geo",
    "PS5",
    "PS4",
    "PS3",
    "PS2",
    "PS1",
  ];

  const [paginaActual, setPaginaActual] = useState(1);
  const [videoPorPagina, setVideoPorPagina] = useState(15);
  const iDelUltimo = paginaActual * videoPorPagina;
  const iDelPrimero = iDelUltimo - videoPorPagina;
  const videosActuales = videogame.slice(iDelPrimero, iDelUltimo);

  const paginado = (pageNumbers) => {
    setPaginaActual(pageNumbers);
  };

  function handleReset(e) {
    e.preventDefault(e);
    dispatch(getVideoGame());
    dispatch(getGenres());
  }

  function handleGenres(e) {
    e.preventDefault();
    dispatch(filterGenres(e.target.value));
  }

  function handleCreate(e) {
    e.preventDefault();
    dispatch(filterCreate(e.target.value));
  }

  function handleName(e) {
    e.preventDefault();
    dispatch(sortByName(e.target.value));
    setPaginaActual(1);
    setOrderName(`${e.target.value}`);
  }

  function handleRating(e) {
    e.preventDefault();
    dispatch(orderRating(e.target.value));
    setPaginaActual(1);
    setOrderRating(`${e.target.value}`);
  }

  function handlePlatform(e) {
    e.preventDefault();
    dispatch(filterByPlatform(e.target.value));
  }

  return (
    <div>
      <Navbar />
      <div className="home">
        <h1 className="tuclase">Welcome to the ApiGame</h1>
        <button
          onClick={(e) => {
            handleReset(e);
          }}
        >
          Limpiar Filtros
        </button>
        <SearchBar />
        <div>
          <select onChange={(e) => handleCreate(e)} defaultValue="all">
            <option value="all" disabled hidden>
              Filter By Origin
            </option>
            <option value="api">From Api</option>
            <option value="created">created for us</option>
          </select>

          <select onChange={(e) => handleGenres(e)}>
            <option value="all">Filter By Genres</option>
            {genres && genres.map((g) => <option key={g.id}>{g.name}</option>)}
          </select>

          <select onChange={(e) => handlePlatform(e)} defaultValue="default">
            <option value="default" disabled hidden>
              Filter By Platforms
            </option>
            {Platforms && Platforms.map((g) => <option key={g}>{g}</option>)}
          </select>

          <select onChange={(e) => handleName(e)} defaultValue="all">
            <option value="all" disabled hidden>
              Filter By Name
            </option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>

          <select onChange={(e) => handleRating(e)} defaultValue="WH">
            <option value="WH" disabled hidden>
              Filter By Rating
            </option>
            <option value="ratiAsc">Min Rating</option>
            <option value="ratiDesc">Max Rating</option>
          </select>
        </div>
        <Paginas
          videoPorPagina={videoPorPagina}
          videogame={videogame.length}
          paginado={paginado}
        />
        <div>
          {!videogame.length && (
            <div className="desapare">
              <img src={cargando} alt="wait" className="carga" />
              <p>Loading...</p>
            </div>
          )}

          {!videosActuales.length > 0 && (
            <div>
              <h2>I'm sorry I can't to find it</h2>
              <img className="error" src={Error} alt="not found" />
            </div>
          )}
        </div>

        <div className="contentWrapper">
          {videosActuales?.map((v) => {
            return (
              <Card
                // id={v.id}
                key={v.id}
                name={v.name}
                image={v.image}
                genres={v.genres}
                rating={v.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
