//Operators

let num1  = 10;
let num2 = 8;
console.log("\nnum1 : " + num1 + "\nnum2 : " + num2);

console.log("\n.........Addition..........");
let sum = num1 + num2;
console.log("\nSum of two numbers is: " + sum);

console.log("\n.........Subtraction..........");
let sub = num1 - num2;
console.log("\nSubtraction of two numbers is: " + sub);

console.log("\n.........Multiplication..........");
let mul = num1 * num2;
console.log("\nMultiplication of two numbers is: " + mul);

console.log("\n.........Division..........");
let div = num1 / num2;
console.log("\nDivision of two numbers is: " + div);

console.log("\n.........Remainder..........");
let rem = num1 % num2;
console.log("\nRemainder of two numbers is : " + rem);

console.log("\n.........Assignment + Operator..........");
num1 += 1;
console.log("\nIncrement of num1 is: " + num1);

console.log("\n.........Assignment - Operator..........");
num2 -= 1;
console.log("\nDecrement of num2 is: " + num2);

console.log("\n.........Comparison Operators..........");
if(num1 > num2){
    console.log(num1 + " is greater than " + num2);
}

if(num1 < num2){
    console.log(num1 + " is less than " + num2);
}

if(num1 >= num2){
    console.log(num1 + " is greater than or equal to " + num2);
}

if(num1 <= num2){
    console.log(num1 + " is less than or equal to " + num2);
}

if(num1 == num2){
    log(num1 + " is equal to " + num2);
}

if(num1 === num2){
    log(num1 + " is equal to " + num2);
}

console.log("\n.........Logical Operators..........");
if(num1 > num2 && num1!= 0){
    console.log(true);
}
else{
    console.log(false);
}

if(num1 > num2 || num1 != 0){
    console.log(true);
}
else{
    console.log(false);
}

if(!(num1 > num2)){
    console.log("\n" + num1 + " is not greater than " + num2);
}

console.log("\n.........Ternary Operators..........\n");
num1 > num2 ? console.log(num1 + " is greater than " + num2) : console.log(num1 + " id less than " + num2 + "\n");