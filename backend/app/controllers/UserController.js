// Importação: O código começa importando o "UserRepository"
// Dentro da calsse "usercontroller" temos o login que é um método para autenticar o usuário 
// o "validatetoken" é um método para validar o token de um usuário

const UserRepository = require('../repositories/UserRepository')

class UserController {
    async login(req, res){
        try {

            const { username, password } = req.body
            
            const user = await UserRepository.findByUserName(username)
            
            if(!user){
                return res.status(404).json({message: 'Usuário não encontrado'})
            }
            
            if(user.password != password){
                return res.status(404).json({message: 'Senha incorreta'})
            }

            res.status(200).json(user.token) 
        } catch(err){
            res.status(400).json({ message: 'Erro ao logar' })
        }
    }

    async validateToken(req, res){
        const { token } = req.body

        if(!token){
            res.status(404).json({ message: 'Token Inválido' })
        }

        const user = await UserRepository.getUserByToken(token)

        if(!user){
            res.status(404).json({ message: 'Token Inválido' })
        }

        res.status(200).json(user)
    }
}

module.exports = new UserController();