const PORT = 3000
const fs = require('fs')
var express = require('express')
var app = express()
var SpyFacade = require('./spy')

const LOCAL_PATH = {
    BASIC: './data/basic-local.json'
}

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/basic-list', function (req, res) {
    fs.readFile(LOCAL_PATH.BASIC, 'UTF-8', function (err, data) {
        if (err) throw err

        res.send(data)
    })
})

app.get('/basic-list-spy', function (req, res) {
    SpyFacade.detectCsdn().then(text => res.send(text)).catch(err => res.send(`error:${err}`))
})

app.get('/basic-detail/:id', function (req, res) {
    let id = req.params.id
    res.send({
        id: id,
        content: `hi detail from ${id}`
    })
})

app.listen(PORT)
console.log(`express is listening the port: ${PORT}`)