var React = require('react');
var apiUtil = require('../../util/apiUtil.js');
var Link = require('react-addons-linked-state-mixin');

var PokemonForm = React.createClass({
  mixins: [Link],

  selectionOptions: function() {
    var options = window.pokemonTypes.map(function(pType){
      return <option value={pType}>{pType}</option>;
    });
    return (
      <select name="poke-type">
        {options}
      </select>
    );
  },

  render: function() {
    return (
      // <form className="new-pokemon" onSubmit={apiUtil.createPokemon}>
      // //   <input valueLink={this.linkState("name")}/><br/>
      // //   {this.selectionOptions()}<br/>
      // // <input type="submit">Submit</input>
      // </form>
      <div />
    );
  }

});

module.exports = PokemonForm;
