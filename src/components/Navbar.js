import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
          <div>Logo</div>
          <div>
              <div>
                  <li><Link to="/">Our Products</Link></li>
                  <li><Link to="/">Insights</Link></li>
                  <li><Link to="/">Smart Yarn</Link></li>
                  <li><Link to="/">About us</Link></li>
                  <li><Link to="/">Contact</Link></li>
              </div>
          </div>
      </nav>
      <Link to="/">Jobs Available</Link>
      <Link to="../CreateCareer">Create Job </Link>
    </div>
  );
}

export default Navbar;
