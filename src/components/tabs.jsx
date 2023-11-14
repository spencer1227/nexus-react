import { Link, useLocation } from 'react-router-dom';
import "../pages/style/tabs.css"

function tabs() {
  const currentPage = useLocation().pathname;

  return (
    <div id='navbar'>
    <div className="tabs">
      <h2 className="nav-tab">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </h2>
      <h2 className="nav-tab">
        <Link
          to="/about"
         
          className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </h2>
      <h2 className="nav-tab">
        <Link
          to="/resume"
          
          className={currentPage === '/blog' ? 'nav-link active' : 'nav-link'}
        >
         Resume
        </Link>
      </h2>
      <h2 className="nav-tab">
        <Link
          to="/contact"
          
          className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </h2>
      <h2 className="nav-tab">
        <Link
          to="/portfolio"
          
          className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </h2>
    </div>
    </div>
  );
}

export default tabs;