import LoginStyles from './login.module.css';

import { Header } from '../../partsOfPage/header/Header';

export function Login() {
    return (
        <>
        <Header />
        <div className={LoginStyles.back}>
            <div className={LoginStyles.effects}>
                <img src="../../../public/login/background/effects/circle.png" alt="Circle" />
                <img src="../../../public/login/background/effects/log.png" alt="Log" />
                <img src="../../../public/login/background/effects/plus.png" alt="Plus" />
                <img src="../../../public/login/background/effects/tag.png" alt="Tag" />
            </div>

            <div className={LoginStyles.shapes}>
                <img src="../../../public/login/background/shapes/blueLight.png" alt="Shape azul claro" />
                <img src="../../../public/login/background/shapes/blueDark.png" alt="Shape azul escuro" />
                <img src="../../../public/login/background/shapes/purple.png" alt="Shape roxa" />
            </div>
        </div>

        <main className={LoginStyles.main}>
            <img src="../../../public/login/illustration.png" alt="Illustration" />

            <div className={LoginStyles.loginArea}>
                <form action="/login">
                    <h1>Login</h1>

                    <div>
                        <label htmlFor="email">
                            <span>Email</span>
                            <input type="email" placeholder='Escreva seu Email' id='email' />
                        </label>
                        <label htmlFor="senha">
                            <span>Senha</span>
                            <input type="password" placeholder='Escreva sua Senha' id='senha' />
                            <img src="../../../public/login/password/invisible.png" alt="" />
                        </label>
                        <label htmlFor="repitaSenha">
                            <span>Repita a Senha</span>
                            <input type="password" placeholder='Repita sua Senha' id='repitaSenha' />
                            <img src="../../../public/login/password/invisible.png" alt="" />
                        </label>
                    </div>

                    <button type='submit'>Entrar</button>
                </form>
            </div>
        </main>
        </>
    );
}