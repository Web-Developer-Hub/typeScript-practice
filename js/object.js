"use strict";
//this is object within typeScript....
const student = {
    id: '33/18',
    roll: 144369,
    name: 'Habibor Rahaman',
};
const student2 = {
    id: '33/68',
    roll: 144576,
    age: 22,
    name: 'Wahidur Rahaman',
    books: ['TypeScript', 'Python', 'c++', 'java', 'c#', 'JavaScript', 'PHP'],
    friends: ['Tarek', 'Wahidur', 'Rifat', 'Arafat'],
    accesProperty: function () {
        console.log(this.books);
    },
    fans: function () {
        console.log(this.friends);
    },
    address: {
        house: '21/28, floore-2',
        road: '14/13',
        city: 'Dhaka',
        country: 'Bangladesh',
    },
    addresFunc: () => {
        console.log(student2.address);
    }
};
// student2.addresFunc();
// another object create ise common type...
const student3 = {
    id: '33/68',
    roll: 144576,
    age: 22,
    name: 'Wahidur Rahaman',
    books: ['TypeScript', 'Python', 'c++', 'java', 'c#', 'JavaScript', 'PHP'],
    friends: ['Tarek', 'Wahidur', 'Rifat', 'Arafat'],
    accesProperty: function () {
        console.log(this.books);
    },
    fans: function () {
        console.log(this.friends);
    },
    address: {
        house: '21/28, floore-2',
        road: '14/13',
        city: 'Dhaka',
        country: 'Bangladesh',
    },
    addresFunc: () => {
        console.log(student3.address);
    }
};
console.log(student3);
