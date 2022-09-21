import styles from './styles.module.scss'

import imgCell from '../../../assets/cel-comida.png';
import whatsappIcon from '../../../assets/icons/whatsapp.svg';
import deliveryIcon from '../../../assets/icons/delivery.svg';
import icecreamIcon from '../../../assets/icons/icecream.svg';
import ifoodBrown from '../../../assets/icons/ifood-brown.svg';

export function Delivery() {
  return (
    <section id={styles["delivery"]}>
      <div className="container">
        <hr />
        <div className={styles.box}>
          <div className={styles.boxImg}>
            <img src={imgCell} alt="" />
          </div>
          <div className={styles.boxDelivery}>
            <h2>Nossas entregas</h2>
            <ul>
              <li>
                <div className={styles.icon}><img src={whatsappIcon} alt="" /></div>
                <div className={styles.text}>
                  <h3>Whatsapp</h3>
                  <p>Vamos direto ao ponto, sem perder tempo!</p>
                </div>
              </li>
              <li>
                <div className={styles.icon}><img src={deliveryIcon} alt="" /></div>
                <div className={styles.text}>
                  <h3>Entrega</h3>
                  <p>Entregamos menos de 45 minutos na porta da sua casa!</p>
                </div>
              </li>
              <li>
                <div className={styles.icon}><img src={icecreamIcon} alt="" /></div>
                <div className={styles.text}>
                  <h3>Sobremesa</h3>
                  <p>Pedidos assima de 100 reais, ganham brindes.</p>
                </div>
              </li>
              <li>
                <div className={styles.icon}><img src={ifoodBrown} alt="" /></div>
                <div className={styles.text}>
                  <h3>iFood</h3>
                  <p>Nossa loja é Top 1 da região!</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}