import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import Home from "./paginas/home.jsx";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import FilmesCard from "../componentes/filmesCard";

import "./Movie.css";

const filmeURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Movie() {
  const { id } = useParams();
  const [filmes, setFilmes] = useState(null);
  const getFilme = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setFilmes(data);
  };

  const formatoDollar = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const filmeUrl = `${filmeURL}${id}?${apiKey}`;
    getFilme(filmeUrl);
  });

  return (
    <div className="filme-pagina ">
      {filmes && (
        <>
          <div className="info">
            <FilmesCard filme={filmes} showLink={false} />
            <p className="tegline">{filmes.tagline}</p>
          </div>
          <div className="info">
            <h3>
              {" "}
              <BsWallet2 />
               Orçamento
            </h3>
            <p>{formatoDollar(filmes.budget)}</p>
          </div>

          <div className="info">
            <h3>
              {" "}
              <BsGraphUp />
              Faturamento
            </h3>
            <p>{formatoDollar(filmes.revenue)}</p>
          </div>

          <div className="info">
            <h3>
              {" "}
              <BsHourglassSplit />
              Duração
            </h3>
            <p>{filmes.runtime} Minutos</p>
          </div>
          <div className="info descricao">
            <h3>
              {" "}
              <BsFillFileEarmarkTextFill />
              Descrição
            </h3>
            <p>{filmes.overview} Minutos</p>
          </div>
          <a href="/">Voltar</a>
        </>
      )}
    </div>
  );
}

export default Movie;
