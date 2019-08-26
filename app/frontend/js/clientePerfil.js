const urlParams1 = new URLSearchParams(window.location.search);
const nomeDoCliente = urlParams1.get('name');

const app = document.getElementById('root');
const passeio = document.createElement('div');
passeio.setAttribute('class', 'passeios');
app.appendChild(passeio);

//Cria card do Pet
fetch(`http://localhost:3000/clientes/${nomeDoCliente}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let nome = document.querySelector('h5')
        nome.innerHTML = nomeDoCliente;

        const pets = document.querySelector('.pets');

        data.pet.forEach(pet =>{

            let nome = document.querySelector('h5')
            nome.innerHTML = nomeDoCliente;

            let card = document.createElement("div");
            card.setAttribute("class", "card");
            pets.appendChild(card);
        
            let titulo = document.createElement("h4");
            titulo.textContent = pet.nome;
            card.appendChild(titulo);

            const img = document.createElement('img');
            img.setAttribute("src", "../img/dogSozinho.jpg");
            card.appendChild(img);
        
            let petRaca = document.createElement("p");
            petRaca.innerHTML = "Raça: " + pet.raca;
            card.appendChild(petRaca);

            let petIdade = document.createElement("p");
            petIdade.innerHTML = "Idade: " + pet.idade + " ano(s)";
            card.appendChild(petIdade);

            let petTamanho = document.createElement("p");
            petTamanho.innerHTML = "Tamanho: " + pet.tamanho;
            card.appendChild(petTamanho);
        
            let petSexo = document.createElement("p");
            petSexo.innerHTML = "Sexo: " + pet.sexo;
            card.appendChild(petSexo);

            let petDescricao = document.createElement("p");
            petDescricao.innerHTML = "Descrição: " + pet.descricao;
            card.appendChild(petDescricao);
        
            let tipo = document.createElement("p")
            titulo.appendChild(tipo)
        })
    })
    .catch((erro) => {
        console.log(erro)
    })

//GET passeadores
const app1 = document.getElementById('root');
const passeio1 = document.createElement('div');
passeio.setAttribute('class', 'passeios');
app1.appendChild(passeio1);

fetch(`http://localhost:3000/passeadores`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        const passeadores = document.querySelector('.passeadores');
        data.forEach(passeador =>{

            let col = document.createElement("div");
            col.setAttribute("class", "col-sm-12");
            passeadores.appendChild(col);

            let card = document.createElement("div");
            card.setAttribute("class", "card");
            col.appendChild(card);

            const img = document.createElement('img');
            img.setAttribute("src", "../img/dogAcompanhado.jpg");
            card.appendChild(img);

            let titulo = document.createElement("h4");
            titulo.textContent = passeador.nome;
            card.appendChild(titulo);

            let cidade = document.createElement("p");
            cidade.textContent = passeador.cidade + " / " + passeador.estado
            card.appendChild(cidade);
            
            let bairro = document.createElement("p");
            bairro.textContent = "Bairro: " + passeador.bairro;
            card.appendChild(bairro);

            let petDescricao = document.createElement("p");
            petDescricao.innerHTML = "Descrição: " + passeador.descricao;
            card.appendChild(petDescricao);

            let email = document.createElement("p");
            email.textContent = "E-mail: " + passeador.email;
            card.appendChild(email);
        })
    })
    .catch((erro) => {
        console.log(erro)
    })