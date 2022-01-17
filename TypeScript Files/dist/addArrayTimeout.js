"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getArrayObject_1 = __importDefault(require("./getArrayObject"));
let addArrayTimeout = (finalArrayObject, del, valuesarray) => {
    let GivenValuefun = (valuesarray) => {
        const arraygivenvalue = [];
        valuesarray.map((element) => {
            arraygivenvalue.push((0, getArrayObject_1.default)(element));
        });
        return arraygivenvalue;
    };
    const arraygivenvalue = GivenValuefun(valuesarray);
    // finalArrayObject = arraygivenvalue; // result without the order['entred numebr]
    finalArrayObject.push.apply(finalArrayObject, arraygivenvalue); // result with the order['entered number]7
    let arrayindex = 0;
    let arraytimeout = () => {
        console.log(finalArrayObject[arrayindex]);
        arrayindex++;
        if (arrayindex < finalArrayObject.length) {
            setTimeout(arraytimeout, 5000 /* delfive */);
        }
    };
    console.log("///////////////////    Part B :    ///////////////////" /* partB */);
    console.log("Adding to your first order this array of orders : " + valuesarray + " each array element in 5 second");
    arraytimeout();
    return [new Promise(resolve => {
            setTimeout(resolve, del * 1000 /* delone */);
        }), finalArrayObject];
};
exports.default = addArrayTimeout;
