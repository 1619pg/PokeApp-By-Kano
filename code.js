console.log("Is this working")
//Identify Div
const pokemonDiv = document.querySelector(".pokemon")
//create a Base
const POKE_URL ="https:pokeapi.co/api/v2/pokemon/"
//console.log(pokemonDiv)
//console.log(POKE_URL + "ditto")
const printPokemonName = function(name){
    let h2 = document.createElement("h2")
    h2.innerHTML = name
    pokemonDiv.append(h2)
}

const displayPokemonPicture = function (picture){
    let img= document.createElement("img")
    img.src= picture
    pokemonDiv.append(img)
}
//start with fetch
const fetchPokemon =function(name){
fetch(POKE_URL + name)
// get data back and translate to usable to JSON object
    .then(response => response.json())
    .then(data=>{
    console.log(data)
    printPokemonName(data.name)
    displayPokemonPicture(data.sprites.front_default)
    
    })
}
fetchPokemon("ditto")
fetchPokemon("pikachu")
fetchPokemon("snorlax")

const fetch100Pokemon =function(){
    let pokemonURL = POKE_URL+"?limit=100"
    fetch(pokemonURL)
    .then(response =>response.json())
    .then(data=>{
        // console.log(data)
        data.results.forEach(result => fetchPokemon(result.name))
    })
}
fetch100Pokemon()