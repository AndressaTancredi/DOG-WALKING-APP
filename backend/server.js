const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const servidor = express()
const controller = require('./PasseiosController')
const PORT = 3000

servidor.get('/', (request, response) => {
  response.send('Olá, Doguinhos!')
})

servidor.disable('etag');
servidor.use(cors())
servidor.use(bodyParser.json())

//GET clientes
servidor.get('/clientes', async (request, response) => {
  controller.getClientes()
    .then(cliente => response.send(cliente))
})

//POST clientes
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

//GET clientes por nome
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

//POST pets dentro de clientes
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

//DELETE clientes
servidor.delete('/clientes/:id', (request, response) => {
  controller.removeCliente(request.params.id)
  .then(pet => {
    
    if(pet === null || pet === undefined){
      response.sendStatus(404) 
    } else {
      response.sendStatus(204)
    }
  })
  .catch(error => {
    console.log(error)
    if(error.name === "CastError"){
      response.sendStatus(400) 
    } else {
      response.sendStatus(500)
    } 
  })
})

//GET passeadores
servidor.get('/passeadores', async (request, response) => {
  controller.getPasseadores()
    .then(passeadores => response.send(passeadores))
})

//POST passeadores
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

//DELETE passeadorees
servidor.delete('/passeadores/:id', (request, response) => {
  controller.removePasseador(request.params.id)
  .then(passeador => {
    
    if(passeador === null || passeador === undefined){
      response.sendStatus(404) 
    } else {
      response.sendStatus(204)
    }
  })
  .catch(error => {
    console.log(error)
    if(error.name === "CastError"){
      response.sendStatus(400) 
    } else {
      response.sendStatus(500)
    } 
  })
})

servidor.listen(PORT)
console.info(`Servidor rodando na porta ${PORT}`)