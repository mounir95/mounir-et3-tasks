"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orderBy_1 = __importDefault(require("lodash/orderBy"));
const userarray = require('prompt-sync')();
/////////// DELETE ORDER //////////////////////
let deleteorder = (finalArrayObject) => {
    console.log("NOTE : charecters, hexadecimals + float numbers will be ignored, only the positive integer values are allowed ");
    let arraybyuser = userarray("Enter the ID of value/values to be deleted using ',' in between (ex: for one value 43/ for values : 43,23,123): ");
    arraybyuser = arraybyuser
        .split(',')
        .filter(element => {
        if (!isNaN(element) && element.toString().indexOf('.') == -1 /* negativeone */ && element.toString().indexOf('#') == -1 /* negativeone */) {
            return element;
        }
    }).map(element => parseInt(element))
        .filter(element => Number.isInteger(parseInt(element)) && element > 0)
        .map((newelement) => {
        finalArrayObject = finalArrayObject.filter((element, index) => {
            if (newelement === element['orderID']) {
                finalArrayObject.splice(index, 1);
            }
            else {
                return newelement !== element['orderID'];
            }
        });
    });
    finalArrayObject = (0, orderBy_1.default)(finalArrayObject, ['totalOrderPrice'], ['asc']);
    return finalArrayObject;
};
exports.default = deleteorder;
