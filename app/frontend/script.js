const cep = document.getElementById("cep");

//Get CEP
cep.addEventListener("focusout", () =>{

    console.log("FOCUS OUT")

    let cepVal = cep.value

    fetch(`https://viacep.com.br/ws/${cepVal}/json`)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        console.log(data)
        console.log(data.cep)
        document.getElementById("estado").value = data.uf;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("endereco").value = data.logradouro;
    })
    .catch((erro)=>{
        console.log(erro)
    })
})

/* Validação cadastro
Email regras:
1- Não pode ser vazio
2- Colocar foco na caixa de email
3- Não pode começar com @

Senha regras:
1- Não pode ser vazio nem menor que 6 digitos */

var mensagemEmail = document.querySelector('#emailHelp');
var mensagemSenha= document.querySelector('#senhalHelp');
var botao = document.querySelector('.btn');

botao.addEventListener('click',function(evento){
    evento.preventDefault();

    var email = document.querySelector('#exampleInputEmail1')
    var senha = document.querySelector('#exampleInputPassword1')

    if(email.value =="" || email.value.length == 0){
        mensagemEmail.textContent = 'Digite um email válido'
        email.focus() 
        return
    } else if
        (email.value.indexOf('@')<=0 || email.value.indexOf('@')>=email.value.length-1){
            mensagemEmail.textContent = 'O email informado é inválido'
            return
    } else if(senha.value =="" || senha.value.length < 6){
        mensagemSenha.textContent = 'A senha informada é inválida'
        return
    }
    mensagemSenha.textContent = 'O email '+ email.value +' foi cadastrado com sucesso!'
    event.defaultPrevented();

//Post cadastro clientes:
fetch(`http://localhost:3000/salas/adicionarperguntas/${salaName}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'nome': nome,
            'perguntas': pergunta,
        })  
    }) 
    .then((response) => {
        console.log(nome,pergunta);
        console.log(response)
    })
    .then((data) => {
        console.log(data);
        window.location.href=`./cadastroDoguinhos.html`
    })
    .catch((erro) => {
        console.log(erro)
    })
})