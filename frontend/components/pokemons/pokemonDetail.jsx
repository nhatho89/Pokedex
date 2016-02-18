var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');
var apiUtil = require('../../util/apiUtil.js');

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

  detailDiv: function() {
    if(this.state.pokemon){
      return (
        <div className="detail">
          Attack: {this.state.pokemon.attack}<br/>
          Defense: {this.state.pokemon.defense}<br/>
          <img src={this.state.pokemon.image_url} alt={this.state.pokemon.name} />
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
      </div>
    );
  }

});

module.exports = PokemonDetail;
