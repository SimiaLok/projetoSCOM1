// Este código está criando uma lista contendo um único objeto "UserModel" com as informações de id, usuário e senha
// No caso já temos um usuário padrão criado.


const { uuid } = require('uuidv4')

const UserModel = require('../models/UserModel');

module.exports = [
    new UserModel(uuid(), "admin", "1234"),
]