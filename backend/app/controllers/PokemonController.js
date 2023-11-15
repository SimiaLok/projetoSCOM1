// Importação: O código começa importando o "PokemonRepository"
// O pokemoncontroller puxa três métodos index (recupera todos os pokémons do repositório)
// "show" é um método assíncrono recupera um único pokémon do repositório usando o id fornecido. 
// Se o pokémon não for encontrado, ele retorna uma resposta com o status 404 e uma mensagem de erro.
// "store": é um método placeholder para uma função que "armazenará" um novo pokémon

const PokemonRepository = require('../repositories/PokemonRepository')

class PokemonController {
    async index(req, res){
        const pokemons = await PokemonRepository.findAll()

        res.json(pokemons)
    }
 
    async show(req, res){
        const { id } = req.params

        const pokemon = await PokemonRepository.findById(id)

        if(!pokemon){
            return res.status(404).json({ erro: 'pokemon não encontrado' })
        }

        res.json(pokemon)
    }

    store(req, res){

    }
}

module.exports = new PokemonController();