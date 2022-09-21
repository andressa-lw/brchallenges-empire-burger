import logo from '../../assets/logo.svg';
import logoIfood from '../../assets/icons/ifood.svg';
import logoInsta from '../../assets/icons/instagram.svg';
import logoWhats from '../../assets/icons/whatsapp.svg';

import './styles.scss';

function openMenuMob() {
  document.querySelector("#toggleMenu")?.classList.toggle("active");
  document.querySelector("#menuMob")?.classList.toggle("open");
  document.querySelector("#htmlOpen")?.classList.toggle("menu-active");
}

export function Header() {
  return (
    <header id="header">
      <div className="container">
        <a href="/" className="logo">
          <img src={logo} alt="Empire Burger" />
        </a>
        <div className="menuMob" id="menuMob">
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#specialoffers">Promoção</a></li>
              <li><a href="#menufood">Cardápio</a></li>
              <li><a href="#personalized">Atendimento</a></li>
              <li><a href="#map">Contato</a></li>
            </ul>
          </nav>
          <div className="links">
            <ul className="social">
              <li><a href="https://www.ifood.com.br/" target="_blank" rel="noopener noreferrer"><img src={logoIfood} alt="Logo Ifood" /></a></li>
              <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={logoInsta} alt="Logo Instagram" /></a></li>
            </ul>
            <a href="https://whatsapp.com/" className="btn" target="_blank" rel="noopener noreferrer">
              <img src={logoWhats} alt="Logo whatsapp" />
              Contato
            </a>
          </div>
        </div>
        <button className="toggleMenu" id="toggleMenu" onClick={openMenuMob} aria-label="Menu"><i></i><i></i><i></i></button>
      </div>
    </header>
  )
}