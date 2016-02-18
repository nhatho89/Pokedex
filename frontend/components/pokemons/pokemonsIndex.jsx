var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');
var apiUtil = require('../../util/apiUtil.js');
var PokemonIndexItem = require('./pokemonIndexItem.jsx');


var PokemonIndex = React.createClass({
  getInitialState: function() {
    return ({pokemons: PokemonStore.all()});
  },

  componentDidMount: function() {
    this.storeListener = PokemonStore.addListener(this._onChange);
    apiUtil.fetchAllPokemons();
  },

  componentWillUnmount: function() {
    this.storeListener.remove();
  },

  _onChange: function() {
    this.setState({pokemons: PokemonStore.all()});
  },

  pokemonIndexList: function() {
    var pokemonComponents = this.state.pokemons.map(function(pokemon) {
      return <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />;
    });

    return pokemonComponents;
  },

  render: function() {
    return (
      <div>
        {this.pokemonIndexList()}
      </div>
    );
  }

});

module.exports = PokemonIndex;
