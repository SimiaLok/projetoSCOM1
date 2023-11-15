// Este código define uma classe UserRepository  e cria uma instância da classe para ser usada no projeto
// A classe "UserRepository" é um repositório que fornece métodos para acessar os dados dos usuários.

const users = require('../db/users')
const pokemons = require('../db/pokemons')

class UserRepository {
    findByUserName(username){
        return new Promise((resolve, reject) => {
            resolve(users.find((user) => user.user_name === username))
        })
    }

    getUserByToken(token){
        return new Promise((resolve, reject) => {
            const user = users.find((user) => user.token === token)

            resolve(user)
        })
        
    }
}

module.exports = new UserRepository()