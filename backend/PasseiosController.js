const { connect } = require('./PasseiosRepository')
const  { ClienteModel, PetModel, PasseadorModel } = require('./PasseiosSchema')

connect()

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

ClienteModel.findByIdAndRemove(id, (error, data)=>{
  if(error){
      console.log("error in deleting yo!");
      throw error;
  } else {
      console.log("data all gone and deleted yo");
      response.status(204);

  }
});

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
  removeCliente,
  addPasseador,
  getPasseadores,

}