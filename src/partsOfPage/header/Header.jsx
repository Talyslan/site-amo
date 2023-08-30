import HeaderStyles from './header.module.css';
import Logo from '../../images/Logo.png';
import IconLogin from '../../images/loginicon.png';

export function Header() {
    return (
        <header className={HeaderStyles.header}>
            <nav className={HeaderStyles.nav}>
                {/* Imagem da logo */}
                <a href="../../">
                    <img src={Logo} alt="Logo da AMO" 
                        className={HeaderStyles.img}
                    />
                </a>

                {/* Links do próprio site */}
                <ul className={HeaderStyles.ul}>
                    <li><a href="#oprojeto">O projeto</a></li>
                    <li><a href="#inscreva-se">Inscreva-se</a></li>
                    <li><a href="#equipe">Equipe</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
                
                {/* Links para a página de Login e Registro */}
                <div className={HeaderStyles.loginRegister}>
                    <a href="#">
                        <img src={IconLogin} alt="Icone de Login" />
                        Entrar
                    </a>
                    <a href="#">Criar Conta</a>
                </div>
            </nav>
        </header>
    )
}