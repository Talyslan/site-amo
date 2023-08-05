import './css/Reset.css';
import './css/App.css';
import Logo from './images/Logo.png';
import Amo from './images/amo.png';

export function App() {
  return (
    <div>
      <header>
        <nav>
          <a href="#">
            <img src={Logo} alt="Logo da AMO" />
          </a>
          <div className='navegation-bar'>
            <ul>
              <li><a href="#">O projeto</a></li>
              <li><a href="#">Inscreva-se</a></li>
              <li><a href="#">Equipe</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
            <a href="#">Login</a>
          </div>
        </nav>
      </header>

      <main>
        <h1>
          Pronto para <br />
          arrasar na <br />
          Olimpíada <br />
          Brasileira de <br />
          Informática? <br />
        </h1>

        <div className="right-side">
          <img src={Amo} alt="Logo AMO" />
          <h2>Alagoas no Mapa da OBI</h2>
        </div>
      </main>
    </div>
  )
}