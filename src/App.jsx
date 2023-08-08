// CSS
import './css/global.css';
import './css/App.css';
// Imagens
import Logo from './images/Logo.png';
import Amo from './images/amo.png';
import IconLogin from './images/loginicon.png';
import Computador from './images/computador.png';
import Equipe from './images/foto1.png';
//Redes Sociais
import Facebook from './images/Midias/facebook.svg';
import Instagram from './images/Midias/instagram.svg';
import Linkedin from './images/Midias/linkedin.svg';
import Twitter from './images/Midias/Twitter.svg';
// Logo dos Patrocinadores
import CPSoftware from './images/patrocinadores/cpsoftware.png';
import FapealSecti from './images/patrocinadores/fapealsecti.png';
import Fapeal from './images/patrocinadores/fapeal.png';
import Ifal from './images/patrocinadores/ifal.png';
import PibicJr from './images/patrocinadores/pibicjr.png';

export function App() {
  return (
    <div>
      <header>
        <nav>
          {/* Imagem da logo */}
          <a href="../index.html">
            <img src={Logo} alt="Logo da AMO" />
          </a>
          {/* Links do próprio site */}
          <ul>
            <li><a href="#">O projeto</a></li>
            <li><a href="#">Inscreva-se</a></li>
            <li><a href="#">Equipe</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
          {/* Links para a página de Login e Registro */}
          <div className="login-register">
              <a href="#">
                <img src={IconLogin} alt="Icone de Login" />
                Entrar
              </a>
              <a href="#">Criar Conta</a>
          </div>
        </nav>
      </header>
      
      <main>
        <section className='first'>
            <h1>
            Pronto para <br />
            arrasar na <br />
            Olimpíada <br />
            Brasileira de <br />
            Informática? <br />
            </h1>
            <div>
              <img src={Amo} alt="Logo AMO" />
              <h2>Alagoas no Mapa da OBI</h2>
            </div>
          
        </section>
        
        <section className='second'>
            <h2>O Projeto</h2>
            <div className='divider'>
              <img src={Computador} alt="Imagem ilustrativa de um computador" />
              <div className='content-text'>
                <h3>Bem-vindos ao projeto "AMO" Alagoas no Mapa da OBI!</h3>

                <p>
                  Bem-vindo ao nosso site do projeto AMO (Alagoas no Mapa da OBI)!
                </p>
                <p>
                  Nosso principal objetivo é incentivar e capacitar jovens talentos a participarem da Olimpíada Brasileira de Informática (OBI) e destacarem-se nessa competição desafiadora.
                </p>
                <p>
                  Nós acreditamos no poder da tecnologia para transformar vidas e queremos incentivar o desenvolvimento de habilidades que irão abrir portas para um futuro promissor. Então, junte-se a nós e faça parte dessa comunidade de jovens talentosos e apaixonados por tecnologia e descubra como a informática pode transformar o seu futuro! Vamos colocar Alagoas no Mapa da OBI!
                </p>
              </div>
            </div>
          
        </section>
    
        <section className='third'>
            {/* Criar componentes para melhorar aqui */}
            <h2>De que forma vamos levar alunos até a OBI!</h2>
            <div className="conteudo">
              <p className='mod'>
                Criamos atividades para serem trabalhadas tanto com os alunos do Instituto Federal de Alagoas - Campus Maceió quanto para o público externo, buscando democratizar o acesso à informática, o aprendizado coletivo e estimular o interesse pela OBI em escolas de diferentes regiões, a fim de capacitar estudantes em lógica de programação, algoritmos e estrutura de dados.
              </p>
              <div className="text-atividades">
                <div className="box-text">
                  <h4>Atividade Interna</h4>
                  <p>
                    O nosso treinamento interno é voltado para atividades de resolução de questões com os alunos do Instituto, praticando com questões reais e fazendo com que os alunos se familiarizem com o formato e a complexidade das provas.
                  </p>
                </div>
                <div className="box-text">
                  <h4>Atividade Externa</h4>
                  <p>
                    O nosso treinamento externo é inclusivo e aberto ao público externo do Instituto Federal de Alagoas (IFAL) - Campus Maceió, com o objetivo de disseminar conhecimento e incentivar a participação de outras escolas (públicas e privadas) na OBI.
                  </p>
                </div>
              </div>
            </div>
        </section>

        <section className='fourth'>
            <h2>Sobre as olimpíadas de informática</h2>
            <p className='mod'>
              Lorem ipsum dolor sit amet. Et quisquam iusto aut provident numquam id magnam asperiores in enim placeat vel ipsa illum. Et animi sint eos voluptatem labore ab facilis laudantium aut molestiae earum. Sed quia adipisci id voluptatum optio eos beatae amet vel nemo ullam est quos consequatur cum dignissimos galisum cum similique itaque! Sit perspiciatis asperiores sit cumque possimus qui nulla obcaecati sed aspernatur quisquam sed alias unde est voluptatem ullam. In commodi nostrum qui quae reprehenderit ut deserunt vitae!
            </p>
            <div className="know-more">
              <span>Conheça mais!</span>
              <a href="#">Link</a>
            </div>
          
        </section>

        <section className='fifth'>
            <h2>Inscreva-se</h2>
            <small className='text'>Para participar dos treinamentos, inscreva-se nos nossos cursos:</small>

            <div className="box-baloons">
              <div className="baloons">
                <h3>TÍTULO PARA EXEMPLO</h3>

                <div className="content">
                  <p>Conteúdos:</p>
                  <ul>
                    <li>Conteúdo 1</li>
                    <li>Conteúdo 2</li>
                    <li>Conteúdo 3</li>
                  </ul> 
                </div>

                <p>Observações, exemplo</p>
                <a href="#">Inscrever-se</a>
              </div>

              <div className="baloons">
                <h3>TÍTULO PARA EXEMPLO</h3>

                <div className="content">
                  <p>Conteúdos:</p>
                  <ul>
                    <li>Conteúdo 1</li>
                    <li>Conteúdo 2</li>
                    <li>Conteúdo 3</li>
                  </ul>
                </div>

                <p>Observações, exemplo</p>
                <a href="#">Inscrever-se</a>
              </div>

              <div className="baloons">
                <h3>TÍTULO PARA EXEMPLO</h3>

                <div className="content">
                  <p>Conteúdos:</p>
                  <ul>
                    <li>Conteúdo 1</li>
                    <li>Conteúdo 2</li>
                    <li>Conteúdo 3</li>
                  </ul>
                </div>

                <p>Observações, exemplo</p>
                <a href="#">Inscrever-se</a>
              </div>

              <div className="baloons">
                <h3>TÍTULO PARA EXEMPLO</h3>

                <div className="content">
                  <p>Conteúdos:</p>
                  <ul>
                    <li>Conteúdo 1</li>
                    <li>Conteúdo 2</li>
                    <li>Conteúdo 3</li>
                  </ul>
                </div>

                <p>Observações, exemplo</p>
                <a href="#">Inscrever-se</a>
              </div>
              <div className="baloons">
                <h3>TÍTULO PARA EXEMPLO</h3>

                <div className="content">
                  <p>Conteúdos:</p>
                  <ul>
                    <li>Conteúdo 1</li>
                    <li>Conteúdo 2</li>
                    <li>Conteúdo 3</li>
                  </ul>
                </div>

                <p>Observações, exemplo</p>
                <a href="#">Inscrever-se</a>
              </div>

              <div className="baloons">
                <h3>TÍTULO PARA EXEMPLO</h3>

                <div className="content">
                  <p>Conteúdos:</p>
                  <ul>
                    <li>Conteúdo 1</li>
                    <li>Conteúdo 2</li>
                    <li>Conteúdo 3</li>
                  </ul>
                </div>

                <p>Observações, exemplo</p>
                <a href="#">Inscrever-se</a>
              </div>
            </div>

        </section>

        <section className='sixth'>
            <h2>Equipe</h2>
            <div className="divider">
              <img src={Equipe} alt="Imagem da Equipe" />
              <p className='text'>
                Conheça a equipe do projeto "AMO - Alagoas no Mapa da OBI", liderado pelo Professor Leonardo Fernandes e composto por jovens talentosos e dedicados. Nossa equipe é formada por alunos entusiasmados em explorar a ciência da computação e programação. Com o apoio e orientação do Professor Leonardo, buscamos ampliar o acesso ao conhecimento da informática em Alagoas, incentivando o pensamento lógico e a resolução de problemas complexos. Juntos, transformamos paixão em aprendizado e estamos determinados a levar Alagoas ao destaque na Olimpíada Brasileira de Informática. Acompanhe-nos nessa jornada de sucesso!
              </p>
            </div>
          
        </section>
      </main>

      <footer>
        <div className="parceiros">
          <div className="box-text">
            <h2>Parceiros</h2>
          </div>
          <div className="logos">
            <img src={CPSoftware} alt="Logo da CPSoftware" />
            <img src={FapealSecti} alt="Logo da Fapeal Secti" />
            <img src={Ifal} alt="Logo do IFAL" />
            <img src={Fapeal} alt="Logo da Fapeal" />
            <img src={PibicJr} alt="Logo da Pibic JR" />
          </div>
        </div>

        <div className="contacte-nos">
          <div className="box-text">
            <h2>Contacte-nos</h2>
          </div>
          <div className="informations">
            <p>
              Para mais informações entre em contato com a gente e nos siga nas redes sociais.
            </p>
            <div className="midias">
              <a href="">
                <img src={Facebook} alt="Logo do Facebook" />
              </a>
              <a href="">
                <img src={Twitter} alt="Logo do Twitter" />
              </a>
              <a href="">
                <img src={Linkedin} alt="Logo do Linkedin" />
              </a>
              <a href="">
                <img src={Instagram} alt="Logo do Instagram" />
              </a>
            </div>
          </div>
        </div>

      </footer>
    </div>
  )
}