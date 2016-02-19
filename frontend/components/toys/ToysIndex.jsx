var React = require('react');
var ToyIndexItem = require('./ToyIndexItem.jsx');

var ToysIndex = React.createClass({

  ToyIndexList: function(){
    if (this.props.toys) {
      return this.props.toys.map(function(toy) {
        return <ToyIndexItem key={toy.id} toy={toy} />;
      });
    } else {
      return;
    }
  },

  render: function() {
    return (
      <ul>
        {this.ToyIndexList()}
      </ul>
    );
  }

});

module.exports = ToysIndex;
