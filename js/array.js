"use strict";
//this is my array in typeScript...
const selary = [34, 45, 67, 89, 76, 54, 31, 74, 99, 33];
const arr = (selary) => {
    let max = selary[0];
    for (let i = 0; i < selary.length; i++) {
        const element = selary[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
};
const max = arr(selary);
console.log(`Max value is within the array: ${max}`);
