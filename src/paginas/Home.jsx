import { useState, useEffect } from "react";
import FilmesCard from "../componentes/filmesCard";
import "../componentes/filmesCard.css";
import { FaStar } from "react-icons/fa"

const filmesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topFilmes, setTopFilmes] = useState([]);
  const getTopRateFilmes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopFilmes(data.results);
  };

  useEffect(() => {
    const topRateURL = `${filmesURL}top_rated?${apiKey}`;

    getTopRateFilmes(topRateURL);
  }, []);

  return (
 
      <div className="container">
      <h2 className="title"><FaStar />Filmes Strelas </h2>
        <div className="container-filmes">
          {topFilmes.length === 0 && <p>Carregando....</p>}
          {topFilmes.length > 0 &&
            topFilmes.map((filme) => (
              <FilmesCard key={filme.id} filme={filme} />
            ))}
        </div>
      </div>

  );
};

export default Home;
