import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postVideogame, getGenres } from "../redux/action/index";
import Navbar from "./Navbar";
import "../style/Create.css";

export default function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genres = useSelector((state) => state.genres);
  const names = useSelector((state) => state.videogame);

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

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    rating: "",
    released: "",
    description: "",
    image: "",
    platforms: [],
    genres: [],
  });

  function handleDelete(el) {
    setInput({
      ...input,
      genres: input.genres.filter((cc) => cc !== el),
    });
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelect(e) {
    if (input.genres.includes(e.target.value)) return alert("I'm taken");
    else {
      setInput({
        ...input,
        genres: [...input.genres, e.target.value],
      });
    }
  }

  function handleSubmit(e) {
    var videoCreate;
    const nombre = input.name;
    // if (!input.description  || !input.image || !input.platforms){
    //   return alert('please complete all items')
    // }else if (!input.image){
    //   return alert("don't have image? use this https://media3.giphy.com/media/RtpmUzMbynBeCgEa5E/200w.gif ")
    // }
   if (nombre) {
      names?.map((el) => {
        if (nombre === el.name) {
          return alert("change or put a name");
        }
      });
    } else {
      videoCreate = {
        name: input.name,
        rating: input.rating,
        released: input.released,
        description: input.description,
        image: input.image,
        platforms: input.platforms,
        genres: input.genres,
      };
    }
    dispatch(postVideogame(videoCreate));
    alert("Your Videogame was created");
    setInput({
      name: "",
      rating: "",
      released: "",
      description: "",
      image: "",
      platforms: [],
      genres: [],
    });

    navigate("/home");
  }

  function handlePlatforms(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value],
      });
    } else if (!e.target.checked) {
      setInput({
        ...input,
        platforms: input.platforms.filter((p) => p !== e.target.value),
      });
    }
  }

  return (
    <div>
      <Navbar />
      <div className="creado">
        <h2 className="title-form">Create a new Videogame</h2> <br />
        <form onSubmit={(e) => handleSubmit(e)} className="form">
          <label>Name:</label>
          <input
            name="name"
            placeholder="Name *"
            value={input.name.toLowerCase()}
            onChange={(e) => handleChange(e)}
          />
          <label>Rating: <p>{input.rating} </p></label>
          <input
            type="range"
            name="rating"
            min="1"
            max="5"
            step="0.1"
            onChange={(e) => handleChange(e)}
          />

          <label> Released:</label>
          <input
            type="date"
            name="released"
            onChange={(e) => handleChange(e)}
          />

          <label>Description:</label>
          <input
            type="text"
            name="description"
            onChange={(e) => handleChange(e)}
          />
          <label>Image:</label>
          <input
            name="image"
            placeholder="Url Img"
            value={input.image}
            onChange={(e) => handleChange(e)}
          />
          <li>
            <label className="platforms"> PLATFORMS: </label>
            <div className="align">
              {Platforms.map((e) => (
                <div key={e} className="platforms-form">
                  <input
                    className="input"
                    type="checkbox"
                    name="platforms"
                    value={e}
                    key={e}
                    onClick={(e) => handlePlatforms(e)}
                  />
                  <span className="nameGenre" name="platforms">
                    {" "}
                    {e}{" "}
                  </span>
                </div>
              ))}
            </div>
          </li>

          <div>
            <label>Genres </label>
            <select defaultValue="default" onChange={(e) => handleSelect(e)}>
              <option value="default" disabled hidden>
                Select Genres
              </option>
              {genres &&
                genres.map((genres) => {
                  return (
                    <option key={genres.id} value={genres.name}>
                      {genres.name}
                    </option>
                  );
                })}
            </select>
            {input.genres?.map((el) => (
              <div>
                <button className="dele" onClick={() => handleDelete(el)}>
                  x
                </button>
                <div className="item">
                  <p className="caja caja--animada">{el}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="created">
            <button type="submit">Ready</button>
          </div>
        </form>
      </div>
    </div>
  );
}
