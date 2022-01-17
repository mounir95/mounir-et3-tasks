"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//1- babel-cli and babel-preset-env were installed
//2- create a file .babelrc with content {    "presets": ["env"]}
//3- change from require to import
//4- run npx babel-node src/getinput.js
const constantfile_1 = __importDefault(require("./constantfile"));
const displayfunc_1 = __importDefault(require("./displayfunc"));
const getArrayObject_1 = __importDefault(require("./getArrayObject"));
const addArrayTimeout_1 = __importDefault(require("./addArrayTimeout"));
const arraySorting_1 = __importDefault(require("./arraySorting"));
const printAbove_1 = __importDefault(require("./printAbove"));
const discountAbove_1 = __importDefault(require("./discountAbove"));
const chooseChioce_1 = __importDefault(require("./chooseChioce"));
async function someFunction() {
    const prompt = require('prompt-sync')();
    let str = true;
    let checkordernumber = () => {
        while (str) {
            const ordernumber = prompt('Please enter your order : ');
            if (!isNaN(ordernumber) && ordernumber.toString().indexOf('.') == -1 /* negativeone */ && ordernumber.toString().indexOf('#') == -1 /* negativeone */) {
                if (ordernumber >= 1) {
                    return parseInt(ordernumber);
                    str = false;
                }
                else {
                    console.log(`The order number should be higher than 1.`);
                }
            }
            else {
                console.log(`Please enter a correct order number where order number should be an integer number higher than 1.`);
            }
        }
    };
    const myordernumber = checkordernumber();
    console.log(`Hey the order number is : ` + myordernumber);
    let [largeboxobject, mediumboxobject, smallboxobject, bagprice, currency, orderId] = (0, constantfile_1.default)();
    let finalArrayObject = [(0, getArrayObject_1.default)(myordernumber)];
    console.log("///////////////////    Part A :    ///////////////////" /* partA */);
    console.log((0, displayfunc_1.default)(finalArrayObject, currency));
    // // let valuesarray : number[] = constants()[constants().length-1];
    let valuesarray = (0, constantfile_1.default)()[6 /* six */];
    console.log(valuesarray);
    await (0, addArrayTimeout_1.default)(finalArrayObject, (((valuesarray.length) * 5 /* five */) + 1 /* one */), valuesarray)[0 /* zero */];
    finalArrayObject = await (0, arraySorting_1.default)(finalArrayObject);
    await console.log((0, printAbove_1.default)(finalArrayObject, 280 /* twoeigthy */));
    await console.log((0, discountAbove_1.default)(finalArrayObject, 400 /* fourhund */, 15 /* fifteen */));
    await (0, chooseChioce_1.default)(finalArrayObject);
}
someFunction();
