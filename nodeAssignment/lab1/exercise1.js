// Exercise 1
// Write the necessary Node script to make this code work for all arrays: [1,2,3,4,5,6,7,8].//even(); // [2,4,6,8] [1,2,3,4,5,6,7,8].odd(); // [1,3,5,7] Test your code in Node.JS CL

Array.prototype.even = function () {
    let even = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 == 0) {
            even.push(this[i])
        }
    }
    return even;
}

console.log("even", [1, 2, 3, 4, 5, 6, 7, 8].even())

Array.prototype.odd = function () {
    let odd = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 != 0) {
            odd.push(this[i])
        }
    }
    return odd;
}
console.log("odd ", [1, 2, 3, 4, 5, 6, 7, 8].odd())




