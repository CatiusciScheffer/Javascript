const limit = 10
const offset = 0

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
    .then((response) => ()
    .then((responseJason) => console.log(response))
    .catch((error) => console.error(error)
    .finally(()=>console.log('Requisição Concluída'))
