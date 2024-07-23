//Promises and Async/Await

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if(success){
            resolve('Promise resolved')
        } else{
            reject('Promise rejected')
        }
        
    }, 2000)
})
promise.then((res) => {
    console.log(res);
})
promise.catch((err) => {
    console.log(err);
})

function fetchDataFromServer(data){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('Fetched Data: ', data);
            resolve(data)
        }, 1000)                            
    })
}

fetchDataFromServer('Data 1')
.then((data) => {
    console.log('Processing Data 1');
    return fetchDataFromServer('Data 2')
})
.then((data) => {
    console.log('Processing Data 2');
    return fetchDataFromServer('Data 3')
})
.then((data) => {
    console.log('Processing Data 3');
    console.log('All data fetche dand processed');
})
.catch((error) => {
    console.log('Error: ', error);
})

async function asyncAwait(promise){
    try {
        const result = await promise
        console.log(`Resolved value: ${result}`);
    } catch (error) {
        console.log(error);
    }
}

const expPromise = new Promise((resolve) => {
    setTimeout(() => resolve('Example data'), 1000)
})

asyncAwait(expPromise)

async function handleRejectedPromise(promise) {
    try {
        const result = await promise;
        console.log('Resolved value:', result);
    } catch (error) {
        console.error('Error message:', error.message);
    }
}

// Example of a rejected promise
const rejectedPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Promise was rejected')), 1000);
});

handleRejectedPromise(rejectedPromise);

fetch('https://api.artic.edu/api/v1/artworks/129884')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

async function fetchData(){
    try{
        const data = await fetch('https://api.artic.edu/api/v1/artworks/129884')
        console.log(data);
    } catch(error){
        console.log(error);
    }
}

fetchData()

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "one")
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "two")
})

Promise.all([promise1, promise2])
.then((values) => console.log(values))
.catch((error) => console.log(error))

Promise.race([promise1, promise2])
.then((value) => console.log(value))
.catch((error) => console.log(error))