//this is my class in typeScript..
class Car{
    model: string;
    name: string;
    price: number;
    color: string;
    reating: boolean;
    private _millage: number;

    constructor(model:string, name:string, price:number, color:string, reating: boolean, _millage: number) {
        this.model = model;
        this.name = name;
        this.price = price;
        this.color = color;
        this.reating = reating;
        this._millage = _millage;
    }
    getActualMilage = (millage:number):number => {
        const reallMillage = this._millage * millage;
        return reallMillage;
    }

    getTotalPrice = (tax:number):number => {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new Car('Toyota Primeo', 'Primeo', 1800000, 'black', true, 120);
const vat: number = toyota.getTotalPrice(20);
console.log(vat);
const millage: number = toyota.getActualMilage(100);
console.log(millage);