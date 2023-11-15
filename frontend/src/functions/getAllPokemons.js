// Importa a API
// Define a função assíncrona getAllPokemons
// "getAllPokemons" é uma função que tenta fazer uma requisição GET para '/pokemons' 
// E retorna os dados da resposta. Se ocorrer um erro, exibe um alerta com a mensagem de erro.

import { api } from "./api"

export async function getAllPokemons(){

    try {
        api.get('/pokemons')
        .then(({ data }) => {
            return data
            console.log(data)
        })
    } catch(e){
        alert(e)
    }
}