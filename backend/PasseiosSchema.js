const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PetSchema = new Schema({ 
  nome: { type: String },
  raca: { type: String},
  idade: { type: Number},
  tamanho: { type: String},
  sexo: { type: String},
  descricao: { type: String},
});

const ClienteSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  cep: { type: Number, required: true },
  estado: { type: String, required: true },
  cidade: { type: String, required: true },
  bairro: { type: String, required: true },
  rua: { type: String, required: true },
  numero: { type: Number, required: true },
  complemento: { type: String, required: true },
  pets: [PetSchema]
});

const PasseadorSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  cep: { type: Number, required: true },
  estado: { type: String, required: true },
  cidade: { type: String, required: true },
  bairro: { type: String, required: true },
  rua: { type: String, required: true },
  numero: { type: Number, required: true },
  complemento: { type: String, required: true },
})

const ClienteModel = mongoose.model("clientes", ClienteSchema);
const PetModel = mongoose.model("pets", PetSchema);
const PasseadorSchema = mongoose.model("passeadores", PasseadorSchema);

module.exports = {ClienteModel, PetModel, PasseadorSchema }