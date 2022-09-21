import styles from './styles.module.scss'

import imgMulher from '../../../assets/img-mulher.png';

export function Personalized() {
  return (
    <section id={styles["personalized"]}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.boxImg}>
            <img src={imgMulher} alt="" />
          </div>
          <div className={styles.boxText}>
            <h2>Atendimento <span>personalizado</span></h2>
            <p>Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal.</p>
            <a href="" className={styles.btn}>Cardápio Imperial</a>
          </div>
        </div>
      </div>
    </section>
  )
}