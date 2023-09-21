import NoticiaStyles from './noticias.module.css';

import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide} from 'swiper/react';

// Biblioteca para o carrossel (Swiper)
import { register } from 'swiper/element/bundle';
register();
import 'swiper/css'; //css padrao
import 'swiper/css/navigation'; //setinha de navegação
import 'swiper/css/pagination'; //bolinhas
import 'swiper/css/scrollbar';

import n1 from '../../../public/carrossel/noticia5.png';
import n2 from '../../../public/carrossel/noticia4.png';
import n3 from '../../../public/carrossel/noticia3.png';
import n4 from '../../../public/carrossel/noticia2.png';
import n5 from '../../../public/carrossel/noticia1.png';

export function Noticias() {
    const imagens = [
        { id: 1, image: n1 },
        { id: 2, image: n2 },
        { id: 3, image: n3 },
        { id: 4, image: n4 },
        { id: 5, image: n5 }
      ];
      
    const [slidePerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 900)
            setSlidesPerView(1);
            else
            setSlidesPerView(2);
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
    <section className={NoticiaStyles.noticias} id="noticias">
        <div className={NoticiaStyles.text}>
        <h2>
            VEJA AS <br />
            NOTÍCIAS!
        </h2>
        <p>Descubra informações sobre o mundo da Informática.</p>
        </div>

        <Swiper slidesPerView={slidePerView} pagination={{ clickable: true}} navigation>
        {
            imagens.map( (item) => (
            <SwiperSlide key={item.id}>
                <img src={item.image} alt="Imagem" className={NoticiaStyles.carrosselImg} />
            </SwiperSlide>
            ))
        }
        </Swiper>

        <a href="#">SAIBA MAIS!</a>
    </section>
    );
}