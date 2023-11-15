// Importa a API criada anteriormente
// Define a função assíncrona catchPokemon que aceita name como argumento.
// Essa função que "captura" o pokemon. recuperando os pokemons que o usuário ja pegou no "localstorage".
// verifica se o usuário já capturou 6 Pokémons e faz uma requisição para obter dados sobre todos os Pokémons
// Encontra o Pokémon que o usuário está tentando capturar, adiciona esse Pokémon à lista de Pokémons capturados 
// Por fim, armazena a lista atualizada em localStorage.

import { api } from "./api"

export async function catchPokemon(name){
    const result = JSON.parse(localStorage.getItem('userValues'))

    if(result.length > 5){
        alert('Você atingiu o numero máximo de pokemons')
        return
    }

    const data = await api.get('/pokemons')
    .then(({ data }) => {
        return data;
    })

    const findedValue = data.find((value) => value.name === name)
    result.push(findedValue)

    localStorage.setItem('userValues', JSON.stringify(result))
    alert(`Você capturou um ${findedValue.name}`)
}