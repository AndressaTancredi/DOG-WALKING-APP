const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const servidor = express()
const controller = require('./PasseiosController')
const PORT = 3000

servidor.use(cors())

servidor.get('/', (request, response) => {
  response.send('Olá, Doguinhos!')
})

servidor.disable('etag'); //Verificar etag
servidor.use(cors())
servidor.use(bodyParser.json())

//GET de Clientes
servidor.get('/clientes', async (request, response) => {
  controller.getClientes()
    .then(cliente => response.send(cliente))
})

//POST de Clientes
servidor.post('/clientes', (request, response) => {
  console.log("Cliente Cadastrado!");
  controller.addClientes(request.body)
    .then(cliente => {
      const _id = cliente._id
      response.send(_id) 
    })
    .catch(error => {
      if(error.name === "ValidationError"){
        console.log(error);
      } else {
        response.sendStatus(500)
      }
    })
})



servidor.listen(PORT)
console.info(` Servidor rodando na porta ${PORT}`)