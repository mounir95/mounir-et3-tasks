"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sortBy_1 = __importDefault(require("lodash/sortBy"));
const orderBy_1 = __importDefault(require("lodash/orderBy"));
let arraySorting = (finalArrayObject) => {
    finalArrayObject = (0, sortBy_1.default)(finalArrayObject, 'totalOrderPrice');
    const sortedbytotalOrderPricearray = (0, orderBy_1.default)(finalArrayObject, ['totalOrderPrice'], ['asc'])
        .map((e) => { return e = e.totalOrderPrice; });
    console.log("///////////////////    Part C :    ///////////////////" /* partC */);
    console.log(sortedbytotalOrderPricearray); // bring the array of object for totalOrderPrice above 280$
    return finalArrayObject;
};
exports.default = arraySorting;
