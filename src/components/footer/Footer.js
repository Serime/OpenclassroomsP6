import logo_white from './../../logo_white.svg';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <img src={logo_white} height={40} width={122} alt="Kasa" />
      <span>© 2020 Kasa. All <br className="only-mobile"/> rights reserved</span>
    </footer>
  );
}

export default Footer;
