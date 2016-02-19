var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');
var apiUtil = require('../../util/apiUtil.js');

var ToyDetail = React.createClass({

  getStateFromStore: function() {
    var tId = parseInt(this.props.params.toyId);
    var pId = parseInt(this.props.params.pokemonId);
    var toy = PokemonStore.findPokeToy(pId, tId);
    return toy;
  },

  _onChange: function() {
    this.setState({toy: this.getStateFromStore()});
  },

  getInitialState: function() {
    return ({toy: this.getStateFromStore()});
  },

  componentDidMount: function() {
    this.changeListener = PokemonStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.changeListener.remove();
  },

  componentWillReceiveProps: function(newProps) {
    apiUtil.fetchOnePokemon(newProps.params.pokemonId);
  },

  renderDetail: function() {
    if(this.state.toy){
      return (<div className="detail">
        <img src={this.state.toy.image_url} />
      </div>);
    } else {
      return;
    }
  },

  render: function() {
    return (
      <div>
        {this.renderDetail()}
      </div>
    );
  }

});

module.exports = ToyDetail;
