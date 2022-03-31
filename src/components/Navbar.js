import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {
  return (
    <div>
      <nav className="navbar">
          <div>Logo</div>
          <div>
              <div className="navbar_links"> 
                  <li className="links"><Link to="/">Our Products</Link></li>
                  <li className="links"><Link to="/">Insights</Link></li>
                  <li className="links"><Link to="/">Smart Yarn</Link></li>
                  <li className="links"><Link to="/">About us</Link></li>
                  <li className="links"><Link to="/">Contact</Link></li>
              </div>
          </div>
      </nav>
      <Link to="/">Jobs Available</Link>
      <Link to="../CreateCareer">Create Job </Link>
    </div>
  );
}

export default Navbar;
