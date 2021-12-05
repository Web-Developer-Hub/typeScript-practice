//this is my arrow function here...
const arrowFunc = (sms:string, message:string):string => {
    const fullSms: string = `hi Habib ${sms} ${message}`;
    return fullSms;
}
const sms: string = 'This is my books';
const message: string = 'You are a ginius programmer in this world';
const answer = arrowFunc(sms, message)
console.log(answer);

// 3 number sum in arrow funtion..
const n1: number = 433
const n2:number =  764
const n3: number = 543
const addNumber = (n1:number, n2:number, n3:number):number => {
    const summation:number = n1 + n2 + n3;
    return summation;
}
const results = addNumber(n1, n2, n3);
console.log(results);

//void arrow function here...
const helloWorld = (hello:string):void => {
    console.log(hello)
}
const hello: string = 'Hello world';
helloWorld(hello)