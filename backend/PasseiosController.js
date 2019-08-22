const { connect } = require('./PasseiosRepository')
const  { ClienteModel, PetModel, PasseadorModel } = require('./PasseiosSchema')

connect() //Conecta no mongoDB

const getClientes = () => {
  return ClienteModel.find((error, cliente) => {
    return cliente
  })
}

const addCliente = (cliente) => {
  const novoCliente = new ClienteModel(cliente)
  return novoCliente.save()
}

const getByName = (nomeDoCliente) => {
  return ClienteModel.findOne({nome: nomeDoCliente })
  }

const addPet = async (clienteName, pet) => {
  const passeio = await getByName(clienteName)
  const novoPet = new PetModel(pet)
  passeio.pet.push(novoPet)
  return passeio.save()
}

const removePet = async (clienteName, _id) => {
  const passeio = await getByName(clienteName)
  PetModel.findByIdAndDelete(_id)
  passeio.pet.remove(_id)
  return passeio.save()

}

/* const remove = (id) => {
  return PetModel.findByIdAndDelete(id)
} */

const addPasseador = (passeador) => {
  const novoPasseador = new PasseadorModel(passeador)
  return novoPasseador.save()
}

const getPasseadores = () => {
  return PasseadorModel.find((error, passeadores) => {
    return passeadores
  })
}

module.exports = {
  getClientes,
  addCliente,
  getByName,
  addPet,
  removePet,
  addPasseador,
  getPasseadores
}