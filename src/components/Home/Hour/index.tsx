import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from './styles.module.scss';

import timerIcon from '../../../assets/icons/timer.svg'
import { useState } from 'react';

export function Hour() {
  const [isOpen, setIsOpen] = useState(false);

  setInterval(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentDay = currentDate.getDay();

    if (currentDay >= 1 && currentDay <= 5) {
      if (currentHour >= 17 && currentHour <= 23) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    } else if (currentDay == 0 || currentDay == 6) {
      if (currentHour >= 18 && currentHour <= 23) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }
  }, 1000);

  return (
    <section className={styles.hour} id="hour">
      <div className="container">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce className={styles.box}>
          <div className={`${styles.boxOpen} ${isOpen ? styles.open : ""}`}>
            <small className={styles.status}>{isOpen ? "Aberto" : "Fechado"}</small>
            <div className={styles.icon}>
              <img src={timerIcon} alt="Ícone de relógio" />
            </div>
            <div className={styles.text}>
              <h3>Horário de funcionamento</h3>
              <p>Segunda-feira a sexta-feira: 17h00 - 23h00</p>
              <p>Sabado a Domíngo: 18h00 - 23h00</p>
            </div>
          </div>
          <div className={styles.hash}>
            <p>Não esqueça de marcar a gente no Instagram:</p>
            <h3>#empireburger</h3>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  )
}