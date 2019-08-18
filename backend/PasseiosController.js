const { connect } = require('./PasseiosRepository')
const  {ClienteModel, PetModel, PasseadorModel } = require('./PasseiosSchema')

connect() //Conecta no mongoDB

const getClientes = () => {
  return ClientesModel.find((error, cliente) => {
    return cliente
  })
}

const addClientes = (cliente) => {
  const novoCliente = new ClienteModel(cliente)
  return novoCliente.save()
}


  module.exports = {
    getClientes,
    addClientes
  }