import logo_colored from './../../logo_colored.svg';
import { Link } from 'react-router-dom'
import './Header.scss';
import { useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();
  console.log(location);
  return (
    <header>
      <img src={logo_colored} height={68} width={210} alt="Kasa"/>
      <nav>
        <Link to="/" className={location.pathname === '/' ? "Underline" : ""}> Accueil</Link>
        <Link to="/About" className={location.pathname === '/About' ? "Underline" : ""}>A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;