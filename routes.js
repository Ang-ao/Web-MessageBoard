var express = require('express')
var Liuyan = require('./models/liuyan')

var router = express.Router()

router.get('/', function(req, res) { // 默认页面
    console.log('get /')

    Liuyan.find ({}, function (err, data) {
        if (!err) {
            res.render('index.html', {
                liuyan: data
            })
        }
    })
})

router.get('/send', function(req, res) { // 发送页面
    console.log('get /send')
    res.render('send.html')

})

router.post('/send', function(req, res) { //处理发送请求
    console.log('post /send')
    var body = req.body

    new Liuyan(body).save(function(err, liuyan) {
        console.log(liuyan)
        if(err){
            return res.status(500).json({
                err_code: 500,
                message: 'Internal Error.'
            })
        }
        // 发送成功
        res.status(200).json({
            err_code: 0,
            message: 'OK.'
        })
    })
})


module.exports = router
