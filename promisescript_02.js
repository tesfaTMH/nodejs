//Create a promise that will be resolved after 6 seconds 
let myPromise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise 1 resolved")
	}, 5000)
})

let myPromise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise 2 resolved")
	}, 3000)
})

// console log before calling promise
console.log("Before calling promise");

// call the promise 
myPromise1.then((successMessage) => {
	console.log("From callback " + successMessage);
	myPromise2.then(() => {
		console.log("From callback " + successMessage)
	})
})

// console log after the promise 

console.log("After promise")