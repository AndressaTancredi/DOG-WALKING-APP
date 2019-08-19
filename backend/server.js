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
  controller.addCliente(request.body)
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

//GET de Clientes por Nome
servidor.get('/clientes/:nomeDoCliente',(request, response) => {
  controller.getByName(request.params.nomeDoCliente)
    .then(sala => response.send(sala))
        .catch(error => {
      if(error.name === "CastError"){
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
    })

//POST de Pets
servidor.post('/clientes/adicionarpet/:clienteName', (request, response) => {
  const clienteName = request.params.clienteName
  controller.addPet(clienteName, request.body)
  .then(cliente => {
    const nomeDoCliente = cliente.nomeDoCliente
    response.send({ nomeDoCliente })
  })
  .catch(error => {
    if(error.name === "ValidationError"){
      response.sendStatus(400)
    } else {
      console.log(error)
      response.sendStatus(500)
    }
  })
})

//GET de Pets
servidor.get('/pets', async (request, response) => {
  controller.getPets()
    .then(pets => response.send(pets))
})

//POST Passeador
servidor.post('/passeador', (request, response) => {
  console.log("Cadastro Criado!");
  controller.addPasseador(request.body)
    .then(passeio => {
      const _id = passeio._id
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