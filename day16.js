Recursion

let fact = 1
function factorial(num){
    if(num>0){
        fact = fact*num;
        factorial(num-1);
    }
    return fact;
}

console.log(factorial(5)); //120
console.log(factorial(4)); //24
console.log(factorial(3)); //6

function fib(n){
    if(n==0){
        return 0;
    }

    if(n==1){
        return 1;
    }

    return fib(n-1) + fib(n-2);
}
console.log(fib(3)); //2
console.log(fib(4)); //3
console.log(fib(5)); //5

arr = [1,2,3,4,5,6,7,8,9,10];

function arrSum(arr, index=0){
    if(index === arr.length){
        return 0;
    }


    return arr[index] + arrSum(arr, index + 1);
}

console.log(arrSum(arr)); //55
console.log(arrSum([]));
console.log(arrSum([1, 2, 3, 4, 5]));


function maxOfArr(arr, index=0, max = -Infinity){
    if(index === arr.length){
        return max;
    }
    
    return maxOfArr(arr, index + 1, arr[index] > max ? arr[index] : max)
}

console.log(maxOfArr([1, 5, 3, 9, 2])); // 9
console.log(maxOfArr([10, 20, 30])); // 30
console.log(maxOfArr([-5, -2, -10])); // -2

