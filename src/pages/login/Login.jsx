import LoginStyles from './login.module.css';

import { Header } from '../../partsOfPage/header/Header';

export function Login() {
    return (
        <>
        <Header />
        <h1>Olá tela de login</h1>

        <div className={LoginStyles.back}>
            <div className={LoginStyles.effects}>
                <img src="../../../public/login/background" alt="" />
                <img src="../../../public/login/background" alt="" />
                <img src="../../../public/login/background" alt="" />
                <img src="../../../public/login/background" alt="" />
            </div>

            <div className={LoginStyles.shapes}>
                <img src="../../../public/login/background" alt="" />
                <img src="../../../public/login/background" alt="" />
                <img src="../../../public/login/background" alt="" />
            </div>
        </div>

        <main className={LoginStyles.main}>
            <img src="../../../public/login/illustration.png" alt="Illustration" />

            <div className={LoginStyles.loginArea}>
                <h1>Login</h1>
                 
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
        </main>
        </>
    );
}