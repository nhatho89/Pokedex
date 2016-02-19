var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

var App = require('./components/App.jsx');
var PokemonIndex = require('./components/pokemons/pokemonsIndex.jsx');
var PokemonDetail = require('./components/pokemons/pokemonDetail.jsx');
var ToyDetail = require('./components/toys/ToyDetail.jsx');

var routes = (
  <Route component={App} path="/">
    <Route component={PokemonDetail} path="pokemon/:pokemonId">
      <Route component={ToyDetail} path="toys/:toyId" />
    </Route>
  </Route>
);


document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector('#root');
  ReactDom.render(<Router>{routes}</Router>, root);
});
