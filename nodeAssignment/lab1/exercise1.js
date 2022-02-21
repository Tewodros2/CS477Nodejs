// Exercise 1
// Write the necessary Node script to make this code work for all arrays: [1,2,3,4,5,6,7,8].//even(); // [2,4,6,8] [1,2,3,4,5,6,7,8].odd(); // [1,3,5,7] Test your code in Node.JS CL



function even(arrays) {
    let even = [];
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] % 2 == 0) {
            even.push(arrays[i])
        }
    }
    return even;
}
let arrays = [1, 2, 3, 4, 5, 6, 7, 8];
let ev = even(arrays)
console.log("even", ev)




