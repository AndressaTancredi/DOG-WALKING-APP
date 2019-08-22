const urlParams1 = new URLSearchParams(window.location.search);
const nomeDoCliente = urlParams1.get('name');

fetch(`http://localhost:3000/clientes/${nomeDoCliente}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {

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
        
            let petRaca = document.createElement("p");
            petRaca.innerHTML = pet.raca;
            card.appendChild(petRaca);

            let petIdade = document.createElement("p");
            petIdade.innerHTML = pet.idade;
            card.appendChild(petIdade);

            let petTamanho = document.createElement("p");
            petTamanho.innerHTML = pet.tamanho;
            card.appendChild(petTamanho);
        
            let petSexo = document.createElement("p");
            petSexo.innerHTML = pet.sexo;
            card.appendChild(petSexo);

            let petDescricao = document.createElement("p");
            petDescricao.innerHTML = pet.descricao;
            card.appendChild(petDescricao);
        
            let tipo = document.createElement("p")
            titulo.appendChild(tipo)

            const botao = document.createElement("button");
            botao.textContent = "✖";
            botao.setAttribute("data-id", pet._id)
            card.appendChild(botao)

            botao.addEventListener("click", () => {
                const thisCard = botao.parentElement;            
                const cardPai = thisCard.parentElement;

                fetch(`http://localhost:3000/clientes/removerpet/${nomeDoCliente}`, {
                    method: 'DELETE',
                    headers:{
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "id": botao.getAttribute("data-id")
                    })
                    })
                    .then(() =>{
                        cardPai.removeChild(thisCard)
                })
                .catch((erro) =>{
                    console.log(erro)
                })
            })
        })
    })
    .catch((erro) => {
        console.log(erro)
    })