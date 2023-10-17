//Create a promise that will be resolved after 5 seconds 
let myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise resolved")
	}, 5000)
})

// console log before calling promise
console.log("Before calling promise");

// call the promise 
myPromise.then((successMessage) => {
	console.log("From callback " + successMessage);
})

// console log after the promise 

console.log("After promise")