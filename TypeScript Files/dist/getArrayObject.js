"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constantfile_1 = __importDefault(require("./constantfile"));
const boxesArray_1 = __importDefault(require("./boxesArray"));
let [largeboxobject, mediumboxobject, smallboxobject, bagprice, currency, orderId] = (0, constantfile_1.default)();
let getArrayObject = (myordernumber) => {
    let order = (par) => {
        const bagp = bagprice;
        const boxesarray = (0, boxesArray_1.default)(par);
        const finalobject = {
            orderID: orderId,
            totalNumber: boxesarray.reduce((accumulator, current) => accumulator + (current.numbers_of_Bags), 0),
            totalCoffePrice: boxesarray.reduce((accumulator, current) => accumulator + (current.numbers_of_Bags * bagp), 0),
            totalBagsPrice: boxesarray.reduce((accumulator, current) => (accumulator + current.price_of_Boxes), 0),
            totalOrderPrice: boxesarray.reduce((accumulator, current) => accumulator + (current.numbers_of_Bags * bagp), 0) + boxesarray.reduce((accumulator, current) => (accumulator + current.price_of_Boxes), 0)
        };
        orderId++;
        return finalobject;
    };
    return order(myordernumber);
};
exports.default = getArrayObject;
