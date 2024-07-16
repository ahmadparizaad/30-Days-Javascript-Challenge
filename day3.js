//Control Structures

const num = 10;
if(num > 0){
    console.log(num + " is a positive number");
} else if(num < 0){
    console.log(num + " is a negative number");
} else{
    console.log(num + " is zero");
}

let age = 21;
if(age >= 18){
    console.log("You are eligible to vote");
} else{
    console.log("You are not eligible to vote");
}

let num1 = 100;
let num2 = 17;
let num3 = 12;

if(num1 > num2){
    if(num2 > num3){
        console.log(num1 + " is the greatest number");
    } else if(num1 > num3){
        console.log(num1 + " is the greatest number");
    } else{
        console.log(num3 + " is the greatest number");
    }
} else if(num2 > num3){
    console.log(num2 + " is the greatest number");
} else{
    console.log(num3 + " is the greatest number");
}

const val = 7;
switch(val){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}

const score = 95;

switch(true){
    case score>90:
        console.log("A");
        break;
    case score>80 && score<=90:
        console.log("B");
        break;
    case score>70 && score<=80:
        console.log("C");
    case score>60 && score<=70:
        console.log("D");
        break;
    case score>50 && score<=60:
        console.log("E");
        break;
    case score<=50:
        console.log("F");
        break;
}

score%2 == 0? console.log(score + " is even") : console.log(score + " is odd");

const year = 2025;
(year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? console.log(year + " is a leap year") : console.log(year + " is not a leap year");;