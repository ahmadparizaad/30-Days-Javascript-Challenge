const person = {
    name: "Mohammad Ahmad",
    age: 21,
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

module.exports = person;