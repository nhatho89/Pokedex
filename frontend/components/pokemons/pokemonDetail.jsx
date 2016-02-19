var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');
var apiUtil = require('../../util/apiUtil.js');
var ToysIndex = require('../toys/ToysIndex.jsx');

var PokemonDetail = React.createClass({
  getInitialState: function() {
    return ({pokemon: this.getStateFromStore()});
  },

  componentDidMount: function() {
    this.resetListener = PokemonStore.addListener(this.resetState);
  },

  componentWillUnmount: function() {
    this.resetListener.remove();
  },

  componentWillReceiveProps: function(newProps) {
    // this.setState({pokemon: this.getStateFromStore()});
    apiUtil.fetchOnePokemon(newProps.params.pokemonId);
  },

  resetState: function() {
    this.setState({pokemon: this.getStateFromStore()});
  },

  getStateFromStore: function() {
    var id = parseInt(this.props.params.pokemonId);
    var pokemon = PokemonStore.findById(id);
    return pokemon;
  },

  displayToys: function() {
    if (this.state.pokemon.hasOwnProperty('toys')) {
      return (
        <ToysIndex toys={this.state.pokemon.toys} />
      );
    } else {
      return;
    }
  },

  detailDiv: function() {
    if(this.state.pokemon){
      return (
        <div className="detail">
          <img
            src={this.state.pokemon.image_url}
            alt={this.state.pokemon.name}
            />
          <ul>
            <li>Name: {this.state.pokemon.name}</li>
            <li>Type: {this.state.pokemon.poke_type}</li>
            <li>Attack: {this.state.pokemon.attack}</li>
            <li>Defense: {this.state.pokemon.defense}</li>
            <li>
            </li>
            <li>{this.displayToys()}</li>
          </ul>
        </div>
      );
    } else {
      return <div className="detail"></div>;
    }
  },

  render: function() {
    return (
      <div>
        <div className="pokemon-detail-pane">

          {this.detailDiv()}

        </div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = PokemonDetail;
