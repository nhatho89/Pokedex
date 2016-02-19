var React = require('react');
var History = require('react-router').History;

var ToyIndexItem = React.createClass({
  mixins: [History],

  showDetail: function() {
    this.history.push('/pokemon/'+this.props.toy.pokemon_id+'/toys/'+this.props.toy.id);
  },

  render: function() {
    return (
      <li className="toy-list-item" onClick={this.showDetail}>
        <ul>
          <li>Name: {this.props.toy.name}</li>
          <li>Happiness: {this.props.toy.happiness}</li>
          <li>Price: {this.props.toy.price}</li>
        </ul>
      </li>
    );
  }

});

module.exports = ToyIndexItem;
