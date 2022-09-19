import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../redux/action/index";
import Navbar from "./Navbar";
import loading from "../images/loading.gif";
import "../style/Detail.css";

export default function Detail() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const detail = useSelector((state) => state.detail);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    dispatch(getDetail(id));
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="detail">
        {loader ? (
          <img
            className="carga"
            src={loading}
            alt="loader"
            width="50%"
            height="70%"
          />
        ) : (
          <div className="container">
            <div className="containerText">
              <p>
                <b className="bb">Name: </b>
                <span className="pp">{detail.name}</span>
              </p>
              <p>
                <b className="bb">⭐ Rating: </b>
                <span className="pp">{detail.rating}</span>
              </p>
              <p>
                <b className="bb"> 📆Released: </b>
                <span className="pp">{detail.released}</span>
              </p>
              <p>
                <strong className="bb">🏹Genres: </strong>
                <span className="pp">{detail.genres + " "}</span>
              </p>
              <p>
                <strong className="bb">👾Platforms: </strong>
                <span className="pp">{" " + detail.platforms + " "}</span>
              </p>
            </div>

            <div className="contDescription">
              <img
                src={detail.image}
                alt=""
                className="pero"
                width="200px"
                height="150px"
              />
              <h3 className="titleDescription">📖Description:</h3>
              <p dangerouslySetInnerHTML={{ __html: detail.description }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
