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

import n1 from '../../../public/carrossel/noticia5.jpg';
import n2 from '../../../public/carrossel/noticia4.jpg';
import n3 from '../../../public/carrossel/noticia3.jpg';
import n4 from '../../../public/carrossel/noticia2.jpg';
import n5 from '../../../public/carrossel/noticia1.jpg';

export function Noticias() {
    const imagens = [
        { id: 1, image: n1, url: '#' },
        { id: 2, image: n2, url: '#' },
        { id: 3, image: n3, url: '#' },
        { id: 4, image: n4, url: '#' },
        { id: 5, image: n5, url: '#' }
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

        <Swiper slidesPerView={slidePerView} pagination={{clickable: true}} navigation>
        {
            imagens.map( (item) => (
            <SwiperSlide key={item.id}>
                <a href={item.url}>
                    <img src={item.image} alt="Imagem" className={NoticiaStyles.carrosselImg} />
                </a>
            </SwiperSlide>
            ))
        }
        </Swiper>

        <a href="#">SAIBA MAIS!</a>
    </section>
    );
}