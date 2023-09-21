// Components
import { Header } from './partsOfPage/header/Header.jsx';
import { Footer } from './partsOfPage/footer/Footer.jsx';
import { Box } from './components/box.jsx';
import { Noticias } from './partsOfPage/noticias/Noticias.jsx';
import './css/App.css';

// Images
import logo from '../public/logoPrin.png';
import foguete from '../public/elements/foguete.png';
import rei from '../public/elements/rei.png';

import exercicio from '../public/elements/ilustrativos/exercicio.png';
import materiais from '../public/elements/ilustrativos/materiais.png';
import news from '../public/elements/ilustrativos/news.png';
import videos from '../public/elements/ilustrativos/videos.png';

import macho from '../public/elements/macho.png';

{/* <main>
  <Hero />
  <Treinamentos />
  <Noticias />
  <Projeto />
</main> */}

export function App() {
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

        <Noticias />

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