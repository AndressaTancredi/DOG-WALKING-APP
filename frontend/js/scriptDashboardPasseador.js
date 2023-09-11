const urlParams1 = new URLSearchParams(window.location.search);
const nomeDoPasseador = urlParams1.get('name');

//GET cadastro clientes:
fetch(`http://localhost:3000/passeadores`)
    .then((response) => {

        return response.json();
        
    })
    .then((data) => {
        
        let nome = document.querySelector('h5')
        nome.innerHTML = nomeDoPasseador;

    })
    .catch((erro) => {
        console.log(erro)
    })