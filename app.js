var express = require('express')
var path = require('path')

var bodyParser = require('body-parser')
var router = require('./routes')

var app = express();

app.use('/public/', express.static(path.join(__dirname, 'public')))
app.use('/node_modules/', express.static(path.join(__dirname, 'node_modules')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views')) // 默认就是 views 这个目录

app.use(bodyParser.urlencoded({extended: false})) // 配置解析表单插件
app.use(bodyParser.json())

app.use(router) // 挂载路由

app.listen(5000, function(){
    console.log('Server is running on 5000...')
})
