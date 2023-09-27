let user = {
    username: 'sam0441',
    age: 12,
    address: {
        city: 'Bangalore',
        area: 'ITPL'
    },
    introduce: function () {
        console.log(`Hello! I am ${this.username} and I live in ${this.address.city}`)
    }
};

console.log(user.username);
console.log(user.address.city);
console.log(user['address']);
console.log(user['address']['area']);
user.introduce()
