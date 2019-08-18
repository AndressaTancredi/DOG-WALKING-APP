const express = require('express')
const cors = require('cors')

servidor.use(cors())

servidor.get('/', (request, response) => {
  response.send('Olá, Doguinhos!')
})

const bodyParser = require('body-parser')
const servidor = express()
const controller = require('./PasseiosController')
const PORT = 3000

//Verificar etag
servidor.disable('etag');

servidor.use(cors())
servidor.use(bodyParser.json())

//Codar enpoint´s:


servidor.listen(PORT)
console.info(` Servidor rodando na porta ${PORT}`)