let pokeId="3";
let url = 'https://pokeapi.co/api/v2/pokemon/'+pokeId;

function buscar(){
    fetch(url, {
        method: 'GET',
    }).then(response => console.log(response.json()))
        .catch(error=>console.log('Error:', error));
}
