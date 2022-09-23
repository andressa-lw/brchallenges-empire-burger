import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from './styles.module.scss'

import CellIcon from '../../../assets/icons/cell.svg';

export function Order() {
  return (
    <section className={styles.order} id="order">
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce className="container">
        <div className={styles.boxOpen} id="open-close"
        >
          <div className={styles.icon}>
            <img src={CellIcon} alt="Ícone de celular" />
          </div>
          <div className={styles.text}>
            <h3>faça o seu pedido agora mesmo!</h3>
            <p>Venha saborear a melhor experiência de hamburguenses artesanal do Empires Burger, com temática medieval!</p>
          </div>
          <a href="https://www.ifood.com.br/" target="_blank" rel="noopener noreferrer" className={styles.btn}>Solicitar Pedido</a>
        </div>
      </AnimationOnScroll>
    </section>
  )
}