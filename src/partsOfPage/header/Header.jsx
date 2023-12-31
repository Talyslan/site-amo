import logoAmo from '../../../public/logoNav.png';
import IconLogin from '../../../public/login.png';
import HeaderStyles from './header.module.css';

export function Header() {
    const openNav = () => {
        // document.getElementById("nav").style.width = "100%";
        document.getElementById("nav").style.height = "100%";
    }
    const closeNav = () => {
        // document.getElementById("nav").style.width = "0%";
        document.getElementById("nav").style.height = "0%";
    }

    return (
        <header className={HeaderStyles.header}>
            {/* Imagem da logo */}
            <a href="/">
                <img src={logoAmo} alt="Logo da AMO"
                    className={HeaderStyles.img}
                />
            </a>
            <nav className={HeaderStyles.nav} id="nav">
                <span className={HeaderStyles.closebtn} onClick={closeNav}>&times;</span>

                <div className={HeaderStyles.logoBar}>

                    {/* Links do próprio site */}
                    <ul className={HeaderStyles.ul}>
                        <li><a href="#treinamentos">Treinamento</a></li>
                        <li><a href="#noticias">Notícias</a></li>
                        <li><a href="#projeto">O Projeto</a></li>
                    </ul>
                    
                </div>
                {/* Links para a página de Login e Registro */}
                <div className={HeaderStyles.loginRegister}>
                    <a href="/login">
                        <img src={IconLogin} alt="Icone de Login" />
                        Entrar
                    </a>
                    <a href="/register">Cadastrar</a>
                </div>
            </nav>

            <span className={HeaderStyles.openNav} onClick={openNav}>&#9776;</span>
        </header>
    );
}