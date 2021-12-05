//find out largest number within three numbers...
const largestNumber = (x1: number, x2: number, x3: number):number | string => {
    if (x1 > x2 && x > x3) {
        return `Largest number is ${x1}`;
    }
    else if (x2 > x1 && x2 > x3) {
        return `Largest number is ${x2}`;
    }
    else {
        return `Largest number is ${x3}`;
    }
}
const x1: number = 34;
const x2: number = 65;
const x3: number = 21;
const largest: number |string = largestNumber(x1, x2, x3);
console.log(largest)