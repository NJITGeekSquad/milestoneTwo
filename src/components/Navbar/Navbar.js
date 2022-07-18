import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">Citrus.</Link>
      </div>
      <nav className="item">
        <ul className="ul">
          <li>
            <Link to="/ShowProp">Properties</Link>
          </li>
          <li>
            <Link to="/addnewprop">Create</Link>
          </li>
          <li>
            <Link to="#">Sign Up</Link>
          </li>
          <li>
            <Link to="#">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
