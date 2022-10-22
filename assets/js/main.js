
// API: https://pokeapi.co/api/v2/pokemon?offset=10&limit=10

const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


function convertPokemonToHtml(pokemon){
  return `
        <li class="pokemon">
          <span class="number">#001</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">
          <ol class="types">
            <li class="type">grass</li>
            <li class="type">posion</li>
          </ol>
          <img src="" alt="${pokemon.name}">
          </div>
        </li> 
  `
}

const list = document.getElementById('list-pokemons');
fetch(url, {
  headers: {
    'content-type': 'application/json'
  }
}).then(response => 
  response.json()
).then(jsonBody => 
  jsonBody.results
).then((pokemonList) => {
  for (let i = 0; i < pokemonList.length; i++) {
    const pokemon = convertPokemonToHtml(pokemonList[i]);

    list.innerHTML += pokemon
    console.log(convertPokemonToHtml(pokemon))
  }
}).catch(error => {
  console.log(error);
});





