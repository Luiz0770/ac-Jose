const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://userAC:matheus2207@fiaptecnico.ekwgy.mongodb.net/betta')
}

module.exports = conexao
