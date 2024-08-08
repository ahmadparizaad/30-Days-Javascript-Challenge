//Closures

function parent(){
    message = "Hello";
    return function child(name){
        return `${message} ${name}`
    }
}

console.log(parent()('Mohammad'));

function generateId(){
    let id = 0;
    return function idGenerator(){
        return id++;
    }
}
console.log(generateId()());
console.log(generateId()());