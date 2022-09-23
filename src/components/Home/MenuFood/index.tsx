import axios from 'axios';
import { useEffect, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import styles from './styles.module.scss';

interface ItemMenu {
  plate: string;
  price: number;
  ingredients: string;
}

export function MenuFood() {
  const [itemMenu, setItemMenu] = useState<ItemMenu[]>([]);

  useEffect(() => {
    axios('https://api.brchallenges.com/api/empire-burger/menu').then(response => {
      setItemMenu(response.data)
    })
  }, [])

  return (
    <section className={styles.menufood} id="menufood">
      <div className={`${styles.containerFood} container`}>
        <div className={styles.box}>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce className={styles.boxTitle}>
            <h2>Escolha o seu combo imperial, <span>peça agora!</span></h2>
            <p>Temos vários tipos de pratos para a nossa realeza, fique esperto porque temos sempre  promoção!</p>
            <a href="https://www.ifood.com.br/" target="_blank" rel="noopener noreferrer" className={styles.btn}>Ver Cardápio Completo</a>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__zoomIn" animateOnce className={styles.boxMenu}>
            <h2>Cardápio imperial | Burger</h2>
            <ul id="menuItem">
            {itemMenu.map((item) => {
              return (
                <li key={item.plate}>
                  <h3>
                    <span className={styles.name}>{item.plate}</span>
                    <span className={styles.price}>R$ {item.price}</span>
                  </h3>
                  <p>{item.ingredients}</p>
                </li>
              )
            })}
            </ul>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  )
}