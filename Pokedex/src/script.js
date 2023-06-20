async function getPokemon() {
    const response = await fetch('http://localhost:3000/pokemons-data')
    const pokemonArray = await response.json()

    const container = document.getElementById("container")

    pokemonArray.forEach((pokemon, index) => {
        const card = document.createElement("div") //aqui ele cria uma div para o card de cada pokemon
        card.classList.add("card")

        const img = document.createElement("img")
        img.src = pokemon.imgUrl

        const nameElement = document.createElement("h2")
        nameElement.textContent = firstLetter(pokemon.name)

        const dexElement = document.createElement("p")
        dexElement.textContent = pokemon.dex

        const versionElement = document.createElement("p")
        versionElement.textContent = pokemon.version

        const heightElement = document.createElement("p")
        heightElement.textContent = pokemon.height 

        const weightElement = document.createElement("p")
        weightElement.textContent = pokemon.weight 

        if(pokemonArray.length - index <= 8 && index < pokemonArray.length - 5){
            card.classList.add("first-legendary-cards");
        }

        if(pokemonArray.length - index <= 2){
            card.classList.add("second-legendary-cards");
        }

        card.appendChild(img)
        card.appendChild(nameElement)
        card.appendChild(dexElement)
        card.appendChild(versionElement)
        card.appendChild(heightElement)
        card.appendChild(weightElement)
        
        container.appendChild(card)

    })
    function firstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

getPokemon();