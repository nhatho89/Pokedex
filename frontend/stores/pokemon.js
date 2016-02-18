var Store = require('flux/utils').Store;
var React = require('react');
var PokeDispatcher = require('../dispatcher/Dispatcher.js');
var PokemonConstants = require('../constants/PokemonConstants.js');

var _pokemons = {};

var PokemonStore = new Store(PokeDispatcher);

var resetPokemons = function(pokemons) {
  _pokemons = {};
  pokemons.forEach(function(pokemon) {
    _pokemons[pokemon.id] = pokemon;
  });
  PokemonStore.__emitChange();
};

PokemonStore.all = function() {
  var pokemons = [];
  Object.keys(_pokemons).forEach(function(key){
    pokemons.push(_pokemons[key]);
  });
  return pokemons;
};

PokemonStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
      resetPokemons(payload.pokemons);
      break;
  }
};



module.exports = PokemonStore;
