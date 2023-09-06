import logoAmo from '../../../public/logoNav.png';
import IconLogin from '../../../public/login.png';
import HeaderStyles from './header.module.css';

export function Header() {
    return (
        <header className={HeaderStyles.header}>
            <nav className={HeaderStyles.nav}>
                <div className={HeaderStyles.logoBar}>
                    {/* Imagem da logo */}
                    <a href="#">
                        <img src={logoAmo} alt="Logo da AMO"
                            className={HeaderStyles.img}
                        />
                    </a>
                    {/* Links do próprio site */}
                    <ul className={HeaderStyles.ul}>
                        <li><a href="#treinamentos">Treinamento</a></li>
                        <li><a href="#noticias">Notícias</a></li>
                        <li><a href="#projeto">O Projeto</a></li>
                    </ul>
                    
                </div>
                {/* Links para a página de Login e Registro */}
                <div className={HeaderStyles.loginRegister}>
                    <a href="#">
                        <img src={IconLogin} alt="Icone de Login" />
                        Entrar
                    </a>
                    <a href="#">Cadastrar</a>
                </div>
            </nav>
        </header>
    );
}