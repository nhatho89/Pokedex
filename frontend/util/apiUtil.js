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
  }
};

module.exports = ApiUtil;
