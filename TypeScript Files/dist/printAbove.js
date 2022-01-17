"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const filter_1 = __importDefault(require("lodash/filter"));
let printAbove = (finalArrayObject, above) => {
    console.log("///////////////////    Part D :    ///////////////////" /* partD */);
    let costabove = (0, filter_1.default)(finalArrayObject, element => element.totalOrderPrice > above)
        .map(e => { return e = e.totalOrderPrice; }); // for array with all total cost property only
    return costabove;
};
exports.default = printAbove;
