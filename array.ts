//this is my array in typeScript...
const selary: number[] = [34, 45, 67, 89, 76, 54, 31, 74, 99, 33]
const arr = (selary: number[]): number => {
    let max: number = selary[0];
    for (let i:number = 0; i < selary.length; i++) {
        const element: number = selary[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}
const max: number = arr(selary);
console.log(`Max value is within the array: ${max}`);