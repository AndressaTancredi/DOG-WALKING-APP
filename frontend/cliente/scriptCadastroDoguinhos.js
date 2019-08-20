const urlParams = new URLSearchParams(window.location.search);
const nomeDoCliente = urlParams.get('name');
let clienteName

//Fetch que pega o cliente no banco:
fetch(`http://localhost:3000/clientes/${nomeDoCliente}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        clienteName = data.nome
    })
    .catch((erro) => {
        console.log(erro)
})

//Fetch que cria lista de perguntas
let button = document.getElementById("botao");

button.addEventListener("click", (evento) => {
    evento.preventDefault();

    let nomeDoPet = document.getElementById('exampleInputNome').value;
    let raca = document.getElementById("exampleInputRaça1").value;
    let idade = document.getElementById("exampleInputIdade1").value;
    let tamanho = document.getElementById("exampleInputTamanho1").value;
    let sexo = document.getElementById("exampleInputSexo1").value;
    let descricao = document.getElementById("exampleFormControlTextarea1").value;


    fetch(`http://localhost:3000/clientes/adicionarpet/${clienteName}`,  {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'nome': nomeDoPet,
            'raca': raca,
            'idade': idade,
            'tamanho': tamanho,
            'sexo': sexo,
            'descricao': descricao
        })  
    }) 
    .then((response) => {
        console.log(response)
    })
    .then((data) => {
        console.log(data);
        //Posso direcionar para área de perfil do cliente : window.location.href=`./cadastroDoguinhos.html`
    })
    .catch((erro) => {
        console.log(erro)
    })
})