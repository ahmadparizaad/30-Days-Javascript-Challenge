const utils = require('./math')
const person = require('./person')
const _ = require('lodash')
const axios = require('axios')

const res1 = utils.sum(2, 3)
const res2 = utils.dif(2, 3)
const res3 = utils.mul(2, 3)
const res4 = utils.div(2, 3)
console.log(res1, res2, res3, res4);

console.log(person.greet());    
const arr = [1, 2, 3]
console.log(_.reverse(arr.slice())); // !dlroW olleH

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => console.log(res))
    .catch((err) => console.log(err))