// Models do meu banco de dados
/*
    userSchema = tabela de usuários
    name: {
        type: String
    }
    name = nome do meu campo no banco de dados dentro da tabela user
    { propriedades do meu campo como tipo }
*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },

    email:{
        type: String,
        unique: true,
        required: true,
        lowercase:true,
    },

    password:{
        type: String,
        required: true,
        select: false,
    },

    cratedAt: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;