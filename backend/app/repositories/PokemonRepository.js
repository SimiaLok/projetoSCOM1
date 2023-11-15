// Este código define uma classe "PokemonRepository" e cria uma instância da classe para ser usada eno projeto
// A classe "PokemonRepository" é um repositório que fornece métodos para acessar os dados dos Pokémons.

const pokemons = require('../db/pokemons')

class PokemonRepository {
    findAll(){
        return new Promise((resolve, reject) => {
            resolve(pokemons)
        })
    }

    findById(id){
        return new Promise((resolve, reject) => {
            resolve(pokemons.find((pokemon) => pokemon.id === id))
        })
    }
}

module.exports = new PokemonRepository()