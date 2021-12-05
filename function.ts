//this my normal function of tyrpScrip...
function add(x: number, y: number):number {
    const sum: number = x + y;
    return sum;
}
const x: number = 34;
const y: number = 45;
const result: number = add(x, y);
console.log(result);

// sum 3 number in function..
function myfunc(a: number, b: number, c: number):number {
    const mySum: number = a + b + c;
    return mySum;
}
const n:number = 34;
const m:number = 76;
const c:number = 65;
const myResult = myfunc(n, m, c);
console.log(myResult);

//void funtion declearation here..
function print(myName: string):void {
    console.log(myName)
}
const myNames:string = 'Habibor Rahaman'
print(myNames)