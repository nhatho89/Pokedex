var PokeDispatcher = require('../dispatcher/Dispatcher.js');
var PokemonConstants = require('../constants/PokemonConstants.js');

var PokemonActions = {
  receiveAllPokemons: function(pokemons) {
    PokeDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },
  receiveSinglePokemon: function(pokemon) {
    PokeDispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon
    });
  }
};

module.exports = PokemonActions;
