// javascript is single-threaded, everything runs in a main thread 

// asynchronous things in programming - because u dont know when u get a response or what it contains: 
// network 
// user input 
// file system handling
// databaser 

//solution 1 - callback functions
//problem with 1: callback hell / pyramid of doom 

// solution 2 - promises 
// not better than callback functions, but better syntax as it is syntactic sugar of callback functions
//2 states of promises 
// pending
// fulfilled: resolved OR rejected

//problem with 2: can end up with nestled promises

// solution 3 - async/await
// syntactic sugar for promises 

// problem with 3:


// ==========================================================================================

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         try {
//             throw "no"
//             resolve("everything went well")
//         } catch (error){
//             reject(error)
//         }
//     }, 2000)
// })
// .then((message) => console.log(message))
// .catch((errorMessage) => console.log(errorMessage))

/* create a promisified function (myPromise) that is a function that returns a promise. 
make it resolve as "something good" and/or reject as "something bad" create a 3 second delay to simulate asynchronous behavior */

function myPromise() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw new Error ("something bad")
            resolve("something good")
        } catch (error){
            reject(error)
        }
    }, 3000)
})
}

// myPromise()
// .then((successMessage) => console.log(successMessage))
// .catch((errorMessage) => console.log(errorMessage)) - skrives om til async/await

// try {
//     const successMessage = await myPromise();
//     console.log(successMessage);
// } catch (error) {
//     console.log(error);
// }

/* assignment
    try to simulate the fetch function
    call it myFetch
    it should return the promise json() after 2.5 seconds
    so that you can call response.json() on it
    as much as possible try to imagine how fetch works and simulate the underlying code
*/
function myFetch(URL, options) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                json: () => new Promise((resolve, reject) => resolve("Data from the server"))
            });
        }, 2500);
    });
}

// myFetch("somewebsite.com")
// .then((result) => result.json())
// .then((response) => console.log(response));

// IIFE 
(async function () {
    const result = await myFetch("somewebsite.com");
    const response = await result.json();
    console.log(response);
})()