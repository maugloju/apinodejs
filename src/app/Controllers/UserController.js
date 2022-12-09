const User = require("../../models/User");

class UserController {
    index(req, res){
        return true;
    }

    async listar(req, res){
        const user = await User.findAll();
        return res.status(200).json(user);
    };  
    
    async ver(req, res){
        const { id } = req.params;
        const user = await User.findAll({
            where: {
                id: id
            }
        });
        return res.status(200).json(user);
    }; 
    
    async exclui(req, res){
        const { id } = req.params;
        const user = await User.destroy({
            where: {
                id: id
            }
        });
        return res.status(200).json(user);
    };    

    async atualiza(req, res){
        const { id } = req.params;
        const user = await User.update(
            req.body,
            {
            where: {
                id: id
            }
        });
        return res.status(200).json(user);
    };   

    async criar(req, res){
        await User.create(req.body).then(() => {
            return res.json({
                "erro": false,
                "message": "Sucesso"
            })
        }).catch(() => {
            return res.status(400).json({
                "erro": true,
                "message": "Erro"
            })
        });
    }; 
}

module.exports = new UserController();