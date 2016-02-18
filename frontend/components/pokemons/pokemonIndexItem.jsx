var React = require('react');
var History = require('react-router').History;

var PokemonIndexItem = React.createClass({

  mixins: [History],

  showDetail: function() {
    this.history.push('/pokemon/' + this.props.pokemon.id);
  },

  render: function() {
    return (
      <div className='poke-list-item' onClick={this.showDetail}>
        {this.props.pokemon.name + " " + this.props.pokemon.poke_type}
      </div>
    );
  }

});

module.exports = PokemonIndexItem;
