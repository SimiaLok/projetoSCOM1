//Este é um código JavaScript que utiliza o framework Express para criar um servidor web. 
//Este arquivo em particular está definindo as rotas para a aplicação.

const { Router } = require('express')

const PokemonController = require('../controllers/PokemonController')
const UserController = require('../controllers/UserController')

const router = Router();

router.get('/pokemons', PokemonController.index)
router.get('/pokemons/:id', PokemonController.show)
router.post('/users/login', UserController.login)
router.post('/users/verify-token', UserController.validateToken)


module.exports = router 