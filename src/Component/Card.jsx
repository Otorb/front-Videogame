import React from "react";
import { Link } from "react-router-dom";
import "../style/Card.css";

export default function Card({ id, name, image, genres, rating }) {
  return (
    <div className="card">
      <section className="card2">
        <Link to={`/home/${id}`}>
          <img className="img" src={image} alt={name} />
        </Link>
        <h2 className="cardName"> {name} </h2>
        <h3 className="cardRating"> {rating}⭐</h3>
        <h3 className="cardGenres">
          {genres &&
            genres.map((e) => {
              return (
                <div className="genres" key={e}>
                  {" "}
                  ☑️ {e}
                </div>
              );
            })}
        </h3>
      </section>
    </div>
  );
}

