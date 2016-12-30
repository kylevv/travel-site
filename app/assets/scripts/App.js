// import Person from './modules/Person';
// import won't work without babel?
var Person = require('./modules/Person');
var $ = require('jquery');

console.log('Testing 123');

var john = new Person('John Doe', 'blue');
john.greet();

$('h1').remove();