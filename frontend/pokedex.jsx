var React = require('react');
var ReactDom = require('react-dom');


document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector('#root');
  ReactDom.render(<div>Hello World</div>, root);
});
