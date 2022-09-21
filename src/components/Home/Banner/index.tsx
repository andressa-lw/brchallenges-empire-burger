import styles from './styles.module.scss';

import bannerDesk from '../../../assets/banner-desk.jpg';
import bannerMob from '../../../assets/banner-mob.jpg';

export function Banner() {
  return (
    <section id={styles["banner"]}>
      <picture>
        <source srcSet={bannerMob} media="(max-width: 560px)" />
        <source srcSet={bannerDesk} />
        <img srcSet={bannerDesk} alt="Hamburger King Burger R$ 19,99" />
      </picture>
      <div className={styles.container}>
        <small>Uma nova experiência!</small>
        <h1>King <span>burger</span></h1>
        <p>Para quem tem um <span>Apetite de um REI!</span></p>
        <a href="" className={styles.btn}>Comprar Agora</a>
      </div>
    </section>
  )
}