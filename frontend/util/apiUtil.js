var PokemonActions = require('../actions/PokemonActions.js');

var ApiUtil = {
  fetchAllPokemons: function() {
    $.ajax({
      url: "api/pokemon",
      method: "GET",
      success: function(pokemons) {
        PokemonActions.receiveAllPokemons(pokemons);
      }
    });
  },
  fetchOnePokemon: function(pokemonId) {
    console.log("calling fetchOnePokemon", pokemonId);
    $.ajax({
      url: "api/pokemon/"+pokemonId,
      method: "GET",
      success: function(pokemon) {
        console.log("fetchOnePokemon Success: ", pokemon);
        PokemonActions.receiveSinglePokemon(pokemon);
      }
    });
  },
  createPokemon: function(){
    debugger;
  }
};

module.exports = ApiUtil;
