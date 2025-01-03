import { Link, useLocation } from 'react-router-dom';
import '../../styles/components/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">
          <img src="/logo.png" alt="Malama EV Cabs" className="nav-logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          About Us
        </Link>
        <Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''}>
          Careers
        </Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          Contact
        </Link>
      </div>
      <div className="nav-cta">
        <button className="btn btn-primary">Book Now</button>
      </div>
    </nav>
  );
};

export default Navbar; 