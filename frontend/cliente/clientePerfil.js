const urlParams1 = new URLSearchParams(window.location.search);
const nomeDoCliente = urlParams1.get('name');

fetch(`http://localhost:3000/clientes/${nomeDoCliente}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        const pets = document.querySelector('.pets');

        data.pet.forEach(pet =>{

            let card = document.createElement("div");
            card.setAttribute("class", "card");
            pets.appendChild(card);
        
            let titulo = document.createElement("h1");
            titulo.innerHTML = data.pet.nome;
            card.appendChild(titulo);
        
            let petRaca = document.createElement("p");
            petRaca.innerHTML = data.pet.raca;
            card.appendChild(petRaca);

            let petIdade = document.createElement("p");
            petIdade.innerHTML = data.pet.idade;
            card.appendChild(petIdade);

            let petTamanho = document.createElement("p");
            petTamanho.innerHTML = data.pet.tamanho;
            card.appendChild(petTamanho);
        
            let petSexo = document.createElement("p");
            petSexo.innerHTML = data.pet.sexo;
            card.appendChild(petSexo);

            let petDescricao = document.createElement("p");
            petDescricao.innerHTML = data.pet.descricao;
            card.appendChild(petDescricao);

/*          Colocar foto?
            let image = document.createElement('img');
            // image.setAttribute('src', pet.art_url);
            image.src = pet.art_url
            titulo.appendChild(image) */
        
            let tipo = document.createElement("p")
            titulo.appendChild(tipo)

            const botao = document.createElement("button");
            botao.textContent = "✖";
            botao.setAttribute("data-id", pet._id)
            card.appendChild(botao)
        })
    })
    .catch((erro) => {
        console.log(erro)
    })