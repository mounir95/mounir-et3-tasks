"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constantfile_1 = __importDefault(require("./constantfile"));
let { largeboxobject, mediumboxobject, smallboxobject, bagprice, currency, orderId } = (0, constantfile_1.default)();
let boxesarrayfun = (par) => {
    var boxesarray = [];
    const arrayoflargeobject = { size: largeboxobject.size, numbers_of_Bags: largeboxobject.value * parseInt(String(par / largeboxobject.value)), price_of_Boxes: largeboxobject.price * parseInt(String(par / largeboxobject.value)), quantity_of_Size: parseInt(String(par / largeboxobject.value)) };
    boxesarray.push(arrayoflargeobject);
    par = par % largeboxobject.value;
    const arrayofmediumobject = { size: mediumboxobject.size, numbers_of_Bags: mediumboxobject.value * parseInt(String(par / mediumboxobject.value)), price_of_Boxes: mediumboxobject.price * parseInt(String(par / mediumboxobject.value)), quantity_of_Size: parseInt(String(par / mediumboxobject.value)) };
    boxesarray.push(arrayofmediumobject);
    par = par % mediumboxobject.value;
    if (par > smallboxobject.value) {
        const arrayofsmallobject = { size: smallboxobject.size, numbers_of_Bags: par, price_of_Boxes: smallboxobject.price * 2, quantity_of_Size: 2 };
        boxesarray.push(arrayofsmallobject);
    }
    else if (par > 0) {
        const arrayofsmallobject = { size: smallboxobject.size, numbers_of_Bags: par, price_of_Boxes: smallboxobject.price * 1, quantity_of_Size: 1 };
        boxesarray.push(arrayofsmallobject);
    }
    else {
        const arrayofsmallobject = { size: smallboxobject.size, numbers_of_Bags: par, price_of_Boxes: smallboxobject.price * par, quantity_of_Size: par };
        boxesarray.push(arrayofsmallobject);
    }
    return boxesarray;
};
exports.default = boxesarrayfun;
