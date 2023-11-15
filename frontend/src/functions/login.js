// Importa a API, axios do pacote "axios" e Navigate de "react-router-dom"
// Define a função assíncrona "login" que aceita username e password como argumentos.
// A função "login" faz uma requisição POST para 'http://localhost:3000/users/login' com username e password.
// Se a requisição for sucedida, armazena o token de resposta em localStorage e redireciona o usuário para '/mapa'.
// Se ocorrer um erro, exibe um alerta com a mensagem de erro.

import { api } from "./api"
import axios from "axios";
import { Navigate } from "react-router-dom";

export async function login(e, username, password){
    e.preventDefault()
    let message = "Login realizado com sucesso"

    try {
        const data = await axios.post('http://localhost:3000/users/login', {
            username: username,
            password: password
        })
            // data: { username, password }
        .then(response => {return response.data});

        localStorage.setItem('token', JSON.stringify(data))
        localStorage.setItem('userValues', JSON.stringify([]))
        window.location.href = '/mapa'
    }catch(err){
        // message = err.response.data.message;
        message = err;
        alert(err.response.data.message)
    }

}