"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addorder_1 = __importDefault(require("./addorder"));
const deletorder_1 = __importDefault(require("./deletorder"));
const findorder_1 = __importDefault(require("./findorder"));
const checkoutorder_1 = __importDefault(require("./checkoutorder"));
let chooseChioce = (finalArrayObject) => {
    const choice = require('prompt-sync')();
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
    let choicerecursive = (y = 'first') => {
        switch (chooseoption(y)) {
            case 'A':
                console.log("Add your order ");
                (0, addorder_1.default)(finalArrayObject);
                choicerecursive('another choice');
                break;
            case 'B':
                console.log("Delete your order ");
                (0, deletorder_1.default)(finalArrayObject);
                choicerecursive('another choice');
                break;
            case 'C':
                console.log("Find your order ");
                (0, findorder_1.default)(finalArrayObject);
                choicerecursive('another choice');
                break;
            case 'D':
                console.log("Checkout yyour orders ");
                (0, checkoutorder_1.default)(finalArrayObject);
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
