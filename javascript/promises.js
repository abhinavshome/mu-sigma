function sayHi() {
    console.log('hi')
}

setTimeout(sayHi, 2000);
console.log('After say hi');

const numbersPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve([2, 3, 5])
        // reject('some error')
    }, 3000)
});

const success = function (data) {
    console.log('GOt this', data)
}
const error = function (err) {
    console.log('Some error happened', err)
}
// numbersPromise.then(success, error);
// console.log('After promise');

async function f() {
    try {
        const result = await numbersPromise;
        success(result)
        console.log('after success')
    } catch (err) {
        error(err)
    }
}

f();

console.log('after async f')


