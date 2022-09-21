import ifoodIcon from '../../assets/icons/ifood.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import logoFooter from '../../assets/logo-footer.svg';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer id={styles["footer"]}>
      <div className="container">
        <div className={styles.navFooter}>
          <a href="/" className={styles.logo}><img src={logoFooter} alt="Logo Empire Burguer" /></a>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#promotion">Localização</a></li>
              <li><a href="#menu">Cardápio</a></li>
              <li><a href="#comment">Sobre</a></li>
            </ul>
          </nav>
          <ul className={styles.social}>
            <li><a href=""><img src={ifoodIcon} alt="Logo Ifood" /></a></li>
            <li><a href=""><img src={instagramIcon} alt="Logo Instagram" /></a></li>
          </ul>
        </div>
        <small>2022 © EmpireBurger. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}