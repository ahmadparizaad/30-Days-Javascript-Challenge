//Error Handling in JavaScript

function error(){
    try{
        throw new Error("This is an error");
    
    } catch(error){
        console.log(error);
    }
}
error();

function div(a, b){
    try{
        if(b == 0){
            throw new Error("Cannot divide by zero");
        } else{
            console.log(a/b);
        }
    } catch(error){
        console.log(error);
    }
}

div(10, 2);
div(10, 0);

class customError extends Error{
    customError(){
        return `This is a custom error`
    }  
}

function customErrorFunction(){
    try{
        throw new customError("Calling custom error class instance")
    } catch(error){
        console.log(error);
    }
}
customErrorFunction()

const myPromise = new Promise((resolve, rejects) => {
    const rand = (Math.random()*10).toPrecision(1);
    console.log(rand);
    if(rand % 2 == 0){
        resolve()
    } else{
        rejects()
    }
})

myPromise
.then((rand) => console.log(`Given number is even`))
.catch((rand) => console.log(`Given number is odd`))

async function myAsyncFunction(){
    try{
        const rand = (Math.random()*10).toPrecision(1);
        console.log(rand);
        if(rand % 2 == 0){
            console.log(`Given number is even`)
        } else{
            throw new CustomError(`Given number is odd`)
        }
    } catch(error){
        console.log(error);
    }
}
myAsyncFunction()

const promise = new Promise((resolve, rejects) => {
    setTimeout(() => {
        const data = fetch('https://thisisinvalidurl.com')
        if(!data){
            rejects(new Error('Data not found'))
        } else{
        resolve(data)
        }
    }, 2000)
})

promise
.then((response) => {console.log(response)})
.catch((error) => {console.log(error)});

async function fetchData(){
    try{
        const data = await fetch('https://thisisinvalidurl.com')
        console.log(data);
    } catch(error){
        console.log("There is a problme in fetchig data");
    }
}

fetchData()