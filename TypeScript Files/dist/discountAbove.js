"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let discountAbove = (finalArrayObject, above, percentage) => {
    const percengate = (percentage / 100);
    console.log("///////////////////    Part E :    ///////////////////" /* partE */);
    return finalArrayObject
        .map(e => { return e.totalOrderPrice; })
        .map((element) => {
        return element > above ?
            element = element - (element * (percengate)) :
            element;
    });
};
exports.default = discountAbove;
