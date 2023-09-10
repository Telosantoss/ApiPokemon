// Agrega un evento de clic al botón
document.getElementById("searchButton").addEventListener("click", function () {
    // Obtiene el valor ingresado por el usuario
    const pokemonNameOrId = document.getElementById("pokemonInput").value.toLowerCase();
    
    // Construye la URL de la API con el nombre o número ingresado
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;

    // Realiza la solicitud a la API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se encontró el Pokémon');
            }
            return response.json();
        })
        .then(data => {
            let element = document.getElementById("element");
            element.innerHTML = `
                <h1>${data.name}</h1>
                <p>Número en la Pokedex: ${data.order}</p>
                <p>Altura: ${data.height} decímetros</p>
                <p>Peso: ${data.weight} hectogramos</p>
                <img src="${data.sprites.front_default}" alt="${data.name}">
            `;
        })
        .catch(err => {
            let element = document.getElementById("element");
            element.innerHTML = '<p>Pokémon no encontrado</p>';
            console.log(err);
        });
});

