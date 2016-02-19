var React = require('react');
var PokemonIndex = require('./pokemons/pokemonsIndex.jsx');
var PokemonForm = require('./pokemons/pokemonForm.jsx');

var App = React.createClass({

  render: function() {
    return (
      <div id='pokedex'>
        <div className='pokemon-index-pane'>
          <PokemonForm />
          <PokemonIndex />
        </div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = App;
