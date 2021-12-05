"use strict";
//this is my class in typeScript..
class Car {
    constructor(model, name, price, color, reating, _millage) {
        this.getActualMilage = (millage) => {
            const reallMillage = this._millage * millage;
            return reallMillage;
        };
        this.getTotalPrice = (tax) => {
            const taxAmount = this.price * tax / 100;
            const total = this.price + taxAmount;
            return total;
        };
        this.model = model;
        this.name = name;
        this.price = price;
        this.color = color;
        this.reating = reating;
        this._millage = _millage;
    }
}
const toyota = new Car('Toyota Primeo', 'Primeo', 1800000, 'black', true, 120);
const vat = toyota.getTotalPrice(20);
console.log(vat);
const millage = toyota.getActualMilage(100);
console.log(millage);
