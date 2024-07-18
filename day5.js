//Functions

function isEven(num){
    if(num % 2 == 0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}

isEven(0);

function square(num){
    let square = num ** 2;

console.log(square);
}

square(5);

function max(num1, num2){
    console.log((num1 > num2) ? num1 : num2); 
}
max(2, 5);

function join(str1, str2){
    console.log(str1 + " " + str2);
}

join("md", "ahmad")

let sum = (a, b) => {return a+b}
console.log(sum(2, 3));

const findChar = (str, char) => {
    for(i=0; i<str.length; i++){
        if(str[i] === char){
            return true;
        } 
    }
    return false;
}

console.log(findChar("hello", "o"));

const product = (a, b=5) => {
    return a*b;
}

console.log(product(10));

const greet = (name, age = 20) => {
    return "Good morning " + name + ". You are " + age + " years old."
}

console.log(greet("Ahmad", 21));

function higherOrder(num, func){
    while(num>=1){
        let val = func(num);
        num--
        console.log(val);
    }
    
}
function callback(num){
    return num * num;
}

console.log(higherOrder(5, callback));

function higherOrderFunction(val, f1, f2){
    let res = f1(val);
    let finalRes = f2(res);
    return finalRes;
}

function f1(val){
    return 2 * val; 
}

function f2(val){
    return val + 2;
}

console.log(higherOrderFunction(5, f1, f2));

