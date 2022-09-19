import React from "react";
import "../style/Page.css";

export default function Page({ videoPorPagina, videogame, paginado }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(videogame / videoPorPagina); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="forma">
      <ul className="lista">
        {pageNumbers?.map((number) => (
          <li className="number" key={number}>
            <a onClick={() => paginado(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
