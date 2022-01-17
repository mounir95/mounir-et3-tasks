"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orderBy_1 = __importDefault(require("lodash/orderBy"));
const getArrayObject_1 = __importDefault(require("./getArrayObject"));
const displayfunc_1 = __importDefault(require("./displayfunc"));
let chooseChioce = (finalArrayObject) => {
    const choice = require('prompt-sync')();
    const userarray = require('prompt-sync')();
    /////////// CHOOSE LIST //////////////////////
    let chooseoption = (y = 'first') => {
        console.log("A : for add order. \n");
        console.log("B : for delet order. \n");
        console.log("C : find an order. \n");
        console.log("D : for checkout. \n");
        console.log("Q : for Exit. \n");
        let option;
        if (y === 'first') {
            option = choice('Please enter your choice : ');
        }
        else if (y === 'another choice') {
            option = choice('Please enter another choice or Q for Exit: ');
        }
        else {
            option = choice('Please enter a correct choice from above (make sure your using UperCase): ');
        }
        return option;
    };
    /////////// ADD ORDER //////////////////////
    let addorder = () => {
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
            addorder();
        }
    };
    /////////// DELETE ORDER //////////////////////
    let deleteorder = () => {
        console.log("NOTE : charecters, hexadecimals + float numbers will be ignored, only the positive integer values are allowed ");
        let arraybyuser = userarray("Enter the ID of value/values to be deleted using ',' in between (ex: for one value 43/ for values : 43,23,123): ");
        arraybyuser = arraybyuser
            .split(',')
            .filter(element => {
            if (!isNaN(element) && element.toString().indexOf('.') == -1 && element.toString().indexOf('#') == -1) {
                return element;
            }
        }).map(element => parseInt(element))
            .filter(element => Number.isInteger(parseInt(element)) && element > 0)
            .map((newelement) => {
            finalArrayObject = finalArrayObject.filter(element => {
                return newelement !== element['orderID'];
            });
        });
        finalArrayObject = (0, orderBy_1.default)(finalArrayObject, ['totalOrderPrice'], ['asc']);
        return finalArrayObject;
    };
    /////////// FIND ORDER //////////////////////
    let findorder = () => {
        console.log("NOTE : charecters, hexadecimals + float numbers will be ignored, only the positive integer values are allowed ");
        let arraybyuser = userarray("Enter the Order Number/Numbers to be filteres using ',' between more than one number (ex: for one number 43 / for numbers : 43,23,123): ");
        let arrayfromuser = [];
        arraybyuser = arraybyuser.split(',')
            .filter(element => {
            if (!isNaN(element) && element.toString().indexOf('.') == -1 && element.toString().indexOf('#') == -1) {
                return element;
            }
        }).map(userelement => {
            arrayfromuser.push.apply(arrayfromuser, finalArrayObject.filter(element => {
                return element['totalNumber'] === parseInt(userelement);
            }));
        });
        console.log((0, displayfunc_1.default)(arrayfromuser, '$'));
        return arrayfromuser;
    };
    /////////// CHECKOUT ORDER //////////////////////
    let checkoutorder = () => {
        console.log((0, displayfunc_1.default)(finalArrayObject, '$'));
    };
    let choicerecursive = (y = 'first') => {
        switch (chooseoption(y)) {
            case 'A':
                console.log("Add your order ");
                addorder();
                choicerecursive('another choice');
                break;
            case 'B':
                console.log("Delete your order ");
                deleteorder();
                choicerecursive('another choice');
                break;
            case 'C':
                console.log("Find your order ");
                findorder();
                choicerecursive('another choice');
                break;
            case 'D':
                console.log("Checkout yyour orders ");
                checkoutorder();
                choicerecursive('another choice');
                break;
            case 'Q':
                console.log("Exit");
                break;
            default:
                console.log("Please enter a correct choice from the below : ");
                choicerecursive('default');
                break;
        }
    };
    console.log("///////////////////    Part F :    ///////////////////" /* partF */);
    choicerecursive();
};
exports.default = chooseChioce;
