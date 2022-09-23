import burgerIcon from '../../../assets/icons/burger.svg';
import headsetIcon from '../../../assets/icons/headset.svg';
import deliveryIcon from '../../../assets/icons/delivery.svg';

import styles from './styles.module.scss';

export function InfoBox() {
  return (
    <section className={styles.infobox} id="infobox">
      <div className="container">
        <div className="animate__animated animate__fadeInUp">
          <ul className={styles.box}>
            <li>
              <div className={styles.icon}><img src={burgerIcon} alt="Ícone de hamburger" /></div>
              <div className={styles.text}>
                <h2>Artesanal</h2>
                <p>Nossas receitas são feitas com todo cuidado</p>
              </div>
            </li>
            <li>
              <div className={styles.icon}><img src={headsetIcon} alt="Ícone de fone de ouvido" /></div>
              <div className={styles.text}>
                <h2>Atendimento</h2>
                <p>Totalmente personalizado</p>
              </div>
            </li>
            <li>
              <div className={styles.icon}><img src={deliveryIcon} alt="Ícone de moto de entrega" /></div>
              <div className={styles.text}>
                <h2>DELIVERY Speed</h2>
                <p>Entregamos menos de 45 minutos</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}