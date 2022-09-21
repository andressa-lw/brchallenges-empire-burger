import styles from './styles.module.scss';

import oferta1 from '../../../assets/oferta-1.png'
import oferta2 from '../../../assets/oferta-2.png'
import oferta3 from '../../../assets/oferta-3.png'

export function SpecialOffers() {
  return (
    <section id="specialoffers" className={styles.specialoffers}>
      <div className="container">
        <h2>Ofertas especiais</h2>
        <p>Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque sempre estamos mudando o nosso cardapio.</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <div className={styles.text}>
              <h3>Burger imperial+batata</h3>
              <span>250kg</span>
              <p>Apenas <strong>Hoje</strong></p>
            </div>
            <img src={oferta1} alt="Imagem hamburguer" />
          </div>
          <div className={styles.box}>
            <img src={oferta2} alt="Imagem batata" />
            <div className={styles.text}>
              <h3>batata</h3>
              <span>150kg</span>
            </div>
          </div>
          <div className={styles.box}>
            <img src={oferta3} alt="Imagem sorvete" />
            <div className={styles.text}>
              <h3>Sorvete</h3>
              <span>50kg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
