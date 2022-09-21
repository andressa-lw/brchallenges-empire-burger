import styles from './styles.module.scss'

import imgMulher from '../../../assets/img-mulher.png';

export function Personalized() {
  return (
    <section className={styles.personalized} id="personalized">
      <div className="container">
        <div className={styles.box}>
          <div className={styles.boxImg}>
            <img src={imgMulher} alt="Imagem mulher comendo um hamburguer" />
          </div>
          <div className={styles.boxText}>
            <h2>Atendimento <span>personalizado</span></h2>
            <p>Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal.</p>
            <a href="#menufood" className={styles.btn}>Cardápio Imperial</a>
          </div>
        </div>
      </div>
    </section>
  )
}