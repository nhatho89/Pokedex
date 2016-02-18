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
    $.ajax({
      url: "api/pokemon/"+pokemonId,
      method: "GET",
      success: function(pokemon) {
        PokemonActions.receiveSinglePokemon(pokemon);
      }
    });
  }
};

module.exports = ApiUtil;
