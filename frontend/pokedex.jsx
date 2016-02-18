var React = require('react');
var ReactDom = require('react-dom');

var apiUtil = require('./util/apiUtil.js');
var PokemonStore = require('./stores/pokemon.js');
window.apiUtil = apiUtil;
window.PokemonStore = PokemonStore;


document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector('#root');
  ReactDom.render(<div>Hello World</div>, root);
});
