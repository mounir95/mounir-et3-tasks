"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getArrayObject_1 = __importDefault(require("./getArrayObject"));
const orderBy_1 = __importDefault(require("lodash/orderBy"));
const userarray = require('prompt-sync')();
/////////// ADD ORDER //////////////////////
let addorder = (finalArrayObject) => {
    console.log("NOTE : charecters, hexadecimals + float numbers will be ignored, only the positive integer values are allowed ");
    let arraybyuser = userarray("Enter your value/values using ',' in between (ex: for one value 43/ for values : 43,23,123): ");
    arraybyuser = arraybyuser
        .split(',')
        .filter(element => {
        if (!isNaN(element) && element.toString().indexOf('.') == -1 && element.toString().indexOf('#') == -1) {
            return element;
        }
    }).map(element => parseInt(element))
        .filter(element => Number.isInteger(parseInt(element)) && element > 0)
        .sort((a, b) => a - b);
    if (arraybyuser.length > 0) {
        arraybyuser.map((element) => {
            finalArrayObject.push((0, getArrayObject_1.default)(element));
        });
        console.log('the total Order numbers is/are : ');
        console.log((0, orderBy_1.default)(finalArrayObject, ['totalOrderPrice'], ['asc']).map(e => { return e = e.totalNumber; }));
        finalArrayObject = (0, orderBy_1.default)(finalArrayObject, ['totalOrderPrice'], ['asc']);
        return finalArrayObject;
    }
    else {
        console.log("the value you entered is not correct, please check the note below : ");
        addorder(finalArrayObject);
    }
};
exports.default = addorder;
