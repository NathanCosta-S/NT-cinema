import "./filmesCard.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const imgURL = import.meta.env.VITE_IMG;

const FilmesCard = ({ filme, showLink = true }) => {
  return (
    <>
      <div className="filme-card">
        <img src={imgURL + filme.poster_path} alt={filme.tatle} />
        <h2>{filme.title}</h2>
        <p>
          <FaStar /> {filme.vote_average}
        </p>

        {showLink && <Link to={`/movie/${filme.id}`}>Saiba Mais...</Link>}
      </div>
    </>
  );
};

export default FilmesCard;
