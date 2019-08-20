const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const servidor = express()
const controller = require('./PasseiosController')
const bcrypt = require ('bcryptjs')
const PORT = 3000

servidor.get('/', (request, response) => {
  response.send('Olá, Doguinhos!')
})

servidor.disable('etag'); //Verificar etag
servidor.use(cors())
servidor.use(bodyParser.json())

//GET de Clientes - Funcionando BACK e FRONT
servidor.get('/clientes', async (request, response) => {
  controller.getClientes()
    .then(cliente => response.send(cliente))
})

//POST de Clientes - Funcionando BACK e FRONT
servidor.post('/clientes', (request, response) => {
  
  controller.addCliente(request.body)
    .then(cliente => {
      const _id = cliente._id
      response.send(_id) 
      console.log("Cliente Cadastrado!");
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
    .then(passeio => response.send(passeio))
        .catch(error => {
      if(error.name === "CastError"){
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
  })
})

//POST de Pets dentro do cliente
servidor.post('/pet', (request, response) => {
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

//POST Passeador - Funcionando BACK e FRONT
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

//GET de Passeadores - Funcionando BACK
servidor.get('/passeadores', async (request, response) => {
  controller.getPasseadores()
    .then(passeadores => response.send(passeadores))
})

servidor.listen(PORT)
console.info(` Servidor rodando na porta ${PORT}`)