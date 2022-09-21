import axios from 'axios';
import { useEffect, useState } from 'react';

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
    <section id={styles["menufood"]}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.boxTitle}>
            <h2>Escolha o seu combo imperial, <span>peça agora!</span></h2>
            <p>Temos vários tipos de pratos para a nossa realeza, fique esperto porque temos sempre  promoção!</p>
            <a href="" className={styles.btn}>Ver Cardápio Completo</a>
          </div>
          <div className={styles.boxMenu}>
            <h2>Cardápio imperial | Burger</h2>
            <ul id="menuItem">
            {itemMenu.map(item => {
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
          </div>
        </div>
      </div>
    </section>
  )
}