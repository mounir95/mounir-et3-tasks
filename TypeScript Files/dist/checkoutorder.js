"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const displayfunc_1 = __importDefault(require("./displayfunc"));
/////////// CHECKOUT ORDER //////////////////////
let checkoutorder = (finalArrayObject) => {
    console.log((0, displayfunc_1.default)(finalArrayObject, '$'));
};
exports.default = checkoutorder;
