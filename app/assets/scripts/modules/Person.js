var Person = function(name, color) {
  this.name = name;
  this.color = color;
};
Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name} and like ${this.color}.`);
};

module.exports = Person;