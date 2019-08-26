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

// Validação cadastro
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

    /* Login
    Email regras:
    1- Não pode ser vazio
    2- Não pode começar com @
    Senha regras:
    1- Não pode ser vazio nem menor que 6 digitos */

    //Post cadastro clientes:
    let nome = document.getElementById("exampleInputNome").value;
    let email2 = document.getElementById("exampleInputEmail1").value;
    let senha2 = document.getElementById("exampleInputPassword1").value;
    let cep = document.getElementById("cep").value; 
    let estado = document.getElementById("estado").value; 
    let cidade = document.getElementById("cidade").value; 
    let bairro = document.getElementById("bairro").value; 
    let endereco = document.getElementById("endereco").value; 
    let numero = document.getElementById("num").value; 
    let complemento = document.getElementById("comp").value; 

    fetch(`http://localhost:3000/clientes`,  {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'nome': nome,
                'email': email2,
                'senha': senha2,
                'cep': cep,
                'estado': estado,
                'cidade': cidade,
                'bairro': bairro,
                'rua': endereco,
                'numero': numero,
                'complemento': complemento
            })  
        }) 
        .then((response) => {
            console.log(response)
        })
        .then((data) => {
            console.log(data);
            window.location.href=`cadastroDoguinhos.html?name=${nome}`
        })
        .catch((erro) => {
            console.log(erro)
        })
})