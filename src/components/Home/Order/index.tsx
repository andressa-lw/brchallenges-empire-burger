import styles from './styles.module.scss'

import CellIcon from '../../../assets/icons/cell.svg';

export function Order() {
  return (
    <section id={styles["order"]}>
      <div className="container">
        <div className={styles.boxOpen} id="open-close">
          <div className={styles.icon}>
            <img src={CellIcon} alt="" />
          </div>
          <div className={styles.text}>
            <h3>faça o seu pedido agora mesmo!</h3>
            <p>Venha saborear a melhor experiência de hamburguenses artesanal do Empires Burger, com temática medieval!</p>
          </div>
          <a href="" className={styles.btn}>Solicitar Pedido</a>
        </div>
      </div>
    </section>
  )
}