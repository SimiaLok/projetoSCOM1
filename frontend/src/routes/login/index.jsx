// Este é um componente React chamado "Login" que contém a lógica para uma página de login do projeto. 
// Importações: O código começa importando os estilos css, uma imagem de logo e uma função de login do projeto.
// Renderização: O componente renderiza um formulário de login dentro de uma seção. Com diversos componentes.
// O mais importante: um botão de envio que, chama a função "login" com o nome de usuário e a senha como argumentos.

import './styles.scss'
import logo from '../../assets/logo.png'

import { login } from '../../functions/login'
import { useState } from 'react'

export function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return(
        <section id='login_page'>
            <span className="cover" />
            <div className="form-area">
                <form onSubmit={(e) => login(e, username, password)}>
                    <img className='logo' src={logo} alt="logo do pokémon" />
                    <h2>Faça Login na Sua Conta</h2>
                    <p>Bem vindo novamente. faça login para continuar a sua jornada!</p>
                
                    <div className="social_login_container">
                        <div className='social_login'>
                            <img src='https://imagepng.org/google-icone-icon/google-icon/' alt={`icone de login do google`} />
                            <p>Google</p>
                        </div>
                        <div className='social_login'>
                            <img src='https://www.gov.br/mre/pt-br/delbrasupa/facebook-logo-blue-circle-large-transparent-png.png' alt={`icone de login do facebook`} />
                            <p>Facebook</p>
                        </div>
                    </div>

                    <div className="email_login">
                        <p>ou continue com email e senha</p>
                        <input placeholder='Usuário' type="text" name="nome de usuário" onChange={(e) => setUsername(e.target.value)} value={username}/>
                        <input placeholder='Senha' type="password" name="senha" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        <p className="remember">
                            <div>
                            <input type="checkbox" id="remeber" name="remeber" />
                            <label for="remeber">Lembrar usuário e senha</label>
                            </div>
                            <a href="/">Esqueceu a senha?</a>
                        </p>
                        <button type='submit'>Log In</button>
                    </div>
                </form>
            </div>
        </section>
    )
}