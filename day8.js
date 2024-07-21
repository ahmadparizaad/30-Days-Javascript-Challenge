//ES6+ Features

const name = 'Ahmad'
const age = 21
console.log(`My name is ${name} and I am ${age} years old.`);

console.log(`${name} here\nMy age is ${age}.`);

const arr = [1, 2, 3, 4, 5]
const [a, b, c, d, e] = arr
console.log(a, b);

const book = {title: "Payaam e Mashriq", author: "Allama Iqbal"}
const {title, author} = book
console.log(`${title} by ${author}`);

const arr2 = [...arr, 6, 7, 8, 9]
console.log(arr);
console.log(arr2);

function sum(...numbers){
    return numbers.reduce((acc, curr) => acc + curr, 0)
}

console.log(sum(1, 2, 3));

function product(a, b=1){
    return a*b;
}

console.log(product(22));
console.log(product(22, 2));

const person = {
    name,
    age,
    greet() {
        console.log(`Hello, my name is ${this.nam} and I am ${this.age} years old.`);
    }
}

console.log(person);
person.greet()