//Loops

for(i=1; i<=10; i++){
    console.log(i);
}

for(i=1; i<=10; i++){
    console.log(i*5);
}

let sum = 0
i = 1
while(i<=10){
    sum += i
    i++
}
console.log(sum);

let i = 10;
while(i>0){
    console.log(i);
    i--
}

let num = 1;
do{
    console.log(num);
    num++
} while(num<=5)

const prompt = require('prompt-sync')();

let ui = prompt("Enter a number : ");
let fact = 1;
do{
    fact *= ui
    ui--
} while(ui>0)
console.log(fact);

for(i=1; i<=5; i++){
    let row = '';
    for(j=1; j<=i; j++){
        row += '* ';
    }
    console.log(row);
}

for(i=1; i<=10; i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

for(i=1; i<=10; i++){
    if(i==7){
        break;
    }
    console.log(i);
}