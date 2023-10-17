import logo_colored from './../../logo_colored.svg';
import { Link } from 'react-router-dom'
import './Header.scss';

function Header() {
  return (
    <header>
      <img src={logo_colored} height={68} width={210} alt="Kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/About">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
