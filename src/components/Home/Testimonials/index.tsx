import axios from 'axios';
import { useEffect, useState } from 'react'
import Slider from "react-slick";

import styles from './styles.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.scss";

interface Testimonial {
  name: string;
  image: string;
  age: number;
  testimonial: string;
}

export function Testimonials() {
  const [testimonial, setTestimonial] = useState<Testimonial[]>([])

  useEffect(() => {
    axios('https://api.brchallenges.com/api/empire-burger/testimonials').then(response => {
      setTestimonial(response.data)
    })
  }, [])

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className={styles.testimonials} id="testimonial">
      <div className="container">
        <h2>Nossa realeza</h2>
        <p>A satisfação de nossos clientes em primeiro lugar!</p>

        <Slider {...settings} className={styles.testimonial}>
          {testimonial.map((item) => {
            return (
              <div className={styles.box} key={item.name}>
                <p>"{item.testimonial}"</p>
                <div className="author">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.age} anos</span>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}