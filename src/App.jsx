// Components
import { Header } from './partsOfPage/header/Header.jsx';
import { Footer } from './partsOfPage/footer/Footer.jsx';
import { Box } from './components/box.jsx';
import { useEffect, useState } from 'react';
import './css/App.css';

// Biblioteca para o carrossel (Swiper)
import { register } from 'swiper/element/bundle';
register();
import 'swiper/css'; //css padrao
import 'swiper/css/navigation'; //setinha de navegação
import 'swiper/css/pagination'; //bolinhas
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide} from 'swiper/react';

// Images
import logo from '../public/logoPrin.png';
import foguete from '../public/elements/foguete.png';
import rei from '../public/elements/rei.png';

import exercicio from '../public/elements/ilustrativos/exercicio.png';
import materiais from '../public/elements/ilustrativos/materiais.png';
import news from '../public/elements/ilustrativos/news.png';
import videos from '../public/elements/ilustrativos/videos.png';

import n1 from '../public/carrossel/noticia5.png';
import n2 from '../public/carrossel/noticia4.png';
import n3 from '../public/carrossel/noticia3.png';
import n4 from '../public/carrossel/noticia2.png';
import n5 from '../public/carrossel/noticia1.png';

import macho from '../public/elements/macho.png';

export function App() {
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
    <>
      <Header />

      <main>
        
        <section className="hero">
          <div className="left-hero">
            <h1>
              Não perca a <br/>
              chance de <span>brilhar</span> <br/>
              nas Olimpíadas de <br/>
              Informática!
            </h1>
            <h2>
              trilhe o caminho rumo à vitória tecnológica!
            </h2>
          </div>
          <img src={logo} alt="Logo da AMO" />
        </section>

        <section className="treinamentos" id="treinamentos">
          <div className="preparese">
            <div className="cima-treinamentos">
              <img src={foguete} alt="Foguete" />
              <h2>
                Prepare-se <br />
                para o Futuro!
              </h2>
            </div>
            <p>
              Nosso programa de treinamento GRATUITO, conduzido pela rede federal, busca preparar  os estudantes para a Olimpíada Brasileira de Informática, não apenas dentro da instituição federal, mas também em colégios do estado!
            </p>
            <a href="#">COMECE JÁ!</a>
          </div>

          <div className="primeiropasso">
            <h2>Dê o primeiro passo rumo à glória!</h2>
            <p>
              Tenha acesso a um ótimo ensino, materiais de <br />
              qualidade e muito mais!  Garanta seu lugar no <br />
              pódio das olimpíadas!
            </p>
            <img src={rei} alt="Rei" />
            <div className="boxOrg">
              <Box
                image={exercicio}
                texto="Vídeos"
              />
              <Box
                image={materiais}
                texto="Materiais"
              />
              <Box
                image={news}
                texto="News"
              />
              <Box
                image={videos}
                texto="Vídeos"
              />
            </div>
          </div>
        </section>

        <section className="noticias" id="noticias">
          <div className="text">
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
                  <img src={item.image} alt="Imagem" className="carrossel-img" />
                </SwiperSlide>
              ))
            }
          </Swiper>

          <a href="#">SAIBA MAIS!</a>
        </section>

        <section className="projeto" id="projeto">
          <h2>O Projeto</h2>

          <div className="content">
            <p>
              A AMO é um projeto de treinamento que prepara os alunos para a Olimpíada Brasileira de Informática (OBI) por meio de orientação, aulas práticas, teóricas e desafios de programação, visando o desenvolvimento de habilidades em programação.
            </p>
            <img src={macho} alt="Foto ilustrativa" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}