import React from "react";
import { Link } from "react-router-dom";
import "../style/Landing.css";

export default function Landing() {
  return (
    <div className="landing">
      <span className="landing-title">VideoGames</span>
      <h1 className="frase">Place</h1>

      <Link to="/home">
        <div className="box-2">
          <button className="entrar">Click Here </button>
        </div>
      </Link>
    </div>
  );
}
