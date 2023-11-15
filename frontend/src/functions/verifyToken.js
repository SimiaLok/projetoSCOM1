// Importa a API
// Define a função assíncrona "verifyToken".
// "verifyToken" é uma função que tenta verificar um token armazenado em localStorage fazendo uma requisição POST 
// Se o token não existir ou a verificação falhar, o usuário é redirecionado para '/'.

import { api } from "./api"

export async function verifyToken(){
    const storedToken = JSON.parse(localStorage.getItem('token'))
    if(!storedToken){
        window.location.href = '/'
    }
    
    try {
        const data = await api.post('/users/verify-token', {
            token: storedToken
        })
        .then(response => {return response.data});

    } catch(e) {
        alert(err.response.data.message)
        window.location.href = '/'
    }
}