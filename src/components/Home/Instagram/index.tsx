import styles from './styles.module.scss'

import insta1 from '../../../assets/insta1.jpg';
import insta2 from '../../../assets/insta2.jpg';
import insta3 from '../../../assets/insta3.jpg';
import insta4 from '../../../assets/insta4.jpg';
import insta5 from '../../../assets/insta5.jpg';
import insta6 from '../../../assets/insta6.jpg';
import insta7 from '../../../assets/insta7.jpg';
import insta8 from '../../../assets/insta8.jpg';

export function Instagram() {
  return (
    <section className={styles.instagramSection} id="instagram">
      <div className="container">
        <h2>Publicações do instagram</h2>
        <p>Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal.</p>
      </div>
      <div className={styles.gallery}>
        <img src={insta1} alt="" />
        <img src={insta2} alt="" />
        <img src={insta3} alt="" />
        <img src={insta4} alt="" />
        <img src={insta5} alt="" />
        <img src={insta6} alt="" />
        <img src={insta7} alt="" />
        <img src={insta8} alt="" />
      </div>
      <div className={styles.looptext}>
        <div>
          <h3>• #empireburger</h3>
          <h3>• #empireburger</h3>
          <h3>• #empireburger</h3>
          <h3>• #empireburger</h3>
          <h3>• #empireburger</h3>
          <h3>• #empireburger</h3>
          <h3>• #empireburger</h3>
          <h3>• #empireburger</h3>
          <h3>• #empireburger</h3>
          <h3>• #empireburger</h3>
          <h3>• #empireburger</h3>
          <h3>• #empireburger</h3>
          <h3>• #empireburger</h3>
          <h3>• #empireburger</h3>
          <h3>• #empireburger</h3>
        </div>
      </div>
    </section>
  )
}