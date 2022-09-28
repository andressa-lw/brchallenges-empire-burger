import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from './styles.module.scss'

import imgCell from '../../../assets/cel-comida.png';
import whatsappIcon from '../../../assets/icons/whatsapp.svg';
import deliveryIcon from '../../../assets/icons/delivery.svg';
import icecreamIcon from '../../../assets/icons/icecream.svg';
import ifoodBrown from '../../../assets/icons/ifood-brown.svg';

export function Delivery() {
  return (
    <section className={styles.delivery} id="delivery">
      <div className="container">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce className={styles.box}>
          <div>
            <img src={imgCell} alt="Celular com uma imagem de hamburguer" />
          </div>
          <div className={styles.boxDelivery}>
            <h2>Nossas entregas</h2>
            <ul>
              <li>
                <div className={styles.icon}><img src={whatsappIcon} alt="Ícone do Whatsapp" /></div>
                <div className={styles.text}>
                  <h3>Whatsapp</h3>
                  <p>Vamos direto ao ponto, sem perder tempo!</p>
                </div>
              </li>
              <li>
                <div className={styles.icon}><img src={deliveryIcon} alt="Ícone de moto de entrega" /></div>
                <div className={styles.text}>
                  <h3>Entrega</h3>
                  <p>Entregamos menos de 45 minutos na porta da sua casa!</p>
                </div>
              </li>
              <li>
                <div className={styles.icon}><img src={icecreamIcon} alt="Ícone de sorvete" /></div>
                <div className={styles.text}>
                  <h3>Sobremesa</h3>
                  <p>Pedidos assima de 100 reais, ganham brindes.</p>
                </div>
              </li>
              <li>
                <div className={styles.icon}><img src={ifoodBrown} alt="Ícone do Ifood" /></div>
                <div className={styles.text}>
                  <h3>iFood</h3>
                  <p>Nossa loja é Top 1 da região!</p>
                </div>
              </li>
            </ul>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  )
}