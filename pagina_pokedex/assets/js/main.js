const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecord = 151
const limit = 10
let offset = 0;

function loadPokemonItens(offset, limit) {
  function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#00${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    
    <div class="detail">
    <ol class="types">
    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join(' ')}
    </ol>
    
    <img src="${pokemon.photo}"
    alt="${pokemon.name}">
    </div>
    </li>
    `
  }
  
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join(' ')
    pokemonList.innerHTML += newHtml
  })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
  offset += limit
  const qtdRecordNextPage = offset + limit

  if (qtdRecordNextPage >= maxRecord){
    const newLimit = maxRecord - offset
    loadPokemonItens(offset, newLimit)

    loadMoreButton.parentElement.removeChild(loadMoreButton)
  }else{
    loadPokemonItens(offset, limit)
  }  
})