var mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://localhost/aliuyan',{
                useNewUrlParser : true,
                useUnifiedTopology:true,
                useFindAndModify: false,
                useCreateIndex: true
            })

var Schema = mongoose.Schema

var liuyanSchema = new Schema({
    nickname:{
        type: String,
        require: true
    },
    message:{
        type: String,
        require: true
    },
    send_time:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Liuyan', liuyanSchema)
