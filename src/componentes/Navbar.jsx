import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiHome, BiSearchAlt2 } from "react-icons/bi";
import logoIcon from "../imagem/logo.png";
import "./navbar.css";

function Navbar() {
  const [search, setSearch] = useState("");

  const navgate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navgate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <>
      <header className="header ">
        <div className="logo">
          <img src={logoIcon} alt="" />
        </div>

        <nav id="navbar">
          <ul className="navbar">
            <a href="/">{<BiHome />}Home</a>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Busque um filme"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <button type="subm">
                <BiSearchAlt2 />
                Buscar
              </button>
            </form>
          </ul>
        </nav>
      </header>
      <hr />
    </>
  );
}

export default Navbar;
