"use strict";
//this is my arrow function here...
const arrowFunc = (sms, message) => {
    const fullSms = `hi Habib ${sms} ${message}`;
    return fullSms;
};
const sms = 'This is my books';
const message = 'You are a ginius programmer in this world';
const answer = arrowFunc(sms, message);
console.log(answer);
// 3 number sum in arrow funtion..
const n1 = 433;
const n2 = 764;
const n3 = 543;
const addNumber = (n1, n2, n3) => {
    const summation = n1 + n2 + n3;
    return summation;
};
const results = addNumber(n1, n2, n3);
console.log(results);
//void arrow function here...
const helloWorld = (hello) => {
    console.log(hello);
};
const hello = 'Hello world';
helloWorld(hello);
