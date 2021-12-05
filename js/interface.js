"use strict";
const naymer = {
    name: 'Neymer',
    height: 6.1,
    weight: '62kg',
    clubs: ['Barcelona', 'manchester', 'liverpool', 'reall madrid'],
    salary: 200000,
    property: function () {
        console.log(`her clubes: ${this.clubs}`);
    },
    address: {
        city: 'parice',
        house: '543/3 first floore',
        room: 12,
    },
    addressPrint: () => {
        const object = naymer.address;
        for (const key in object) {
            console.log(key);
        }
    }
};
naymer.addressPrint();
//extent another object..
const ronaldo = {
    name: 'Neymer',
    height: 6.1,
    weight: '62kg',
    clubs: ['Barcelona', 'manchester', 'liverpool', 'reall madrid'],
    salary: 200000,
    property: function () {
        console.log(`her clubes: ${this.clubs}`);
    },
    address: {
        city: 'parice',
        house: '543/3 first floore',
        room: 12,
    },
    addressPrint: () => {
        const object = naymer.address;
        for (const key in object) {
            console.log(key);
        }
    }
};
naymer.addressPrint();
