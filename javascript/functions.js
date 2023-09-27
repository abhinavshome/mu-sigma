// function add(n1, n2) {
//     return n1 + n2
// }

const add = function (n1, n2) {
    return n1 + n2
};

const sum = add(2, 7);
console.log(sum);

const average = function (n1, n2, f) {
    const s = f(n1, n2);
    return s / 2;
}

// const avg = average(3, 6, add);
const avg = average(3, 6, function (n1, n2) {
    return n1 + n2
});
console.log(avg);