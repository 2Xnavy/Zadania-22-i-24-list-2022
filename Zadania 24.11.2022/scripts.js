// Zadanie 9:
const somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {resolve("Udało się!");}, 5000);
});

somePromise
.then(text => {console.log(text)})
.catch((error) => {console.error(error);});


// Zadanie 10:
function multiplyAsync(x, y){
    return new Promise((resolve, reject) => {
        if(isNaN(x))
            reject("X is not a number.");
        if(isNaN(y))
            reject("Y is not a number.");
        resolve(x*y);
    });
}

multiplyAsync(2, "XD")
multiplyAsync(5, 10)
.then(text => {console.log(text);})
.catch((error) => {console.error(error);});

// Zadanie 11:

