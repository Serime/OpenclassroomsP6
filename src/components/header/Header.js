import logo_colored from './../../logo_colored.svg';
import './Header.scss';

function Header() {
  return (
    <header>
      <img src={logo_colored} height={68} width={210} alt="Kasa" />
      <nav>
        <a href='/'>Accueil</a>
        <a href='/About'>A Propos</a>
      </nav>
    </header>
  );
}

export default Header;
