//Array

const arr = [1, 2, 3, 4, 5]
console.log(arr);
console.log(arr[0]);
console.log(arr[4]);

// Array Methods
arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(1);
console.log(arr);

let arr1 = [];
arr.map((item) => {
    arr1.push(item * 2)
});
console.log(arr1);

let evenNumbers = arr.filter(item => item % 2 == 0);
console.log(evenNumbers);

const sum = arr.reduce((acc, cval) => acc + cval, 0);
console.log(sum);

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

arr.forEach(element => {
    console.log(element);    
});

//2D Array
let array = [[1, 2], [3, 4]]
console.log(array);

console.log(array[1][0]);