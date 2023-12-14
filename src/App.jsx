import { Outlet } from "react-router-dom";
import Navbar from "./componentes/Navbar.jsx";
import "./style.css";


function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
