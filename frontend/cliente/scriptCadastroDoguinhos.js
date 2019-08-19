// Validação cadastro
    


//Post cadastro clientes:
fetch(`http://localhost:8080/salas/adicionarperguntas/${salaName}`,  {
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
