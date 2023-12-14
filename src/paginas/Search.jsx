import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilmesCard from "../componentes/filmesCard";

const searchURL = import.meta.env.VITE_SEARCH;

const apiKey = import.meta.env.VITE_API_KEY;

import "../componentes/filmesCard.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [filmes, setFilmes] = useState([]);
  const query = searchParams.get("q");

  const getSearchFilmes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setFilmes(data.results);
  };

  useEffect(() => {
    const searchWhihQueryURL = `${searchURL}?${apiKey}&query=${query}`;

    getSearchFilmes(searchWhihQueryURL);
  }, [query]);

  return (
    <>
      <div className="container">
        <h2 className="title">
          Resultados para: <span className="query-text">{query}</span>
        </h2>
        <div className="container-filmes">
          {filmes.length === 0 && <p>Carregando....</p>}
          {filmes.length > 0 &&
            filmes.map((filme) => (
              <FilmesCard key={filme.id} filme={filme} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Search;
